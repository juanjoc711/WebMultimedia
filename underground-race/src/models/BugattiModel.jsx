import { useRef, useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const BugattiModel = ({ angle }) => {
  const group = useRef();
  const modelGroup = useRef();
  const { scene } = useGLTF("/bugatti.glb");

  // Preparamos el modelo una sola vez
  const processedScene = useMemo(() => {
    const clone = scene.clone(true);

    const box = new THREE.Box3().setFromObject(clone);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    // Centrado y escalado
    clone.position.sub(center);
    const scaleFactor = 3.2 / Math.max(size.x, size.y, size.z);
    clone.scale.setScalar(scaleFactor);

    return clone;
  }, [scene]);

  useEffect(() => {
    if (group.current) {
      const angleRad = parseFloat(angle) * (Math.PI / 180);
      group.current.rotation.y = angleRad;
    }
  }, [angle]);

  return (
    <group ref={group}>
      <group ref={modelGroup} position={[0, -0.3, 0]}>
        <primitive object={processedScene} />
      </group>
    </group>
  );
};

export default BugattiModel;
