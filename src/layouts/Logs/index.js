import { Typography, Box } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import vehiclelogs from "assets/images/vehiclelogs.svg";
import vehicleheader from "assets/images/vehicleheader.svg";

const Logs = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            vehicleheader &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.0),
              rgba(gradients.dark.state, 0.0)
            )}, url(${vehicleheader})`,
          backgroundSize: "cover",
          borderRadius: "1rem",
          backgroundPosition: "flex-start",
          backgroundRepeat: "no-repeat",
          position: "relative",
          height: "15vh",
          marginTop: "1rem",
        }}
      />
      <Box
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            vehiclelogs &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.0),
              rgba(gradients.dark.state, 0.0)
            )}, url(${vehiclelogs})`,
          backgroundSize: "cover",
          backgroundPosition: "flex-start",
          backgroundRepeat: "no-repeat",
          position: "relative",
          height: "74vh",
          width: "100%",
        }}
      />
    </DashboardLayout>
  );
};

export default Logs;
