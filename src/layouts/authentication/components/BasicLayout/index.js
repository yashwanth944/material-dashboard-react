import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication pages components
import Footer from "layouts/authentication/components/Footer";
import tbrlogo from "assets/images/tbrlogo.svg";

function BasicLayout({ image, children }) {
  return (
    <PageLayout>
      <Grid container spacing={0}>
        <Grid item xs={6} sx={{ backgroundColor: "#ffffff" }}>
          <Box width="100%" sx={{ backgroundColor: "#ffffff" }} px={3} py={3}>
            <Box
              sx={{
                backgroundImage: ({
                  functions: { linearGradient, rgba },
                  palette: { gradients },
                }) =>
                  tbrlogo &&
                  `${linearGradient(
                    rgba(gradients.dark.main, 0.0),
                    rgba(gradients.dark.state, 0.0)
                  )}, url(${tbrlogo})`,
                backgroundSize: "contain",
                backgroundPosition: "flex-start",
                backgroundRepeat: "no-repeat",
                height: "2.5rem",
                position: "relative",
              }}
            />
          </Box>
          <Box
            px={1}
            height="90.5vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              backgroundColor: "#ffffff",
            }}
          >
            {children}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            position="absolute"
            width="50%"
            minHeight="100vh"
            sx={{
              backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                image &&
                `${linearGradient(
                  rgba(gradients.dark.main, 0.0),
                  rgba(gradients.dark.state, 0.0)
                )}, url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Grid>
      </Grid>
      <Footer light />
    </PageLayout>
  );
}

// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
