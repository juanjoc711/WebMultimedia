// src/pages/Trailer.jsx

import React from "react";
import { motion } from "framer-motion";

const Trailer = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 overflow-x-hidden w-full">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-cyan-400 my-10 text-center"
      >
        Trailer Oficial
      </motion.h1>

      <div className="w-full max-w-4xl">
        <div className="aspect-w-16 aspect-h-9">
          <video
            className="w-full h-full rounded-lg shadow-lg"
            src="videos/videotrailer.mp4"
            controls
            muted
            autoPlay={true}
            frameBorder="0"
            allowFullScreen
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
