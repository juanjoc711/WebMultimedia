import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticlesContent = () => {
  const ref = useRef();
  const count = 300;

  const positions = new Float32Array(count * 3).map(() => (Math.random() - 0.5) * 10);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  let rotationTarget = 0;

  useFrame((_, delta) => {
    rotationTarget += delta * 0.1;
    if (ref.current) {
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, rotationTarget, 0.1);
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color="#00ffff"
        size={0.2}
        sizeAttenuation
        transparent
        opacity={0.5}
      />
    </points>
  );
};

export default ParticlesContent;
