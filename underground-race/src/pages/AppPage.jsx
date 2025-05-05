import React from "react";
import "../pages/AppPage.css";

function AppPage() {
  return (
    <div className="app-page-container">
      <h2 className="app-page-title">Nuestra App Móvil</h2>

      <div className="qr-section">
        <img src="/img/QR_code.png" alt="Código QR" className="qr-image" />
        <p className="qr-caption">Escanea el código para acceder a la app</p>
      </div>

      <div className="en-progreso-app">
        <h3>¡Próximamente!</h3>
        <p>Actualmente el codigo QR que aparece en pantalla solo es de prueba.</p>
        <p>Estamos trabajando en el desarrollo de nuestra aplicación móvil para ofrecerte una experiencia más completa.</p>
        <p>¡Mantente atento a nuestras actualizaciones!</p>
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default AppPage;
