import { noticias } from "../data/noticias";
import { Link } from "react-router-dom";

const Noticias = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">Últimas Noticias</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {noticias.map((noticia) => (
          <div key={noticia.id} className="bg-neutral-900 p-4 rounded shadow-md">
            <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl mt-4 font-semibold">{noticia.titulo}</h2>
            <p className="text-sm text-gray-400">{noticia.fecha}</p>
            <p className="mt-2 text-sm">{noticia.resumen}</p>
            <Link to={`/noticias/${noticia.id}`} className="text-cyan-400 mt-3 inline-block font-semibold">
              Leer más →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noticias;
