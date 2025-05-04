import { useEffect, useRef } from "react";

const ModelViewer = ({ cameraAngle }) => {
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.setAttribute("camera-orbit", cameraAngle);
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
      exposure="2"
      shadow-intensity="1"
      environment-image="https://modelviewer.dev/shared-assets/environments/neutral.hdr"
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "transparent",
        objectFit: "contain",
        borderRadius: "12px",
        transition: "all 0.5s ease",
      }}
    />
  );
};

export default ModelViewer;
