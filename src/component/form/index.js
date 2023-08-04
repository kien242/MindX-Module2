import { Box, Button, FormControl, TextField } from "@mui/material";
import React from "react";

export default function FormAddTask() {
  return (
    <FormControl sx={{ width: "100%", mb: 3 }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Box sx={{ width: "65%", mr: 10 }}>
          <TextField
            id="outlined-basic"
            label="Add task"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            width: "20%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button variant="contained" sx={{ width: "100%" }}>
            Add
          </Button>
        </Box>
      </Box>
    </FormControl>
  );
}
