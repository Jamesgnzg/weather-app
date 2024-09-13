import { Link } from "react-router-dom";
import { sideBarMenuItems } from "./SideBarItems";

const SideBar = (): React.ReactElement => {
  return (
    <>
      <div className="container min-h-full border-r-[0.8px] border-[#dbdbdb]">
        <div className="p-5 pt-10">
          <h2 className="text-3xl font-black">Weatheria</h2>
        </div>
        <div className="flex flex-col items-start gap-2 w-full p-3">
          {sideBarMenuItems.map((menuItem, index) => {
            return (
              <div
                key={index}
                className="container min-h-9 p-4 rounded-xl hover:bg-main-50"
              >
                <Link className="flex items-center gap-3" to={menuItem.path}>
                  <div className="text-3xl">{menuItem.icon}</div>
                  <p className="text-base font-medium">{menuItem.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
