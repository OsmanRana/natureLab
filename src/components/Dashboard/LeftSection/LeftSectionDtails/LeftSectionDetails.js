import { Box, Typography } from "@mui/material";
import React from "react";

const listStyle = {
  color: "#808191",
};

const LeftSectionDetails = ({ listItem }) => {
  const { name, icon } = listItem;
  return (
    <Box
      sx={{
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        ml: 3,
        my: 3,
      }}
    >
      <Box style={listStyle}>{icon}</Box>
      <Typography variant="body1" style={listStyle} sx={{ ml: 3 }}>
        {name}
      </Typography>
    </Box>
  );
};

export default LeftSectionDetails;
