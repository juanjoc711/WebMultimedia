// src/pages/Trailer.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa"; // ícono de X

const Trailer = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/"); // puedes cambiar esta ruta según a dónde quieras volver
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 overflow-x-hidden w-full relative">
      {/* Botón X */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 text-white hover:text-red-500 text-2xl z-50"
        aria-label="Cerrar trailer"
      >
        <FaTimes />
      </button>

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-red-800 my-10 text-center"
      >
        Trailer Oficial
      </motion.h1>

      <div className="w-full max-w-4xl">
        <div className="aspect-w-16 aspect-h-9">
          <video
            className="w-full h-full rounded-lg shadow-lg"
            src="videos/videotrailer.mp4"
            controls
            muted
            autoPlay={true}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
