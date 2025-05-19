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
        className="absolute top-6 right-6 z-50 p-2 bg-black bg-opacity-50 rounded-full text-white hover:text-red-500 transition-colors duration-300"
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
            src="https://uakpiyfdezrdrgshnnde.supabase.co/storage/v1/object/sign/videos/Trailer_Underground_Race.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2RkZWQxMGI3LWY3OGItNDNkNS1hYzE4LTUxN2U0MWRjNmVkMyJ9.eyJ1cmwiOiJ2aWRlb3MvVHJhaWxlcl9VbmRlcmdyb3VuZF9SYWNlLm1wNCIsImlhdCI6MTc0NzY0ODY1NywiZXhwIjoxOTA1MzI4NjU3fQ.GH-BYdavgj5n2hHpYa4EzjUM-wU59aRH-s22fCcpyIA"
            controls
            autoPlay={true}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
