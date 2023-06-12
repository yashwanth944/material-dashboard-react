import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import React from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";
import Footer from "layouts/authentication/components/Footer";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import coverImage from "assets/images/cover.svg";
import tbrlogo from "assets/images/tbrlogo.svg";

// function Basic() {
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleSetRememberMe = () => setRememberMe(!rememberMe);

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const navigate = useNavigate();
  return (
    <BasicLayout image={coverImage} tbrlogo={tbrlogo}>
      <Card sx={{ width: "50%", marginTop: "-3rem" }}>
        <Box p={2} mx={2} mt={-3} mb={1} borderRadius="md" textAlign="center">
          <Box borderRadius="lg" sx={{ bgcolor: "#fff" }}>
            <Typography
              variant="h4"
              fontWeight="medium"
              sx={{
                background: "linear-gradient(89.79deg, #E51956 0.18%, #79478E 99.84%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Login
            </Typography>
          </Box>
        </Box>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <Button
                variant="gradient"
                sx={{
                  background: "#DB1C54",
                  color: "#ffffff",
                  padding: "0.5rem",
                  "&:hover": {
                    color: "red",
                  },
                }}
                onClick={() => navigate("/dashboard")}
                fullWidth
              >
                sign in
              </Button>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  fontWeight="medium"
                  textGradient
                  color="error"
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
};
export default LoginPage;
