import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";

const CustomLink = () => {
  return (
    <Box sx={{ mr: 5 }}>
      <Button
        variant="contained"
        sx={{
          color: "white",
          backgroundColor: "#3772FF",
          borderRadius: 3,
          textTransform: "none",
          px: 2,
          py: 1,
          my: 2,
          "&: hover": {
            backgroundColor: "white",
            color: "#3772FF",
          },
        }}
      >
        <LaunchIcon sx={{ mr: 2 }} />
        Custom Link
      </Button>
    </Box>
  );
};

export default CustomLink;
