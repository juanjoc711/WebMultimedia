import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles3D = () => {
  const ref = useRef();
  const count = 300;

  const positions = new Float32Array(count * 3).map(
    () => (Math.random() - 0.5) * 10
  );
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1; // movimiento más natural y fluido
    }
  });

  return (
    <group ref={ref}>
      <points geometry={geometry}>
        <pointsMaterial
          color="#00ffff"
          size={0.06}
          sizeAttenuation
          transparent
          opacity={0.5}
        />
      </points>
    </group>
  );
};

export default Particles3D;
