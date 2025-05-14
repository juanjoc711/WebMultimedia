import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpeg";
import {
  FaHome,
  FaNewspaper,
  FaImages,
  FaUsers,
  FaMobileAlt,
  FaTshirt,
  FaVideo,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 z-50 p-5">
      <div className="flex items-center gap-3">
        {/* Logo Botón */}
        <button
          onClick={() => setOpen(!open)}
          className="group relative p-1 rounded-full bg-black/50 backdrop-blur-md transition hover:scale-105 focus:outline-none shadow-2xl"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-30 blur-lg group-hover:opacity-70 transition-all duration-300"></div>

          {/* Imagen */}
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 object-cover rounded-full relative z-10 border-2 border-cyan-500 shadow-xl"
          />
        </button>
      </div>

      {open && (
        <div className="mt-4 p-4 bg-black/80 rounded-xl backdrop-blur-md shadow-2xl flex flex-col gap-3 w-56 border border-white/10 animate-fade-in-down">
          <NavItem to="/" icon={<FaHome />} label="Inicio" setOpen={setOpen} />
          <NavItem to="/noticias" icon={<FaNewspaper />} label="Noticias" setOpen={setOpen} />
          <NavItem to="/galeria" icon={<FaImages />} label="Galería" setOpen={setOpen} />
          <NavItem to="/equipo" icon={<FaUsers />} label="Equipo" setOpen={setOpen} />
          <NavItem to="/app" icon={<FaMobileAlt />} label="App" setOpen={setOpen} />
          <NavItem to="/merch" icon={<FaTshirt />} label="Merch" setOpen={setOpen} />
          <NavItem to="/trailer" icon={<FaVideo />} label="Trailer" setOpen={setOpen} />
        </div>
      )}
    </div>
  );
};

const NavItem = ({ to, icon, label, setOpen }) => (
  <Link
    to={to}
    onClick={() => setOpen(false)}
    className="flex items-center gap-3 text-white hover:text-cyan-400 font-semibold transition-all duration-200"
  >
    <span className="text-lg">{icon}</span>
    <span>{label}</span>
  </Link>
);

export default Navbar;
