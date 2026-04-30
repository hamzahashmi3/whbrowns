import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Float, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// textures
import earthDay from "../../img/earth-day.jpg";
import earthClouds from "../../img/earth-clouds.png";
import earthNight from "../../img/earth-night.jpg";


// =======================
// 🌍 REAL EARTH (CLOUD)
// =======================

export function MiniCloudWorld() {
  const earthRef = useRef();
  const cloudsRef = useRef();
  const nightRef = useRef();
  const atmosphereRef = useRef();
  const orbitRef = useRef();
  const satelliteRef = useRef();

  const [dayMap, cloudMap, nightMap] = useTexture([
    earthDay,
    earthClouds,
    earthNight,
  ]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (earthRef.current) earthRef.current.rotation.y += delta * 0.12;
    if (nightRef.current) nightRef.current.rotation.y += delta * 0.12;
    if (cloudsRef.current) cloudsRef.current.rotation.y += delta * 0.18;
    if (atmosphereRef.current) atmosphereRef.current.rotation.y += delta * 0.08;
    if (orbitRef.current) orbitRef.current.rotation.z += delta * 0.18;

    if (satelliteRef.current) {
      satelliteRef.current.position.x = Math.cos(t * 0.9) * 1.7;
      satelliteRef.current.position.z = Math.sin(t * 0.9) * 1.7;
      satelliteRef.current.position.y = Math.sin(t * 1.2) * 0.28;
      satelliteRef.current.rotation.y += delta * 2;
      satelliteRef.current.rotation.z += delta * 1.2;
    }
  });

  return (
    <group scale={1.25} rotation={[0.18, -0.35, 0]}>
      {/* deep blue back glow */}
      <mesh position={[0, 0, -0.25]} scale={1.55}>
        <sphereGeometry args={[1, 96, 96]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* real earth surface */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 192, 192]} />
        <meshStandardMaterial
          map={dayMap}
          roughness={0.85}
          metalness={0.02}
        />
      </mesh>

      {/* night city lights overlay */}
      <mesh ref={nightRef}>
        <sphereGeometry args={[1.004, 192, 192]} />
        <meshBasicMaterial
          map={nightMap}
          transparent
          opacity={0.42}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* moving transparent cloud layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.025, 192, 192]} />
        <meshStandardMaterial
          map={cloudMap}
          transparent
          opacity={0.38}
          depthWrite={false}
          roughness={1}
        />
      </mesh>

      {/* atmosphere rim */}
      <mesh ref={atmosphereRef} scale={1.085}>
        <sphereGeometry args={[1, 192, 192]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.18}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* soft outer halo */}
      <mesh scale={1.22}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.045}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* orbit rings */}
      <group ref={orbitRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.34, 0.008, 16, 220]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={1.7}
          />
        </mesh>

        <mesh rotation={[0.75, 0.3, 0.62]}>
          <torusGeometry args={[1.5, 0.006, 16, 220]} />
          <meshStandardMaterial
            color="#a78bfa"
            emissive="#8b5cf6"
            emissiveIntensity={1.5}
          />
        </mesh>

        <mesh rotation={[-0.65, 0.15, -0.7]}>
          <torusGeometry args={[1.43, 0.004, 16, 220]} />
          <meshStandardMaterial
            color="#67e8f9"
            emissive="#22d3ee"
            emissiveIntensity={1.2}
          />
        </mesh>
      </group>

      {/* satellite */}
      <group ref={satelliteRef}>
        <mesh>
          <boxGeometry args={[0.13, 0.08, 0.08]} />
          <meshStandardMaterial
            color="#e0f2fe"
            emissive="#38bdf8"
            emissiveIntensity={0.8}
            metalness={0.6}
            roughness={0.2}
          />
        </mesh>

        <mesh position={[-0.16, 0, 0]}>
          <boxGeometry args={[0.18, 0.05, 0.01]} />
          <meshStandardMaterial
            color="#2563eb"
            emissive="#1d4ed8"
            emissiveIntensity={1.2}
          />
        </mesh>

        <mesh position={[0.16, 0, 0]}>
          <boxGeometry args={[0.18, 0.05, 0.01]} />
          <meshStandardMaterial
            color="#2563eb"
            emissive="#1d4ed8"
            emissiveIntensity={1.2}
          />
        </mesh>

        <pointLight intensity={0.7} color="#38bdf8" distance={1.2} />
      </group>

      {/* floating data nodes */}
      {Array.from({ length: 14 }).map((_, i) => {
        const angle = (i / 14) * Math.PI * 2;
        const radius = 1.42 + (i % 3) * 0.12;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(i * 1.7) * 0.45;

        return (
          <Float key={i} speed={1.5 + i * 0.05} floatIntensity={0.25}>
            <mesh position={[x, y, z]}>
              <sphereGeometry args={[i % 4 === 0 ? 0.045 : 0.026, 16, 16]} />
              <meshStandardMaterial
                color={i % 2 ? "#7dd3fc" : "#c084fc"}
                emissive={i % 2 ? "#0ea5e9" : "#8b5cf6"}
                emissiveIntensity={2}
              />
            </mesh>
          </Float>
        );
      })}

      {/* bottom hologram platform */}
      <mesh position={[0, -1.22, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.1, 0.016, 16, 220]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0ea5e9"
          emissiveIntensity={1.6}
          transparent
          opacity={0.75}
        />
      </mesh>

      <mesh position={[0, -1.22, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.08, 96]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.055}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}


// =======================
// ♾️ DEVOPS INFINITY
// =======================

class InfinityCurve extends THREE.Curve {
  getPoint(t) {
    const a = t * Math.PI * 2;
    return new THREE.Vector3(
      Math.sin(a),
      Math.sin(a) * Math.cos(a),
      0
    );
  }
}

export function MiniInfinityWorld() {
  const tube = useRef();
  const path = useMemo(() => new InfinityCurve(), []);

  useFrame((_, delta) => {
    if (tube.current) {
      tube.current.rotation.y += delta * 0.8;
      tube.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={tube}>
        <tubeGeometry args={[path, 200, 0.12, 32, true]} />
        <meshPhysicalMaterial
          color="#8b5cf6"
          emissive="#4f46e5"
          emissiveIntensity={1.3}
          metalness={0.3}
          roughness={0.05}
          transmission={0.6}
        />
      </mesh>
    </group>
  );
}


// =======================
// 🛒 ECOMMERCE
// =======================

export function MiniCartWorld() {
  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group ref={ref}>
      <mesh>
        <torusGeometry args={[1.1, 0.02, 12, 100]} />
        <meshStandardMaterial color="#34d399" emissive="#10b981" />
      </mesh>
    </group>
  );
}


// =======================
// 💻 CODE / IT
// =======================

export function MiniCodeWorld() {
  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.25;
  });

  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[1.5, 0.9, 0.1]} />
        <meshStandardMaterial color="#020617" emissive="#0ea5e9" />
      </mesh>

      <Float>
        <mesh position={[0, 0.8, 0]}>
          <torusGeometry args={[0.4, 0.02, 8, 80]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={1.5}
          />
        </mesh>
      </Float>
    </group>
  );
}