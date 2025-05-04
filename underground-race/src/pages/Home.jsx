import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SectionPreview from "../components/SectionPreview";
import ModelViewer from "../components/ModelViewer";

const sections = [
  {
    title: "Inicio",
    angle: "0deg",
    description: "Bienvenido al universo del documental",
    link: "/",
  },
  {
    title: "Noticias",
    angle: "45deg",
    description: "Lo último sobre el documental y más",
    link: "/noticias",
  },
  {
    title: "Galería",
    angle: "90deg",
    description: "Fotos exclusivas de las KDDs",
    link: "/galeria",
  },
  {
    title: "Equipo",
    angle: "135deg",
    description: "Conoce a quienes lo hacemos posible",
    link: "/equipo",
  },
  {
    title: "App",
    angle: "180deg",
    description: "Descarga y prueba nuestra app",
    link: "/app",
  },
  {
    title: "Merch",
    angle: "225deg",
    description: "Camisetas, tazas y más",
    link: "/merch",
  },
  {
    title: "Trailer",
    angle: "270deg",
    description: "Mira el avance oficial del documental",
    link: "/trailer",
  },
  {
    title: "Redes",
    angle: "315deg",
    description: "Síguenos en nuestras redes sociales",
    link: "https://instagram.com", 
  },
];


const Home = () => {
  const [index, setIndex] = useState(0);

  const handleScroll = (e) => {
    const direction = e.deltaY > 0 ? 1 : -1;
    setIndex((prev) => {
      const next = prev + direction;
      if (next < 0 || next >= sections.length) return prev;
      return next;
    });
  };
  

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className="w-screen h-screen bg-black overflow-hidden relative">
      <Navbar />
      <ModelViewer cameraAngle={sections[index].angle} />
      <SectionPreview index={index} sections={sections} />
      </div>
  );
};

export default Home;
