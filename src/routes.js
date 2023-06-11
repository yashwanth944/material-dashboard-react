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

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

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
];

export default routes;
