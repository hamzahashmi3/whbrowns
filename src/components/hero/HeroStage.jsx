import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { Box, Cloud, Code2 } from "lucide-react";
import GlowOrb from "../ui/GlowOrb";
import HologramGlobe from "./HologramGlobe";

export default function HeroStage() {
  return (
    <div className="relative h-[650px] lg:h-[760px]">
      <GlowOrb className="left-[30%] top-[38%] h-80 w-80 bg-sky-500/25" />
      <GlowOrb className="right-[20%] top-[18%] h-72 w-72 bg-violet-500/25" delay={1.3} />

      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0.18, 5.1], fov: 40 }}>
          <ambientLight intensity={0.4} />
          <Environment preset="night" />
          <directionalLight position={[5,5,5]} intensity={2} />
          <pointLight position={[4, 5, 5]} intensity={1.9} />
          <pointLight position={[-4, -2, 3]} intensity={1} color="#8b5cf6" />
          <Suspense fallback={null}>
            <Stars radius={95} depth={50} count={2600} factor={4} saturation={0} fade speed={1.1} />
            <HologramGlobe />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.42} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-4 left-1/2 z-0 h-52 w-[82%] -translate-x-1/2 rounded-[50%] border border-sky-400/40 bg-sky-400/5 shadow-[0_0_130px_rgba(56,189,248,.38)]" />
      <div className="absolute bottom-[88px] left-1/2 z-0 h-32 w-[64%] -translate-x-1/2 rounded-[50%] border border-violet-400/35 shadow-[0_0_90px_rgba(139,92,246,.34)]" />

      <motion.div
        className="absolute bottom-[170px] left-1/2 z-20 h-4 w-4 -translate-x-1/2 rounded-full bg-sky-300 shadow-[0_0_45px_rgba(56,189,248,1)]"
        animate={{ y: [0, -70, 0], opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {[
        { icon: Cloud, cls: "left-[12%] top-[14%]" },
        { icon: Code2, cls: "left-[3%] top-[42%]" },
        { icon: Box, cls: "right-[12%] top-[20%]" },
      ].map(({ icon: Icon, cls }, i) => (
        <motion.div
          key={cls}
          className={`absolute ${cls} z-30 flex h-24 w-24 items-center justify-center rounded-[1.7rem] border border-sky-300/30 bg-slate-950/50 backdrop-blur-xl shadow-[0_0_48px_rgba(56,189,248,.28)]`}
          animate={{ y: [0, i % 2 ? 18 : -18, 0], rotate: [0, i % 2 ? -7 : 7, 0] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon size={42} className={i === 2 ? "text-violet-300" : "text-sky-300"} />
        </motion.div>
      ))}

      <motion.div
        className="absolute right-[4%] top-[48%] z-30 flex h-24 w-24 items-center justify-center rounded-[1.7rem] border border-violet-300/30 bg-slate-950/50 text-2xl font-black backdrop-blur-xl shadow-[0_0_45px_rgba(139,92,246,.3)]"
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        aws
      </motion.div>
    </div>
  );
}