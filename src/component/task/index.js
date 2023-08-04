import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Typography, Button } from "@mui/material";

export default function TaskWithCheckbox(props) {
  const { complitedTask, taskName, deleteTask } = props;
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "7%" }}>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mr: 50 }}>
        <Typography
          variant="h5"
          sx={{
            textDecoration: complitedTask ? "line-through" : "",
          }}
        >
          {taskName}
        </Typography>
      </Box>
      <Box>
        <Button variant="contained" onClick={deleteTask}>
          Delete
        </Button>
      </Box>
    </Box>
  );
}
