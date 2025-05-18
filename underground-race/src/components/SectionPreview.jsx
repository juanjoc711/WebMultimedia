import React, { useState } from "react";
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
import SocialsDropdown from "./SocialsDropdown"; // 👈 nuevo

const iconMap = {
  Inicio: <FaHome className="text-red-800 text-xl" />,
  Noticias: <FaNewspaper className="text-red-800 text-xl" />,
  Galería: <FaImages className="text-red-800 text-xl" />,
  Equipo: <FaUsers className="text-red-800 text-xl" />,
  App: <FaMobileAlt className="text-red-800 text-xl" />,
  Merch: <FaTshirt className="text-red-800 text-xl" />,
  Trailer: <FaVideo className="text-red-800 text-xl" />,
  Redes: <FaHashtag className="text-red-800 text-xl" />,
};

const MiniCard = ({ section, position = "left", onClick, scrollDir }) => {
  if (!section) return null;
  const isLeft = position === "left";

  return (
    <AnimatePresence mode="wait">
      <motion.button
        key={section.title}
        onClick={onClick}
        initial={{
          opacity: 0,
          x: isLeft ? -60 : 60,
          scale: 0.8,
        }}
        animate={{
          opacity: 0.5,
          x: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          x: isLeft ? -80 : 80,
          scale: 0.6,
        }}
        transition={{ duration: 0.5 }}
        className={`bg-black/40 backdrop-blur-sm rounded-xl px-4 py-3 text-white text-center w-32 absolute bottom-12 z-30 hover:opacity-100 hover:bg-black/70 transition-all ${
          isLeft
            ? "left-[calc(45%-300px)] -translate-x-full"
            : "right-[calc(45%-300px)] translate-x-full"
        }`}
        whileHover={{ scale: 1.05, opacity: 1 }}
      >
        <div className="flex justify-center mb-1">
          {iconMap[section.title]}
        </div>
        <p className="text-xs font-bold">{section.title}</p>
      </motion.button>
    </AnimatePresence>
  );
};


const SectionPreview = ({ index, sections, setIndex, scrollDir }) => {
  const [showSocials, setShowSocials] = useState(false);

  if (!sections || index < 0 || index >= sections.length) return null;

  const current = sections[index];
  const prev = index > 0 ? sections[index - 1] : null;
  const next = index < sections.length - 1 ? sections[index + 1] : null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={current.title}
        initial={{
          opacity: 0,
          y: 80,
          x: scrollDir === 1 ? 100 : scrollDir === -1 ? -100 : 0,
        }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        exit={{
          opacity: 0,
          y: 80,
          x: scrollDir === 1 ? -100 : scrollDir === -1 ? 100 : 0,
        }}
        transition={{ duration: 0.6 }}
        className="flex justify-center absolute bottom-10 w-full z-50 px-4"
      >
        <div className="relative bg-black/70 backdrop-blur-md rounded-2xl px-6 py-5 shadow-xl border border-white/10 text-white text-center max-w-[480px] w-full z-40">
          <div className="flex items-center justify-center mb-2">
            {iconMap[current.title]}
          </div>
          <h2 className="text-xl font-bold text-red-800">{current.title}</h2>
          <p className="text-sm mt-1">{current.description}</p>

          {current.title !== "Inicio" && (
          current.title === "Redes" ? (
            <button
              onClick={() => setShowSocials(!showSocials)}
              className="mt-4 inline-block font-semibold text-white hover:underline transition-all bg-transparent border-none p-0"
              style={{ all: "unset" }}
            >
              Ver más →
            </button>
          ) : current.link.startsWith("/") ? (
            <Link
              to={current.link}
              className="mt-4 inline-block text-white font-semibold hover:underline transition-all"
            >
              Ver más →
            </Link>
          ) : (
            <a
              href={current.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-white font-semibold hover:underline transition-all"
            >
              Ver más →
            </a>
          ))}
        </div>

        {current.title === "Redes" && showSocials && (
          <SocialsDropdown onClose={() => setShowSocials(false)} />
        )}

        <MiniCard
          section={prev}
          position="left"
          onClick={() => setIndex(index - 1)}
          scrollDir={scrollDir}
        />
        <MiniCard
          section={next}
          position="right"
          onClick={() => setIndex(index + 1)}
          scrollDir={scrollDir}
        />
      </motion.div>
    </AnimatePresence>
  );
};


export default SectionPreview;
