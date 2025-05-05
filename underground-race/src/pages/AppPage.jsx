import React from "react";
import { motion } from "framer-motion";

const AppPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-orbitron px-4 py-12 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-cyan-600 mb-10"
      >
        Nuestra App Móvil
      </motion.h2>

      <div className="flex flex-col items-center mb-10">
        <img
          src="/img/QR_code.png"
          alt="Código QR"
          className="w-56 h-56 border-4 border-cyan-600 bg-white p-2 rounded-lg shadow-xl"
        />
        <p className="mt-4 text-gray-400 text-lg">Escanea el código para acceder a la app</p>
      </div>

      <div className="border-2 border-dashed border-cyan-600 bg-neutral-800 rounded-lg p-6 max-w-xl mx-auto">
        <h3 className="text-cyan-600 text-2xl font-semibold mb-4">¡Próximamente!</h3>
        <p className="text-gray-300 mb-2">
          Actualmente el código QR que aparece en pantalla solo es de prueba.
        </p>
        <p className="text-gray-300 mb-2">
          Estamos trabajando en el desarrollo de nuestra aplicación móvil para ofrecerte una experiencia más completa.
        </p>
        <p className="text-gray-300 mb-4">¡Mantente atento a nuestras actualizaciones!</p>
        <div className="w-5 h-5 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
};

export default AppPage;
