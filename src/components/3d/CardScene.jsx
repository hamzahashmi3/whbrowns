import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { MiniCartWorld, MiniCloudWorld, MiniCodeWorld, MiniInfinityWorld } from "./MiniWorlds";

export default function CardScene({ type }) {
  return (
      <Canvas camera={{ position: [0, 0, 4.2], fov: 42 }} dpr={[1, 1.7]}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 3, 5]} intensity={2.4} color="#ffffff" />
        <pointLight position={[-3, -2, 3]} intensity={1.4} color="#3b82f6" />
        <pointLight position={[2, -1, 2]} intensity={0.9} color="#8b5cf6" />

        <Suspense fallback={null}>
          <Stars radius={35} depth={22} count={900} factor={2.4} saturation={0} fade speed={0.7} />
          {type === "cloud" && <MiniCloudWorld />}
          {type === "infinity" && <MiniInfinityWorld />}
          {type === "commerce" && <MiniCartWorld />}
          {type === "code" && <MiniCodeWorld />}
        </Suspense>
      </Canvas>
  );
}