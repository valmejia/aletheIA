import { Grid } from "@mui/material";
import * as React from "react";
import CustomDashboardLayout from "./CustomDashboardLayout";

const HomeNavbar = () => {
  return (
    <Grid>
      <CustomDashboardLayout>
        <Grid container spacing={2}></Grid>
      </CustomDashboardLayout>
    </Grid>
  );
};

export default HomeNavbar;