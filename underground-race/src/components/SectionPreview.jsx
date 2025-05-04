import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaNewspaper,
  FaImages,
  FaUsers,
  FaMobileAlt,
  FaTshirt,
  FaVideo,
  FaHome,
  FaHashtag,
} from "react-icons/fa";

const iconMap = {
  Inicio: <FaHome className="text-cyan-400 text-2xl" />,
  Noticias: <FaNewspaper className="text-cyan-400 text-2xl" />,
  Galería: <FaImages className="text-cyan-400 text-2xl" />,
  Equipo: <FaUsers className="text-cyan-400 text-2xl" />,
  App: <FaMobileAlt className="text-cyan-400 text-2xl" />,
  Merch: <FaTshirt className="text-cyan-400 text-2xl" />,
  Trailer: <FaVideo className="text-cyan-400 text-2xl" />,
  Redes: <FaHashtag className="text-cyan-400 text-2xl" />,
};

const SectionPreview = ({ index, sections }) => {
  if (!sections || index < 0 || index >= sections.length) return null;

  const section = sections[index];

  return (
    <AnimatePresence mode="wait">
<motion.div
  key={section.title}
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 80 }}
  transition={{ duration: 0.6 }}
  className="flex justify-center absolute bottom-10 w-full z-50 px-4"
>
  <div className="relative bg-black/70 backdrop-blur-md rounded-2xl px-6 py-5 shadow-xl border border-white/10 text-white text-center max-w-[480px] w-full">
    <div className="flex items-center justify-center mb-2">
      {iconMap[section.title]}
    </div>
    <h2 className="text-xl font-bold text-cyan-300">{section.title}</h2>
    <p className="text-sm mt-1">{section.description}</p>
    {section.link.startsWith("/") ? (
      <Link
        to={section.link}
        className="mt-4 inline-block text-white font-semibold hover:underline transition-all"
      >
        Ver más →
      </Link>
    ) : (
      <a
        href={section.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-white font-semibold hover:underline transition-all"
      >
        Ver más →
      </a>
    )}
  </div>
</motion.div>


    </AnimatePresence>
  );
};

export default SectionPreview;
