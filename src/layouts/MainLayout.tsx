import { Outlet } from "react-router-dom";
import SideBar from "../components/sideBar/SideBar";

const MainLayout = () => {
  return (
    <>
      <div className="scroll-smooth">
        <div className="md:mx-auto md:grid md:grid-cols-12 md:gap-4 min-h-full">
          <div className="col-span-2">
            <SideBar />
          </div>
          <div className="col-span-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
