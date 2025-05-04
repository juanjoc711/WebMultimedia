import { FaArrowsAltH } from "react-icons/fa";
import { motion } from "framer-motion";

const ScrollHint = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
    className="absolute bottom-28 left-1/2 transform -translate-x-1/2 z-20 text-white text-sm text-center opacity-80 pointer-events-none"
  >
    <div className="flex items-center gap-2">
      <FaArrowsAltH className="text-cyan-400 animate-pulse" />
      <span>Mueve el coche</span>
    </div>
  </motion.div>
);

export default ScrollHint;
