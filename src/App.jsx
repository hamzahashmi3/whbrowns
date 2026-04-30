import Background from "./components/layout/Background";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import TrustBar from "./components/sections/TrustBar";
import Services from "./components/sections/Services";
import Innovation from "./components/sections/Innovation";
import TechStack from "./components/sections/TechStack";
import Portfolio from "./components/sections/Portfolio";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <main className="min-h-screen pb-20 overflow-hidden bg-[#020713] text-white">
      <Background />
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Innovation />
      <TechStack />
      <Portfolio />
      <About />
      <Contact />
    </main>
  );
}