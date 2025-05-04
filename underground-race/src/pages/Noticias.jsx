import { noticias } from "../data/noticias";
import { Link } from "react-router-dom";

const Noticias = () => {
  return (
<div className="min-h-screen bg-black text-white flex flex-col items-center px-4 overflow-x-hidden w-full">
  <h1 className="text-4xl font-bold text-cyan-400 my-10 text-center">
    Últimas Noticias
  </h1>

  <div className="w-full max-w-7xl px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {noticias.map((noticia) => (
        <div
          key={noticia.id}
          className="bg-neutral-900 p-4 rounded shadow-md"
        >
          <img
            src={noticia.imagen}
            alt={noticia.titulo}
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="text-xl mt-4 font-semibold">{noticia.titulo}</h2>
          <p className="text-sm text-gray-400">{noticia.fecha}</p>
          <p className="mt-2 text-sm">{noticia.resumen}</p>
          <Link
            to={`/noticias/${noticia.id}`}
            className="text-cyan-400 mt-3 inline-block font-semibold"
          >
            Leer más →
          </Link>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Noticias;
