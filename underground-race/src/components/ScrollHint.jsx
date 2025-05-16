import { useEffect, useState } from "react";
import { FaArrowsAltH } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ScrollHint = ({ scrollDir }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (scrollDir !== 0) {
      setVisible(false);
    } else {
      const timeout = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timeout);
    }
  }, [scrollDir]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            duration: 0.4,
          }}
          className="absolute bottom-[200px] w-full z-[60] flex justify-center pointer-events-none px-4"
        >
          <div className="flex items-center gap-2 text-sm text-white bg-black/40 backdrop-blur-sm px-4 py-1 rounded-full shadow-md">
            <FaArrowsAltH className="text-red-800 animate-pulse" />
            <span>Mueve el coche o la rueda del ratón</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollHint;
