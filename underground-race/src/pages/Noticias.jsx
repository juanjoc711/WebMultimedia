import { noticias } from "../data/noticias";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const Noticias = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 overflow-x-hidden w-full">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-cyan-400 my-10 text-center"
      >
        Últimas Noticias
      </motion.h1>

      <div className="w-full max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia, i) => (
            <motion.div
              key={noticia.id}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-neutral-900 p-4 rounded-lg shadow-lg hover:shadow-cyan-600/30 hover:scale-[1.015] transition-transform duration-300 group"
            >
              <div className="overflow-hidden rounded">
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="w-full h-48 object-cover rounded group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h2 className="text-xl mt-4 font-semibold group-hover:text-cyan-400 transition-colors">
                {noticia.titulo}
              </h2>
              <p className="text-sm text-gray-400">{noticia.fecha}</p>
              <p className="mt-2 text-sm text-gray-200">{noticia.resumen}</p>
              <Link
                to={`/noticias/${noticia.id}`}
                className="text-cyan-400 mt-3 inline-block font-semibold hover:underline"
              >
                Leer más →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Noticias;
