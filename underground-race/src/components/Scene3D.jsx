import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import Particles3D from "./Particles3D";
import BugattiModel from "../models/BugattiModel";

const Scene3D = ({ cameraAngle = "0" }) => {
  return (
    <Canvas
    camera={{ position: [0, 1.5, 4.5], fov: 30 }}
    shadows
    className="absolute inset-0 z-10"
    >
      <Suspense fallback={null}>
        <Environment preset="warehouse" />
        <color attach="background" args={["#000000"]} />

        <directionalLight position={[5, 10, 5]} intensity={1.4} castShadow />
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 3, 0]} intensity={2.2} color="#b388ff" />

        {/* ✅ Partículas integradas aquí correctamente */}
        <Particles3D />

        {/* ✅ Bugatti visible y centrado */}
        <BugattiModel angle={cameraAngle.replace("deg", "")} />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Suspense>
    </Canvas>
  );
};

export default Scene3D;
