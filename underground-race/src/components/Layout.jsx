import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative bg-black min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full max-w-screen overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
