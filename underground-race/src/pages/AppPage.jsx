import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaCameraRetro, FaHashtag } from "react-icons/fa";

const AppPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-orbitron px-4 py-12 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-red-800 mb-12 drop-shadow-md"
      >
        Bienvenido al futuro de Underground Race
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-col items-center mb-16"
      >
        <img
          src="/img/qr-code (1).png"
          alt="Código QR App"
          className="w-56 h-56 border-4 border-red-800 bg-white p-2 rounded-2xl shadow-xl hover:scale-105 transition-transform"
        />
        <p className="mt-5 text-gray-300 text-lg">
          Escanea el código para acceder a la demo de la app
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="bg-neutral-900 border border-red-800/20 rounded-2xl p-8 max-w-3xl mx-auto shadow-lg"
      >
        <h3 className="text-3xl font-bold text-red-800 mb-6">
          ¿Qué puedes hacer ya en la demo?
        </h3>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-black/30 rounded-xl p-4 border border-red-800/20 hover:bg-black/50 transition">
            <FaMapMarkedAlt className="text-3xl text-red-800 mb-3" />
            <h4 className="text-lg font-semibold text-white">🌍 Acceso al Mapa</h4>
            <p className="text-gray-400 text-sm mt-1">
              Explora ubicaciones clave del universo Underground directamente desde tu móvil.
            </p>
          </div>

          <div className="bg-black/30 rounded-xl p-4 border border-red-800/20 hover:bg-black/50 transition">
            <FaCameraRetro className="text-3xl text-red-800 mb-3" />
            <h4 className="text-lg font-semibold text-white">📸 Subida de Imágenes</h4>
            <p className="text-gray-400 text-sm mt-1">
              Comparte tus mejores momentos de las quedadas con la comunidad.
            </p>
          </div>

          <div className="bg-black/30 rounded-xl p-4 border border-red-800/20 hover:bg-black/50 transition">
            <FaHashtag className="text-3xl text-red-800 mb-3" />
            <h4 className="text-lg font-semibold text-white">🔗 Redes Sociales</h4>
            <p className="text-gray-400 text-sm mt-1">
              Conecta fácilmente con nuestras cuentas oficiales y no te pierdas nada.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-gray-400">
            Esto es solo el comienzo. Muy pronto añadiremos nuevas funciones para que vivas la experiencia como si estuvieras ahí. 💥
          </p>
          <div className="w-6 h-6 border-4 border-red-800 border-t-transparent rounded-full animate-spin mx-auto mt-4"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppPage;
