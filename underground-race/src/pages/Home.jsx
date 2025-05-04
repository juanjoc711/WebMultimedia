import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SectionPreview from "../components/SectionPreview";
import ModelViewer from "../components/ModelViewer";

const sections = [
  { title: "Inicio", angle: "0deg" },
  { title: "Noticias", angle: "45deg" },
  { title: "Galería", angle: "90deg" },
  { title: "Equipo", angle: "135deg" },
  { title: "App", angle: "180deg" },
  { title: "Merch", angle: "225deg" },
  { title: "Trailer", angle: "270deg" },
  { title: "Redes", angle: "315deg" },
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
