import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import Paper from "@mui/material/Paper";
import LeftSection from "./LeftSection/LeftSection";
import MiddleSection from "./MiddleSection/MiddleSection";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={2}>
          <LeftSection />
        </Grid>
        <Grid item md={7}>
          <MiddleSection />
        </Grid>
        <Grid item md={3}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
