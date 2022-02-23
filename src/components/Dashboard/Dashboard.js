import { Box, Grid } from "@mui/material";
import React from "react";
import LeftSection from "./LeftSection/LeftSection";
import MiddleSection from "./MiddleSection/MiddleSection";
import RightSection from "./RightSection/RightSection";

const Dashboard = () => {
  return (
    <Box sx={{ mb: 16, mt: 8 }}>
      <Grid container spacing={2}>
        <Grid item md={2}>
          <LeftSection />
        </Grid>
        <Grid item md={7}>
          <MiddleSection />
        </Grid>
        <Grid item md={3}>
          <RightSection />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
