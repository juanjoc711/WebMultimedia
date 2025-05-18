// src/pages/Merch.jsx

import React from "react";
import { motion } from "framer-motion";

const productos = [
  {
    nombre: "Camiseta Edición Especial",
    imagen: "/img/CamisaMerch.png",
  },
  {
    nombre: "Taza Racing",
    imagen: "/img/TazaMerch.png",
  },
];

const Merch = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 overflow-x-hidden w-full">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-red-800 my-10 text-center"
      >
        Merch Oficial
      </motion.h1>

      <div className="w-full max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-900 p-4 rounded-lg shadow-lg hover:shadow-red-800/30 hover:scale-[1.015] transition-transform duration-300 group"
            >
              <div className="overflow-hidden rounded">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-48 object-cover rounded group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h2 className="text-xl mt-4 font-semibold group-hover:text-red-800 transition-colors">
                {producto.nombre}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 w-full max-w-3xl text-center border-2 border-dashed border-red-800 p-6 rounded-lg bg-neutral-800">
        <h3 className="text-2xl font-semibold text-red-800 mb-4">
          ¡Próximamente más productos!
        </h3>
        <p className="text-gray-300">
          Estamos trabajando para traerte lo mejor de nuestro estilo callejero.
        </p>
        <div className="mt-4 flex justify-center">
          <div className="loader border-4 border-red-800 border-t-transparent rounded-full w-6 h-6 animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Merch;
