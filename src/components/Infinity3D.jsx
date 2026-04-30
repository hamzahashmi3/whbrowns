import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

class InfinityCurve extends THREE.Curve {
  getPoint(t) {
    const a = t * Math.PI * 2;
    const scale = 2;

    const x = scale * Math.sin(a);
    const y = scale * Math.sin(a) * Math.cos(a);
    const z = 0;

    return new THREE.Vector3(x, y, z);
  }
}

function InfinityMesh() {
  const meshRef = useRef();

  const geometry = useMemo(() => {
    const path = new InfinityCurve();
    return new THREE.TubeGeometry(path, 200, 0.25, 32, true);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshPhysicalMaterial
        color="#4f46e5"
        emissive="#1e3a8a"
        metalness={0.3}
        roughness={0.1}
        transmission={1}
        thickness={0.5}
        clearcoat={1}
      />
    </mesh>
  );
}

export default function Infinity3D() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={2} />
        <pointLight position={[-5, -5, 5]} intensity={2} color="#aa00ff" />
        <InfinityMesh />
      </Canvas>
    </div>
  );
}