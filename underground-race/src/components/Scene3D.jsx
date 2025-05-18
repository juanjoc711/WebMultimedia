import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useEffect } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import Particles3D from "./Particles3D";
import BugattiModel from "../models/BugattiModel";

const CustomControls = () => {
  const controls = useRef();
  const { camera, gl } = useThree();

  const lastAngles = useRef({ azimuthal: 0, polar: 0 });
  const idleFrames = useRef(0);

  useFrame(() => {
    if (!controls.current) return;

    const azimuthal = controls.current.getAzimuthalAngle();
    const polar = controls.current.getPolarAngle();

    const delta =
      Math.abs(azimuthal - lastAngles.current.azimuthal) +
      Math.abs(polar - lastAngles.current.polar);

    if (delta < 0.0003) {
      idleFrames.current++;
    } else {
      idleFrames.current = 0;
    }

    // Aceleramos frenado si lleva quieto varios frames
    if (idleFrames.current > 6 && controls.current.dampingFactor < 0.005) {
      controls.current.dampingFactor = 0.005;
    } else if (idleFrames.current <= 1) {
      controls.current.dampingFactor = 0.001; // inercia suave
    }

    lastAngles.current = { azimuthal, polar };
  });

  return (
<OrbitControls
  enableZoom={false}
  enablePan={false}
  enableDamping={true}
  dampingFactor={0.35}
/>
  );
};

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

        <Particles3D />
        <BugattiModel angle={cameraAngle.replace("deg", "")} />

        <CustomControls />
      </Suspense>
    </Canvas>
  );
};

export default Scene3D;
