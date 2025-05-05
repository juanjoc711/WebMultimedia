import React from "react";
import "../pages/Merch.css";

function Merch() {
  return (
    <div className="merch-container">
      <h2 className="merch-title">Merch Oficial</h2>

      <div className="merch-galeria">
        <div className="merch-item">
          <img src="/img/CamisaMerch.png" alt="Camiseta 1" />
          <p>Camiseta Edición Especial</p>
        </div>
        <div className="merch-item">
          <img src="/img/TazaMerch.png" alt="Taza 1" />
          <p>Taza Racing</p>
        </div>
      </div>

      <div className="en-progreso">
        <h3>¡Próximamente más productos!</h3>
        <p>Estamos trabajando para traerte lo mejor de nuestro estilo callejero.</p>
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default Merch;
