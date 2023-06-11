// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import AssetCreation from "layouts/AssetCreation";
import Attendance from "layouts/Attendance";
import BackOperations from "layouts/BackOperations";
import Finance from "layouts/Finance";
import Reports from "layouts/Reports";
import TollOperations from "layouts/TollOperations";
import IncidentManagement from "layouts/IncidentManagement";
import RoutineManagement from "layouts/RoutineManagement";
import { ReactComponent as VehicleLogIcon } from "assets/images/icons/sidenavs/vehiclelog.svg";
import { ReactComponent as TollOperationsIcon } from "assets/images/icons/sidenavs/tolloperations.svg";
import VehicleLogs from "layouts/VehicleLogs";
import Logs from "layouts/Logs";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Dash from "layouts/dash";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dash />,
  },

  {
    type: "collapse",
    name: "Vehicle logs",
    key: "vehiclelogs",
    icon: <Icon fontSize="small">directions_car</Icon>,
    route: "/vehiclelogs",
    component: <VehicleLogs />,
  },
  {
    type: "collapse",
    name: "Toll Operations",
    key: "operations",
    icon: <Icon fontSize="small">edit_road</Icon>,
    route: "/operations",
    component: <TollOperations />,
  },
  {
    type: "collapse",
    name: "Incident Management",
    key: "incident",
    icon: <Icon fontSize="small">settings</Icon>,
    route: "/incident",
    component: <IncidentManagement />,
  },
  {
    type: "collapse",
    name: "Routine Management",
    key: "routine",
    icon: <Icon fontSize="small">manage_accounts</Icon>,
    route: "/routine",
    component: <RoutineManagement />,
  },
  {
    type: "collapse",
    name: "Asset Creation",
    key: "asset",
    icon: <Icon fontSize="small">luggage</Icon>,
    route: "/asset",
    component: <AssetCreation />,
  },
  {
    type: "collapse",
    name: "Attendance",
    key: "attendance",
    icon: <Icon fontSize="small">how_to_reg</Icon>,
    route: "/attendance",
    component: <Attendance />,
  },
  {
    type: "collapse",
    name: "Back Operations",
    key: "backops",
    icon: <Icon fontSize="small">bar_chart</Icon>,
    route: "/backops",
    component: <BackOperations />,
  },
  {
    type: "collapse",
    name: "Finance",
    key: "finance",
    icon: <Icon fontSize="small">account_balance_wallet</Icon>,
    route: "/finance",
    component: <Finance />,
  },
  {
    type: "collapse",
    name: "Reports",
    key: "reports",
    icon: <Icon fontSize="small">summarize</Icon>,
    route: "/reports",
    component: <Reports />,
  },
  {
    type: "route",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "route",
    key: "signin",
    route: "/signin",
    component: <SignIn />,
  },
  {
    type: "route",
    key: "logs",
    route: "/logs",
    component: <Logs />,
  },
  {
    type: "route",
    key: "dash",
    route: "/dash",
    component: <Dashboard />,
  },
];

export default routes;
