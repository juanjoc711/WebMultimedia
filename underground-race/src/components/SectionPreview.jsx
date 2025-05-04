import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const SectionPreview = ({ index, sections }) => {
  if (!sections || index < 0 || index >= sections.length) return null;

  const section = sections[index];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={section.title}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-xl px-6 py-4 text-center text-white z-20 shadow-lg max-w-[90%] w-[500px]"
      >
        <h2 className="text-2xl font-bold text-cyan-300">{section.title}</h2>
        <p className="text-sm mt-2">{section.description}</p>
        {section.link.startsWith("/") ? (
          <Link
            to={section.link}
            className="mt-4 inline-block text-white font-semibold hover:underline"
          >
            Ver más →
          </Link>
        ) : (
          <a
            href={section.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-white font-semibold hover:underline"
          >
            Ver más →
          </a>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default SectionPreview;
