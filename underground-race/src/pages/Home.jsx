import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SectionPreview from "../components/SectionPreview";
import ModelViewer from "../components/ModelViewer";
import ScrollHint from "../components/ScrollHint";
import { motion } from "framer-motion";

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
  const [scrollDir, setScrollDir] = useState(0);

  const handleScroll = (e) => {
    const direction = e.deltaY > 0 ? 1 : -1;
    setScrollDir(direction);
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

  useEffect(() => {
    const timeout = setTimeout(() => setScrollDir(0), 800);
    return () => clearTimeout(timeout);
  }, [scrollDir]);

  return (
    <div className="w-screen h-screen bg-black overflow-hidden relative">
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-backgroundPulse bg-gradient-radial from-purple-900 via-black to-black opacity-40"></div>

      {/* Halo morado */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-600 opacity-20 blur-[120px] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Elementos */}
      <Navbar />
      <ScrollHint />

      {/* TÍTULO Y SUBTÍTULO */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-10 md:top-16 w-full z-30 text-center px-4"
        >
        <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400 drop-shadow-lg">
          Underground Race
        </h1>
        <p className="mt-4 text-white text-md md:text-lg max-w-2xl mx-auto opacity-80">
          Un viaje visual a través de las quedadas clandestinas en Cantabria.
          Descubre los dos lados de la historia: la calle... y la ley.
        </p>
      </motion.div>

      {/* Modelo y previews */}
      <ModelViewer cameraAngle={sections[index].angle} />
      <SectionPreview
        index={index}
        sections={sections}
        setIndex={setIndex}
        scrollDir={scrollDir}
      />
    </div>
  );
};

export default Home;
