import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const WireframeMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={meshRef} scale={2}>
      {/* Detail 1 makes it a low poly abstract shape */}
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#CAFF00" wireframe wireframeLinewidth={1} />
    </mesh>
  );
};

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true }}>
      <WireframeMesh />
    </Canvas>
  );
}
