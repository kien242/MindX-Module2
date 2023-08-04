import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TaskWithCheckbox from "./component/task/index.js";
import FormAddTask from "./component/form/index.js";
import { Button, Grid } from "@mui/material";
import uniqid from "uniqid";

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
      id: 1,
      taskName: "Hoan thanh bai kiem tra 1",
      compile: false,
    },
    {
      id: 2,
      taskName: "Hoan thanh bai kiem tra 2",
      compile: false,
    },
    {
      id: 3,
      taskName: "Hoan thanh bai kiem tra 3",
      compile: false,
    },
    {
      id: 4,
      taskName: "Hoan thanh bai kiem tra 4",
      compile: false,
    },
  ]);
  const [activeTask, setActiveTask] = React.useState([]);
  const [compileTask, setCompileTask] = React.useState([]);

  const filterActiveTask = () => {
    const task = allTask.map((task) => {
      if (task.compile == 0) {
        return task;
      }
      console.log(task);
      setActiveTask([...activeTask, task]);
    });
    // setActiveTask([...activeTask, task]);
  };

  console.log(activeTask);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [taskText, setTaskText] = React.useState([]);
  const handleChangeTask = (event) => {
    setTaskText(event.target.value);
  };

  const newTask = () => {
    const newTask = {
      id: uniqid(),
      taskName: taskText,
      compile: false,
    };
    setAllTask([...allTask, newTask]);
  };

  const compileThisTask = (id) => {
    for (const i of allTask) {
      if (i.id === id) {
        i.compile = !i.compile;
      }
    }
    console.log(allTask);
  };

  const deleteThisTask = (id) => {
    const allNewTask = allTask.filter((task) => {
      return task.id !== id;
    });
    setAllTask(allNewTask);
  };

  const renderAllTask = allTask.map((task) => {
    return (
      <TaskWithCheckbox
        key={task.id}
        taskName={task.taskName}
        complitedTask={task.compile}
        deleteTask={() => {
          deleteThisTask(task.id);
        }}
        compileTask={() => {
          compileThisTask(task.id);
        }}
      />
    );
  });

  const renderActiveTask = activeTask.map(function (task) {
    return (
      <TaskWithCheckbox
        key={task.id}
        taskName={task.taskName}
        complitedTask={task.compile}
        deleteTask={deleteThisTask}
        compileTask={compileThisTask}
      />
    );
  });

  const renderCompileTask = compileTask.map(function (task) {
    return (
      <TaskWithCheckbox
        key={task.id}
        taskName={task.taskName}
        complitedTask={task.compile}
        deleteTask={deleteThisTask}
      />
    );
  });

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
                <Tab
                  label="Active"
                  {...a11yProps(1)}
                  sx={{ width: "33%" }}
                  onClick={filterActiveTask}
                />
                <Tab label="Compile" {...a11yProps(2)} sx={{ width: "33%" }} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <FormAddTask taskhandle={handleChangeTask} newTask={newTask} />
              {renderAllTask}
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <FormAddTask taskhandle={handleChangeTask} newTask={newTask} />
              {renderActiveTask}
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
              {renderCompileTask}
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
