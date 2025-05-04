import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas principales
import Home from "./pages/Home";
import Noticias from "./pages/Noticias";
import Galeria from "./pages/Galeria";
import Equipo from "./pages/Equipo";
import AppPage from "./pages/AppPage";
import Merch from "./pages/Merch";
import Trailer from "./pages/Trailer";
import NoticiaDetalle from "./pages/NoticiaDetalle";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/:id" element={<NoticiaDetalle />} />

        <Route path="/galeria" element={<Galeria />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/trailer" element={<Trailer />} />
      </Routes>
    </BrowserRouter>
  );
}
