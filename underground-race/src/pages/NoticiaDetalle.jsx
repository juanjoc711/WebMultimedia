import { useParams, Link } from "react-router-dom";
import { noticias } from "../data/noticias";
import { motion } from "framer-motion";

const NoticiaDetalle = () => {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === id);

  if (!noticia)
    return <div className="p-8 text-white">Noticia no encontrada.</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black text-white p-8 max-w-4xl mx-auto"
    >
      <Link
        to="/noticias"
        className="text-red-800 mb-6 inline-block hover:underline"
      >
        ← Volver
      </Link>

      <motion.img
        src={noticia.imagen}
        alt={noticia.titulo}
        className="w-full h-64 object-cover rounded mb-6"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <h1 className="text-3xl font-bold text-red-800 mb-2">
        {noticia.titulo}
      </h1>
      <p className="text-gray-400 mb-4">{noticia.fecha}</p>
      <p className="whitespace-pre-line leading-relaxed text-gray-100">
        {noticia.contenido}
      </p>
    </motion.div>
  );
};

export default NoticiaDetalle;
