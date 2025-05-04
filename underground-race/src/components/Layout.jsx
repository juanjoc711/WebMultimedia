import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative bg-black min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full overflow-x-hidden relative">
                <Outlet />
      </main>
    </div>
  );
};

export default Layout;
