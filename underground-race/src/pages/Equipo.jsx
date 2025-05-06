import React, { useState } from "react";
import { motion } from "framer-motion";

const integrantes = [
  {
    nombre: "Sergio Gómez",
    rol: "Documentary Director",
    imagen: "/img/Sergio.jpeg",
    cocheFavorito: "Audi TT 8N",
    imagenCoche: "/img/auditt.jpg",
    descripcion: "Elegancia compacta y alma de competidor...",
  },
  {
    nombre: "Francisco Cumbrados",
    rol: "Documentary Director",
    imagen: "/img/Francisco.jpeg",
    cocheFavorito: "Alpine A110 R Azul",
    imagenCoche: "/img/alpine.jpg",
    descripcion: "Francisco valora lo exclusivo...",
  },
  {
    nombre: "Maximiliano Pedroza",
    rol: "Community Manager",
    imagen: "/img/Max.jpeg",
    cocheFavorito: "Audi R8 Rosa",
    imagenCoche: "/img/r8.jpg",
    descripcion: "Potencia brutal con personalidad única...",
  },
  {
    nombre: "Erik Haaz",
    rol: "Events Manager",
    imagen: "/img/Erik.jpeg",
    cocheFavorito: "Porsche 911 Turbo S 1980",
    imagenCoche: "/img/porsche.jpg",
    descripcion: "Fan del legado clásico...",
  },
  {
    nombre: "Juan José Cobo",
    rol: "Web Designer",
    imagen: "/img/Juanjo.jpeg",
    cocheFavorito: "BMW Serie 3 E36",
    imagenCoche: "/img/e36.jpg",
    descripcion: "Old school con alma drift...",
  },
  {
    nombre: "Diego Barraza",
    rol: "Web Designer",
    imagen: "/img/Diego.jpeg",
    cocheFavorito: "Nissan Skyline R34 Azul",
    imagenCoche: "/img/gtr.jpg",
    descripcion: "Ícono del JDM y rey de los túneles...",
  },
  {
    nombre: "Bárbara González",
    rol: "Mobile Developer",
    imagen: "/img/Barbara.jpeg",
    cocheFavorito: "Chevrolet Camaro ZL1",
    imagenCoche: "/img/camaro.jpg",
    descripcion: "Muscle car con presencia imponente...",
  },
  {
    nombre: "Adrián Ortiz",
    rol: "Mobile Developer",
    imagen: "/img/Adrian.jpeg",
    cocheFavorito: "Dodge Charger Daytona Scat Pack Azul",
    imagenCoche: "/img/daytona.jpg",
    descripcion: "La furia del V8 en su máxima expresión...",
  },
];

const Equipo = () => {
  const [activo, setActivo] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white font-orbitron px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-cyan-400 mb-2">Conoce al Equipo</h1>
        <p className="text-gray-400">Apasionados por la velocidad, el diseño y la cultura automotriz.</p>
      </motion.div>

      <div className="flex justify-center mb-12">
        <img src="/img/FotoGrupo.JPG" alt="Foto grupal" className="rounded-xl w-2/3 shadow-lg" />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {integrantes.map((persona, index) => (
          <div
            key={index}
            className="bg-neutral-900 p-4 rounded-xl border border-cyan-500 hover:shadow-cyan-500/40 transition-shadow relative"
          >
            <img src={persona.imagen} alt={persona.nombre} className="w-full rounded-md mb-3" />
            <h3 className="text-xl text-cyan-400 font-semibold">{persona.nombre}</h3>
            <p className="italic text-gray-400">{persona.rol}</p>
            <button
              onClick={() => setActivo(index === activo ? null : index)}
              className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-black/30 border border-cyan-500 rounded-lg hover:bg-cyan-600 hover:text-black transition-all duration-300 shadow-md backdrop-blur-sm"
            >
              {activo === index ? "Ocultar detalles" : "Más detalles"}
            </button>


            {activo === index && (
              <div className="mt-4 text-sm text-gray-300">
                <img src={persona.imagenCoche} alt={persona.cocheFavorito} className="rounded-lg mb-2" />
                <p><strong className="text-cyan-300">Coche favorito:</strong> {persona.cocheFavorito}</p>
                <p>{persona.descripcion}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipo;
