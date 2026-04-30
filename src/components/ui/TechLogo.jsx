import { motion } from "framer-motion";
import { FaMicrosoft } from "react-icons/fa";
import {
  SiDocker,
  SiGithub,
  SiGitlab,
  SiGooglecloud,
  SiJavascript,
  SiKubernetes,
  SiNginx,
  SiNodedotjs,
  SiReact,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

export default function TechLogo({ name }) {
  const logos = {
    aws: { icon: <span className="text-xl font-black">AWS</span>, label: "AWS" },
    Azure: { icon: <FaMicrosoft />, label: "Azure" },
    GCP: { icon: <SiGooglecloud />, label: "GCP" },
    docker: { icon: <SiDocker />, label: "Docker" },
    k8s: { icon: <SiKubernetes />, label: "K8s" },
    Terraform: { icon: <SiTerraform />, label: "Terraform" },
    GitHub: { icon: <SiGithub />, label: "GitHub" },
    GitLab: { icon: <SiGitlab />, label: "GitLab" },
    Nginx: { icon: <SiNginx />, label: "Nginx" },
    JS: { icon: <SiJavascript />, label: "JavaScript" },
    TS: { icon: <SiTypescript />, label: "TypeScript" },
    React: { icon: <SiReact />, label: "React" },
    node: { icon: <SiNodedotjs />, label: "Node.js" },
  };

  const item = logos[name];
  if (!item) return null;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.05 }}
      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-100 shadow-[0_0_15px_rgba(56,189,248,.25)]"
    >
      <span className="text-3xl text-sky-300 transition group-hover:text-violet-300">{item.icon}</span>
      <span className="text-sm font-black">{item.label}</span>
    </motion.div>
  );
}