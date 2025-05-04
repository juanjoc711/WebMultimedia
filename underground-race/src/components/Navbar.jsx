import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 z-50 p-4">
      <div className="flex items-center gap-2">
      <button
        onClick={() => setOpen(!open)}
        className="group relative p-1 rounded-full bg-black/50 backdrop-blur-md transition hover:scale-105 focus:outline-none"
      >
        <div className="absolute inset-0 rounded-full bg-red-500 opacity-30 blur-lg group-hover:opacity-60 transition-all duration-300"></div>
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-12 object-cover rounded-full relative z-10 border-2 border-black shadow-xl"
        />
      </button>

      </div>

      {open && (
        <div className="mt-4 p-4 bg-black/80 rounded-lg backdrop-blur-md shadow-xl flex flex-col gap-3 w-48 animate-fade-in-down">
          <NavItem to="/" label="🏁 Inicio" />
          <NavItem to="/noticias" label="📰 Noticias" />
          <NavItem to="/galeria" label="📸 Galería" />
          <NavItem to="/equipo" label="👥 Equipo" />
          <NavItem to="/app" label="📱 App" />
          <NavItem to="/merch" label="🧢 Merch" />
          <NavItem to="/trailer" label="🎬 Trailer" />
        </div>
      )}
    </div>
  );
};

const NavItem = ({ to, label }) => (
  <Link
    to={to}
    className="text-white hover:text-cyan-400 font-semibold transition-all duration-200"
  >
    {label}
  </Link>
);

export default Navbar;
