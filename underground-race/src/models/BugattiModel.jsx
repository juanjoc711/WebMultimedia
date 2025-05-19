import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useState } from "react"; // ya usas useMemo y useRef


const BugattiModel = ({ angle }) => {
  const group = useRef();
  const modelGroup = useRef();
  const { scene } = useGLTF("/bugatti.glb");
   const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const isMobile = window.innerWidth < 768;
      setScale(isMobile ? 0.4 : 0.9); // ↓ tamaño más pequeño
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const processedScene = useMemo(() => {
    const clone = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    clone.position.sub(center);
    const scaleFactor = 3.2 / Math.max(size.x, size.y, size.z);
    clone.scale.setScalar(scaleFactor);
    return clone;
    }, [scene]);

  useFrame(() => {
    if (group.current) {
      const targetAngle = parseFloat(angle) * (Math.PI / 180);
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetAngle,
        0.08
      );
    }
  });

  return (
    <group ref={group}>
      <group ref={modelGroup} 
      position={[0, -0.3, 0]} 
      scale={[scale,scale,scale]}>
      setScale(isMobile ? 0.5 : 1);

        <primitive object={processedScene} />
      </group>
    </group>
  );
};

export default BugattiModel;
