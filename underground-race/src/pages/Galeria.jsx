
import React, { useState } from 'react';
import '../pages/Galeria.css'; 
import img1 from '../assets/img/IMG1.JPG';
import img2 from '../assets/img/IMG2.JPG';
import img3 from '../assets/img/IMG3.JPG';
import img4 from '../assets/img/IMG4.JPG';
import img5 from '../assets/img/IMG5.JPG';
import img6 from '../assets/img/IMG6.JPG';
import img7 from '../assets/img/IMG7.JPG';
import img8 from '../assets/img/IMG8.JPG';
import img9 from '../assets/img/IMG9.JPG';
import img10 from '../assets/img/IMG10.JPG';
import img11 from '../assets/img/IMG11.JPG';
import img12 from '../assets/img/IMG12.JPG';
import img13 from '../assets/img/IMG13.JPG';
import img14 from '../assets/img/IMG14.JPG';
import img15 from '../assets/img/IMG15.JPG';


const imagenes = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

function Galeria() {
  const [imagenActiva, setImagenActiva] = useState(null);

  const abrirImagen = (src) => {
    setImagenActiva(src);
  };

  const cerrarImagen = () => {
    setImagenActiva(null);
  };

  return (
    <div className="galeria">
      <h2>Galería</h2>
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
    </div>
  );
}

export default Galeria;
