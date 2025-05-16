import { motion } from "framer-motion";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const socials = [
  {
    name: "TikTok",
    icon: <FaTiktok className="text-xl text-white" />,
    url: "https://www.tiktok.com/@_underground_race?is_from_webapp=1&sender_device=pc",
    color: "bg-black",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="text-xl text-white" />,
    url: "https://www.instagram.com/undergroundrace_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    color: "bg-gradient-to-br from-pink-500 via-red-800 to-yellow-500",
  },
];

const SocialsDropdown = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="absolute bottom-24 w-full flex justify-center z-50"
    >
      <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl w-[90%] max-w-md text-center">
        <h3 className="text-red-800 font-bold text-lg mb-4">Síguenos 🔥</h3>
        <div className="space-y-4">
          {socials.map((s, idx) => (
            <motion.a
              key={idx}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-3 rounded-lg transition-transform hover:scale-105 ${s.color}`}
              whileHover={{ scale: 1.05 }}
            >
              <div>{s.icon}</div>
              <span className="text-white font-semibold">{s.name}</span>
            </motion.a>
          ))}
        </div>
        <button
  onClick={onClose}
  className="mt-6 text-white font-semibold hover:underline transition-all opacity-90 hover:opacity-100 focus:outline-none bg-transparent border-none"
>
  Ocultar
</button>

      </div>
    </motion.div>
  );
};

export default SocialsDropdown;
