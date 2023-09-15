import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

function MainLayout() {
  return (
    <div className="bg-red-400 w-[1265px] mx-auto flex">
      <SideBar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
