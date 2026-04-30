import { motion } from "framer-motion";

export default function GlowOrb({ className = "", delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{
        scale: [1, 1.25, 1],
        opacity: [0.25, 0.72, 0.25],
        x: [0, 38, 0],
        y: [0, -28, 0],
      }}
      transition={{ duration: 7, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}