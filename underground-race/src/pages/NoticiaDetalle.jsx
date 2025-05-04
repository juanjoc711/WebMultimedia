import { useParams, Link } from "react-router-dom";
import { noticias } from "../data/noticias";

const NoticiaDetalle = () => {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === id);

  if (!noticia) return <div className="p-8 text-white">Noticia no encontrada.</div>;

  return (
    <div className="min-h-screen bg-black text-white p-8 max-w-4xl mx-auto">
      <Link to="/noticias" className="text-cyan-400 mb-6 inline-block">← Volver</Link>
      <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-64 object-cover rounded mb-6" />
      <h1 className="text-3xl font-bold text-cyan-400 mb-2">{noticia.titulo}</h1>
      <p className="text-gray-400 mb-4">{noticia.fecha}</p>
      <p className="whitespace-pre-line leading-relaxed">{noticia.contenido}</p>
    </div>
  );
};

export default NoticiaDetalle;
