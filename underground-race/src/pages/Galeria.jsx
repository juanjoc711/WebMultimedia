import React, { useState } from 'react';
import '../pages/Galeria.css';

const imagenes = [
  "/img/IMG1.JPG",
  "/img/IMG2.JPG",
  "/img/IMG3.JPG",
  "/img/IMG4.JPG",
  "/img/IMG5.JPG",
  "/img/IMG6.JPG",
  "/img/IMG7.JPG",
  "/img/IMG8.JPG",
  "/img/IMG9.JPG",
  "/img/IMG10.JPG",
  "/img/IMG11.JPG",
  "/img/IMG12.JPG",
  "/img/IMG13.JPG",
  "/img/IMG14.JPG",
  "/img/IMG15.JPG",
];

const videos = [
  {

    src: "/videos/videofondo1.MOV"
  },
  {
   
    src: "/videos/videofondo2.MOV"
  }
  ,
  {
  
    src: "/videos/videofondo3.MOV"
  },
  {
    
    src: "/videos/videofondo4.MOV"
  },
  {
    
    src: "/videos/videofondo5.MOV"
  },
  {
   
    src: "/videos/Videodesdearriba.MP4"
  }
];

function Galeria() {
  const [imagenActiva, setImagenActiva] = useState(null);

  const abrirImagen = (src) => setImagenActiva(src);
  const cerrarImagen = () => setImagenActiva(null);

  return (
    <div className="galeria">
      <h2>Galería de Fotos</h2>
      <div className="imagenes">
        {imagenes.map((src, index) => (
          <div key={index} className="marco">
            <img
              src={src}
              alt={`Imagen ${index + 1}`}
              onClick={() => abrirImagen(src)}
              className="miniatura"
            />
          </div>
        ))}
      </div>

      {imagenActiva && (
        <div className="overlay" onClick={cerrarImagen}>
          <img src={imagenActiva} alt="Pantalla completa" className="imagen-ampliada" />
        </div>
      )}

      <h2>Galería de Videos</h2>
      <div className="videos">
        {videos.map((video, index) => (
          <div key={index} className="video-marco">
            <video controls>
              <source src={video.src} type="video/mp4" />
              Tu navegador no soporta este video.
            </video>
            <p>{video.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;
