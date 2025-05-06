import React, { useState } from "react";
import { motion } from "framer-motion";

const imagenes = [
  "/img/IMG1.JPG", "/img/IMG2.JPG", "/img/IMG3.JPG", "/img/IMG4.JPG", "/img/IMG5.JPG",
  "/img/IMG6.JPG", "/img/IMG7.JPG", "/img/IMG8.JPG", "/img/IMG9.JPG", "/img/IMG10.JPG",
  "/img/IMG11.JPG", "/img/IMG12.JPG", "/img/IMG13.JPG", "/img/IMG14.JPG", "/img/IMG15.JPG",
];

const videos = [
  { src: "/videos/videofondo1.mp4" }, { src: "/videos/videofondo2.mp4" },
  { src: "/videos/videofondo3.mp4" }, { src: "/videos/videofondo4.mp4" },
  { src: "/videos/videofondo5.mp4" }, { src: "/img/videodesdearriba.mp4" },
];

const Galeria = () => {
  const [imagenActiva, setImagenActiva] = useState(null);
  const abrirImagen = (src) => setImagenActiva(src);
  const cerrarImagen = () => setImagenActiva(null);

  return (
    <div className="relative min-h-screen bg-black text-white font-orbitron px-4 py-12 z-10 overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10 z-0" style={{ backgroundImage: `url('/assets/img/texturaasfalto.jpg')` }}></div>

      {/* Galería de Fotos */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold text-cyan-600 mb-10"
      >
        Galería de Fotos
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 z-10 relative">
        {imagenes.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-2 rounded-xl border-2 border-cyan-600 bg-neutral-900 shadow-lg hover:shadow-cyan-600/30 transition"
          >
            <img
              src={src}
              alt={`img-${i}`}
              onClick={() => abrirImagen(src)}
              className="w-full h-40 object-cover rounded-md cursor-pointer"
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay Imagen */}
      {imagenActiva && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={cerrarImagen}
        >
          <img
            src={imagenActiva}
            alt="ampliada"
            className="max-w-[90%] max-h-[90%] rounded-xl border-4 border-cyan-600 shadow-2xl"
          />
        </div>
      )}

      {/* Galería de Videos */}
      <h2 className="text-center text-4xl font-bold text-cyan-600 mt-20 mb-10">
        Galería de Videos
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v, i) => (
          <div
            key={i}
            className="bg-neutral-900 border-2 border-cyan-600 p-4 rounded-lg shadow-lg"
          >
            <video controls className="w-full rounded-md">
              <source src={v.src} type="video/mp4" />
              Tu navegador no soporta este video.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
