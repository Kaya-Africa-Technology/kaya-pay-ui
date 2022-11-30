import { Outlet } from "react-router-dom";

// for dashboard layout
const Sidebar = () => {
  return (
    <>
      <h1>Sidebar layout</h1>
      <Outlet />;
    </>
  );
};

export default Sidebar;
