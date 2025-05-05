import { FaArrowsAltH } from "react-icons/fa";
import { motion } from "framer-motion";

const ScrollHint = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 2,
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    className="absolute bottom-28 w-full z-50 flex justify-center pointer-events-none px-4"
  >
    <div className="flex items-center gap-2 text-sm text-white bg-black/40 backdrop-blur-sm px-4 py-1 rounded-full shadow-md">
      <FaArrowsAltH className="text-cyan-400 animate-pulse" />
      <span>Mueve el coche</span>
    </div>
  </motion.div>
);

export default ScrollHint;
