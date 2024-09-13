import {
  INDEX,
  DASHBOARD,
  REGISTER_USER,
  MAPS,
  CALENDAR,
} from "./PathConstants";
import Dashboard from "../pages/dashboard/Dashboard";
import Register from "../pages/registration/Register";
import Map from "../pages/map/Map";
import Calendar from "../pages/calendar/Calendar";

export const privateRoutes = [
  {
    path: INDEX,
    element: <Dashboard />,
  },
  {
    path: DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: MAPS,
    element: <Map />,
  },
  {
    path: CALENDAR,
    element: <Calendar />,
  },
];

export const publicRoutes = [
  {
    path: REGISTER_USER,
    element: <Register />,
  },
];
