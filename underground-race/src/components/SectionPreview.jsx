import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Noticias",
    description: "Lo último sobre el documental y más",
    link: "/noticias",
  },
  {
    title: "Galería",
    description: "Fotos exclusivas de las KDDs",
    link: "/galeria",
  },
  {
    title: "Equipo",
    description: "Conoce a quienes lo hacemos posible",
    link: "/equipo",
  },
  {
    title: "App Móvil",
    description: "Descarga y prueba nuestra app",
    link: "/app",
  },
  {
    title: "Merch",
    description: "Camisetas, tazas y más",
    link: "/merch",
  },
  {
    title: "Trailer",
    description: "Mira el avance oficial del documental",
    link: "/trailer",
  },
];

const SectionPreview = ({ index, sections }) => {
  if (!sections || index < 0 || index >= sections.length) return null;

  const section = sections[index];

  return (
    <div className="absolute bottom-6 left-6 text-white z-10">
      <h2 className="text-cyan-400 text-xl font-bold">{section.title}</h2>
      <p className="text-sm">Lo último sobre el documental y más</p>
      <a href={`/${section.title.toLowerCase()}`} className="text-white font-semibold mt-2 inline-block">
        Ver más
      </a>
    </div>
  );
};


export default SectionPreview;
