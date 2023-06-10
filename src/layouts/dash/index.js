import { Typography } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";

const Dash = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Typography>Dashboard</Typography>
    </DashboardLayout>
  );
};

export default Dash;
