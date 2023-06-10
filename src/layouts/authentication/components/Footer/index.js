/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";
import Box from "@mui/material/Box";

function Footer({ light }) {
  const { size } = typography;

  return (
    <MDBox position="absolute" width="100%" bottom={0}>
      <MDBox
        width="50%"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        alignItems="center"
        mt={-4}
      >
        <MDBox
          width="100%"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          flexWrap="wrap"
          color="text"
          fontSize={size.sm}
          mx={1}
        >
          &copy;
          <MDTypography variant="button" fontWeight="medium" color="text">
            TBR Infra Private Limited
          </MDTypography>
        </MDBox>
        <MDBox
          width="100%"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          flexWrap="wrap"
          color="text"
          fontSize={size.sm}
          mx={1}
        >
          {new Date().getFullYear()}, made with
          <MDBox fontSize={size.md} color="text" mb={-0.5} mx={0.25}>
            <Icon color="inherit" fontSize="inherit">
              favorite
            </Icon>
          </MDBox>
          by
          <Link href="https://altzentech.com/" target="_blank">
            <MDTypography
              variant="button"
              fontWeight="medium"
              color="#e7481f"
              style={{ color: "#e7481f" }}
            >
              &nbsp;Altzen&nbsp;
            </MDTypography>
          </Link>
        </MDBox>
        {/* <MDBox
            component="ul"
            sx={({ breakpoints }) => ({
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              listStyle: "none",
              mt: 3,
              mb: 0,
              p: 0,

              [breakpoints.up("lg")]: {
                mt: 0,
              },
            })}
          >
            <MDBox component="li" pr={2} lineHeight={1}>
              <Link href="https://altzentech.com" target="_blank">
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  Altzen
                </MDTypography>
              </Link>
            </MDBox>
            <MDBox component="li" px={2} lineHeight={1}>
              <Link href="https://altzentech.com/about-us" target="_blank">
                <MDTypography variant="button" fontWeight="regular" color="#e7481f">
                  About Us
                </MDTypography>
              </Link>
            </MDBox>
            <MDBox component="li" px={2} lineHeight={1}>
              <Link href="https://altzentech.com/services-and-solutions" target="_blank">
                <MDTypography variant="button" fontWeight="regular" color="#e7481f">
                  Services & Solutions
                </MDTypography>
              </Link>
            </MDBox>
          </MDBox> */}
      </MDBox>
    </MDBox>
  );
}

// Setting default props for the Footer
Footer.defaultProps = {
  light: false,
};

// Typechecking props for the Footer
Footer.propTypes = {
  light: PropTypes.bool,
};

export default Footer;
