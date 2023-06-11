import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  DateRange,
  LocationCityOutlined,
  RamenDiningSharp,
  SocialDistance,
} from "@mui/icons-material";
import { Box, Typography, Grid, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { IconButton } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { TimeIcon } from "@mui/x-date-pickers";
import vehicleheader from "assets/images/vehicleheader.svg";

const VehicleLogs = () => {
  const navigate = useNavigate();
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
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          marginTop: "1rem",
          marginBottom: "1rem",
          boxShadow: `0px 12px 26px rgba(16, 30, 115, 0.06)`,
          borderRadius: "1rem",
          padding: "2rem",
          background: "white",
        }}
      >
        <Grid container direction="column" spacing={2}>
          <Grid
            item
            container
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-evenly", padding: "0.5rem" }}
          >
            <Box
              sx={{
                width: "100%",
                marginTop: "2rem",
                marginLeft: "1rem",
              }}
            >
              <Typography
                style={{ fontFamily: "Inter", fontSize: "15px", fontWeight: 900, color: "grey" }}
              >
                Enter Date details
              </Typography>
            </Box>
            <Grid item>
              <Box>
                <Typography sx={{ fontSize: "12px", fontWeight: "900" }}>Date</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <DateRange style={{ color: "black" }} />
                        </IconButton>
                      ),
                    }}
                  />
                </LocalizationProvider>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Typography sx={{ fontSize: "12px", fontWeight: "900" }}>Time Out</Typography>
                <TextField
                  placeholder="Enter time out"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Typography sx={{ fontSize: "12px", fontWeight: "900" }}>Time Return</Typography>
                <TextField
                  placeholder="Enter time return"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-evenly", padding: "0.5rem" }}
          >
            <Box
              sx={{
                width: "100%",
                marginTop: "2rem",
                marginLeft: "1rem",
              }}
            >
              <Typography
                style={{ fontFamily: "Inter", fontSize: "15px", fontWeight: 900, color: "grey" }}
              >
                Odometer Reading details
              </Typography>
            </Box>
            <Grid item>
              <Box>
                <Typography sx={{ fontSize: "12px", fontWeight: "900" }}>Start</Typography>
                <TextField
                  placeholder="Reading Start"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <RamenDiningSharp />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Typography sx={{ fontSize: "12px", fontWeight: "900" }}>End</Typography>
                <TextField
                  placeholder="Reading end"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <TimeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Typography sx={{ fontSize: "12px", fontWeight: "900" }}>
                  Reading distance
                </Typography>
                <TextField
                  placeholder="Enter Reading distance"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SocialDistance />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-evenly", padding: "0.5rem" }}
          >
            <Box
              sx={{
                width: "100%",
                marginTop: "2rem",
                marginLeft: "1rem",
              }}
            >
              <Typography
                style={{ fontFamily: "Inter", fontSize: "15px", fontWeight: 900, color: "grey" }}
              >
                Chainage details
              </Typography>
            </Box>
            <Grid item>
              <Box>
                <Typography sx={{ fontSize: "12px", fontWeight: "900" }}>From</Typography>
                <TextField
                  placeholder="Reading Start"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <RamenDiningSharp />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Typography sx={{ fontSize: "12px", fontWeight: "900" }}>To</Typography>
                <TextField
                  placeholder="Enter time out"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Typography sx={{ fontSize: "12px", fontWeight: "900" }}>Distance</Typography>
                <TextField
                  placeholder="Enter time return"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-evenly", padding: "0.5rem" }}
          >
            <Box
              sx={{
                width: "100%",
                marginTop: "2rem",
                marginLeft: "1rem",
              }}
            >
              <Typography
                style={{ fontFamily: "Inter", fontSize: "15px", fontWeight: 900, color: "grey" }}
              >
                Fuel details
              </Typography>
            </Box>
            <Grid item>
              <Box>
                <Typography sx={{ fontSize: "12px", fontWeight: "900" }}>Issued</Typography>
                <TextField
                  placeholder="Issued Amount"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Typography sx={{ fontSize: "12px", fontWeight: "900" }}>Rate</Typography>
                <TextField
                  placeholder="Rate"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Typography sx={{ fontSize: "12px", fontWeight: "900" }}>Amount</Typography>
                <TextField
                  placeholder="Amount"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-evenly", alignItems: "center" }}
            mt={1}
            mb={3}
          >
            <Grid item>
              <Box>
                <Typography sx={{ fontSize: "12px", fontWeight: "900" }}>Purpose</Typography>
                <TextField
                  placeholder="Purpose"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Typography sx={{ fontSize: "12px", fontWeight: "900" }}>GPS Reading</Typography>
                <TextField
                  placeholder="Loc reading"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LocationCityOutlined />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    border: "1px solid #E51956",
                    color: "#E51956",
                    marginRight: "0.5rem",
                  }}
                >
                  Reset
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    color: "#ffffff",
                    background: `linear-gradient(90deg, #D61D54 0%, #6D4083 100%);`,
                    marginLeft: "0.5rem",
                  }}
                  onClick={() => navigate("/logs")}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default VehicleLogs;
