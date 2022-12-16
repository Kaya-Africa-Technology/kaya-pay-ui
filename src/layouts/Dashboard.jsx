import { Outlet } from "react-router-dom";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/solid";
import Sidebar from "./Sidebar";
import { useStateContext } from "../contexts/ContextProvider";

const Dashboard = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  console.log(activeMenu, "active menu state");
  return (
    <div className=" flex min-h-screen">
      <Sidebar activeMenu={activeMenu} />
      <div className="flex w-full flex-col">
        <div className="flex h-10 items-center justify-between bg-white px-5 py-6">
          <span className="flex h-6 w-6 cursor-pointer   justify-start">
            <Bars3Icon onClick={() => setActiveMenu(() => !activeMenu)} />
          </span>
          <div className=" flex  justify-end gap-3">
            <span>
              <BellIcon className="h-6 w-6" />
            </span>
            <span className="flex items-center gap-x-1 text-neutral-60">
              Hi, Daniel Ikokoh <ChevronDownIcon className="block h-4 w-4" />
            </span>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
