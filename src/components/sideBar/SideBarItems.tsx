import { CALENDAR, DASHBOARD, MAPS } from "../../routes/PathConstants";
import { MdDashboard } from "react-icons/md";
import { FaMap, FaRegCalendarAlt } from "react-icons/fa";

export const sideBarMenuItems = [
  {
    name: "Dashboard",
    path: DASHBOARD,
    icon: <MdDashboard />,
  },
  {
    name: "Maps",
    path: MAPS,
    icon: <FaMap />,
  },
  {
    name: "Calendar",
    path: CALENDAR,
    icon: <FaRegCalendarAlt />,
  },
];
