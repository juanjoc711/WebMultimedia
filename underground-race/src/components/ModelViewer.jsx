import { useEffect, useRef } from "react";

const ModelViewer = ({ cameraAngle }) => {
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      const viewer = modelRef.current;
  
      // Reiniciar el movimiento del usuario
      viewer.removeAttribute("auto-rotate");
      viewer.setAttribute("disable-auto-rotate", "");
      viewer.setAttribute("camera-orbit", cameraAngle);
      viewer.setAttribute("interaction-prompt", "none");
      viewer.cameraOrbit = cameraAngle;
      viewer.cameraTarget = '0m 0m 0m';
      // Forzar regreso suave al ángulo asignado
      requestAnimationFrame(() => {
        viewer.cameraOrbit = cameraAngle;
        viewer.jumpCameraToGoal(); // posicional instantáneo
      });
    }
  }, [cameraAngle]);
  
  return (
<model-viewer
  ref={modelRef}
  src="/bugatti.glb"
  alt="Bugatti Chiron"
  camera-controls
  disable-zoom
  disable-auto-rotate
  auto-rotate="false"
  interaction-prompt="none"
  style={{
    width: "100%",
    height: "100vh",
    backgroundColor: "transparent",
    objectFit: "contain",
    borderRadius: "12px",
    transition: "camera-orbit 1s ease-in-out",
  }}
  environment-image="https://modelviewer.dev/shared-assets/environments/neutral.hdr"
  exposure="2"
  shadow-intensity="1"
/>

  );
};

export default ModelViewer;
