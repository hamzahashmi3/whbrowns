import { useMemo, useRef } from "react";
import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function HologramGlobe() {
  const group = useRef();
  const cloudLayer = useRef();
  const cityLayer = useRef();

  const dots = useMemo(() => {
    return Array.from({ length: 180 }, (_, i) => {
      const a = (i / 180) * Math.PI * 2;
      const r = 1.24 + (i % 10) * 0.032;
      const y = Math.sin(i * 1.42) * 0.86;
      return [Math.cos(a) * r, y, Math.sin(a) * r];
    });
  }, []);

  const continentBlobs = useMemo(() => {
    return [
      [-0.5, 0.5, 1.03, 0.42, 0.22, 0.08],
      [-0.17, 0.25, 1.1, 0.32, 0.15, -0.2],
      [0.3, 0.35, 1.07, 0.4, 0.2, 0.25],
      [0.58, 0.05, 1.08, 0.28, 0.15, -0.4],
      [-0.42, -0.16, 1.1, 0.35, 0.17, 0.3],
      [0.05, -0.48, 1.08, 0.32, 0.16, -0.1],
      [0.68, -0.37, 1.0, 0.22, 0.12, 0.5],
      [-0.72, 0.05, 0.92, 0.22, 0.12, -0.2],
      [0.78, 0.42, 0.9, 0.18, 0.1, 0.4],
    ];
  }, []);

  const latitudeLines = useMemo(() => Array.from({ length: 13 }, (_, i) => -0.82 + i * 0.137), []);

  const cityLights = useMemo(() => {
    return Array.from({ length: 70 }, (_, i) => {
      const a = (i / 70) * Math.PI * 2;
      const y = Math.sin(i * 2.1) * 0.74;
      const r = Math.sqrt(Math.max(0.05, 1.19 * 1.19 - y * y));
      return [Math.cos(a) * r, y, Math.sin(a) * r];
    });
  }, []);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.1;
    if (cloudLayer.current) cloudLayer.current.rotation.y -= delta * 0.18;
    if (cityLayer.current) cityLayer.current.rotation.y += delta * 0.16;
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.16, 128, 128]} />
        <meshStandardMaterial
          color="#0b3b9f"
          metalness={0.9}
          roughness={0.08}
          transparent
          opacity={0.92}
          emissive="#1d4ed8"
          emissiveIntensity={0.72}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[1.178, 96, 96]} />
        <meshStandardMaterial color="#38bdf8" wireframe transparent opacity={0.075} emissive="#38bdf8" emissiveIntensity={0.85} />
      </mesh>

      {continentBlobs.map(([x, y, z, sx, sy, rz], i) => (
        <mesh key={i} position={[x, y, z]} scale={[sx, sy, 0.018]} rotation={[0, 0, rz]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={i % 2 ? "#7dd3fc" : "#a78bfa"}
            emissive={i % 2 ? "#2563eb" : "#7c3aed"}
            emissiveIntensity={1.45}
            transparent
            opacity={0.74}
          />
        </mesh>
      ))}

      <group ref={cloudLayer}>
        {Array.from({ length: 16 }, (_, i) => (
          <mesh
            key={i}
            position={[Math.sin(i * 1.7) * 0.72, -0.72 + i * 0.095, 1.19]}
            scale={[0.23 + (i % 3) * 0.08, 0.045, 0.01]}
            rotation={[0, 0, i * 0.45]}
          >
            <sphereGeometry args={[1, 20, 20]} />
            <meshStandardMaterial color="#e0f2fe" emissive="#38bdf8" emissiveIntensity={0.9} transparent opacity={0.32} />
          </mesh>
        ))}
      </group>

      <group ref={cityLayer}>
        {cityLights.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[i % 9 === 0 ? 0.015 : 0.009, 10, 10]} />
            <meshStandardMaterial color="#e0f2fe" emissive="#38bdf8" emissiveIntensity={2.2} />
          </mesh>
        ))}
      </group>

      {latitudeLines.map((y, i) => {
        const radius = Math.sqrt(Math.max(0.05, 1.17 * 1.17 - y * y));
        return (
          <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[radius, 0.0035, 8, 180]} />
            <meshStandardMaterial
              color={i % 2 ? "#60a5fa" : "#a78bfa"}
              emissive={i % 2 ? "#2563eb" : "#8b5cf6"}
              emissiveIntensity={1.3}
              transparent
              opacity={0.5}
            />
          </mesh>
        );
      })}

      {[0, Math.PI / 3, Math.PI / 1.5].map((rot, i) => (
        <mesh key={i} rotation={[0, rot, Math.PI / 2]}>
          <torusGeometry args={[1.18, 0.003, 8, 180]} />
          <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={1.25} transparent opacity={0.38} />
        </mesh>
      ))}

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.58, 0.011, 16, 260]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1.8} />
      </mesh>

      <mesh rotation={[0.72, 0.15, 0.64]}>
        <torusGeometry args={[1.8, 0.011, 16, 260]} />
        <meshStandardMaterial color="#a78bfa" emissive="#8b5cf6" emissiveIntensity={1.8} />
      </mesh>

      <mesh rotation={[-0.7, 0.35, -0.65]}>
        <torusGeometry args={[1.69, 0.007, 16, 260]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.35} />
      </mesh>

      {dots.map((pos, i) => (
        <Float key={i} speed={1.4} rotationIntensity={0.25} floatIntensity={0.35}>
          <mesh position={pos}>
            <sphereGeometry args={[i % 12 === 0 ? 0.034 : 0.017, 16, 16]} />
            <meshStandardMaterial
              color={i % 3 === 0 ? "#c084fc" : "#7dd3fc"}
              emissive={i % 3 === 0 ? "#8b5cf6" : "#0ea5e9"}
              emissiveIntensity={1.75}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}