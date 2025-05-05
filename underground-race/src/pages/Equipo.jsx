import React, { useState } from "react";
import "../pages/Equipo.css"; 

const integrantes = [
  {
    nombre: "Sergio Gómez",
    rol: "Documentary Director",
    imagen: "/img/Sergio.jpeg",
    cocheFavorito: "Audi TT 8N",
    imagenCoche: "/img/auditt.jpg",
    descripcion: "Elegancia compacta y alma de competidor. Sergio apuesta por el equilibrio entre diseño europeo y agilidad urbana.",
  },
  {
    nombre: "Francisco Cumbrados",
    rol: "Documentary Director ",
    imagen: "/img/Francisco.jpeg",
    cocheFavorito: "Alpine A110 R Azul",
    imagenCoche: "/img/alpine.jpg",
    descripcion: "Francisco valora lo exclusivo: ligero, ágil y con espíritu de rally. Su Alpine es pura precisión francesa.",
  },
  {
    nombre: "Maximiliano Pedroza",
    rol: "Community Manager",
    imagen: "/img/Max.jpeg",
    cocheFavorito: "Audi R8 Rosa",
    imagenCoche: "/img/r8.jpg",
    descripcion: "Potencia brutal con personalidad única. Max no solo corre rápido, también rompe esquemas con estilo propio.",
  },
  {
    nombre: "Erik Haaz",
    rol: "Events Manager",
    imagen: "/img/Erik.jpeg",
    cocheFavorito: "Porsche 911 Turbo S 1980",
    imagenCoche: "/img/porsche.jpg",
    descripcion: "Fan del legado clásico. Erik conduce una leyenda que mezcla historia, elegancia y turbo alemán puro.",
  },
  {
    nombre: "Juan José Cobo",
    rol: "Web Designer",
    imagen: "/img/Juanjo.jpeg",
    cocheFavorito: "BMW Serie 3 E36",
    imagenCoche: "/img/e36.jpg",
    descripcion: "Old school con alma drift. Juanjo domina la calle con la agresividad y balance de un verdadero E36.",
  },
  {
    nombre: "Diego Barraza",
    rol: "Web Designer",
    imagen: "/img/Diego.jpeg",
    cocheFavorito: "Nissan Skyline R34 Azul",
    imagenCoche: "/img/gtr.jpg",
    descripcion: "Ícono del JDM y rey de los túneles. Diego apuesta por potencia, aerodinámica y herencia japonesa.",
  },
  {
    nombre: "Bárbara González",
    rol: "Mobile Developer",
    imagen: "/img/Barbara.jpeg",
    cocheFavorito: "Chevrolet Camaro ZL1",
    imagenCoche: "/img/camaro.jpg",
    descripcion: "Muscle car con presencia imponente. Barbara lleva la fuerza americana al asfalto con clase y poder.",
  },
  {
    nombre: "Adrián Ortiz",
    rol: "Mobile Developer",
    imagen: "/img/Adrian.jpeg",
    cocheFavorito: "Dodge Charger Daytona Scat Pack Azul",
    imagenCoche: "/img/daytona.jpg",
    descripcion: "La furia del V8 en su máxima expresión. Adrian ruge con historia, torque y un perfil que impone respeto.",
  },
];

const Equipo = () => {
  const [activo, setActivo] = useState(null);

  return (
    <div className="equipo-container">
  <div className="equipo-header">
    <h1>Conoce al Equipo</h1>
    <p>Apasionados por la velocidad, el diseño y la cultura automotriz.</p>
  </div>

  <div className="foto-grupal">
    <img src="/img/FotoGrupo.JPG" alt="Foto grupal" />
  </div>

  <div className="integrantes-grid">
  {integrantes.map((persona, index) => (
    <div key={index} className="tarjeta-integrante">
      <img src={persona.imagen} alt={persona.nombre} />
      <h3>{persona.nombre}</h3>
      <p>{persona.rol}</p>

      <button
        className="boton-mas"
        onClick={() => setActivo(index === activo ? null : index)}
      >
        Más detalles 
      </button>

      {activo === index && (
        <div className="detalles">
          <img src={persona.imagenCoche} alt={persona.cocheFavorito} />
          <p><strong>Coche favorito:</strong> {persona.cocheFavorito}</p>
          <p>{persona.descripcion}</p>
        </div>
      )}
    </div>
  ))}
</div>

</div>

  );
};

export default Equipo;
