import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TaskWithCheckbox from "./component/task/index.js";
import FormAddTask from "./component/form/index.js";
import { Button, Grid, ListItem } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = React.useState(0);
  const [allTask, setAllTask] = React.useState([
    {
      id: "1",
      check: false,
      taskName: "Hoan thanh bai kiem tra 1",
      compile: false,
    },
    {
      id: "2",
      check: false,
      taskName: "Hoan thanh bai kiem tra 2",
      compile: true,
    },
    {
      id: "3",
      check: false,
      taskName: "Hoan thanh bai kiem tra 3",
      compile: false,
    },
    {
      id: "4",
      check: false,
      taskName: "Hoan thanh bai kiem tra 4",
      compile: false,
    },
  ]);

  const renderAllTask = allTask.map(function (task) {
    return (
      <TaskWithCheckbox
        key={task.id}
        taskName={task.taskName}
        complitedTask={task.compile}
      />
    );
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={"100%"}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ display: "flex", justifyContent: "center" }}
        >
          #todo
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: "60%",
            border: 2,
            borderRadius: 2,
            borderColor: "green",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "80%",
            }}
          >
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="tab"
                sx={{
                  display: "flex",
                  justifyContent: "space-around !important",
                }}
              >
                <Tab label="All" {...a11yProps(0)} sx={{ width: "33%" }} />
                <Tab label="Active" {...a11yProps(1)} sx={{ width: "33%" }} />
                <Tab label="Compile" {...a11yProps(2)} sx={{ width: "33%" }} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <FormAddTask />
              {renderAllTask}
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <FormAddTask />
              <TaskWithCheckbox taskName="adfhfadsf" complitedTask={false} />
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
              <TaskWithCheckbox taskName="adfh" complitedTask={true} />
              <Grid container justifyContent="flex-end">
                <Button variant="contained" color="error">
                  Delete
                </Button>
              </Grid>
            </CustomTabPanel>
          </Box>
        </Box>
      </Box>
    </>
  );
}
