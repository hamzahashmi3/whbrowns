# 🚀 WHBrowns — Cloud • DevOps • E-Commerce Platform

A modern, high-performance portfolio website built to showcase real-world **Cloud Engineering, DevOps Automation, and E-Commerce Solutions**.

Designed with a **Tesla-level UI**, immersive 3D visuals, and production-ready frontend architecture.

---

## 🌐 Live Demo
👉 (Add your Netlify / Vercel link here)

---

## ⚡ Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Framer Motion (animations)

### 3D & Visuals
- Three.js
- @react-three/fiber
- @react-three/drei

### UI & Icons
- Lucide Icons
- React Icons

---

## 🎯 Key Features

### ✨ Premium UI/UX
- Dark futuristic theme (Apple / Tesla style)
- Smooth hover animations
- Glassmorphism + neon glow effects

### 🌍 Interactive 3D Experience
- Animated globe (cloud network simulation)
- Floating UI elements
- Orbit controls & auto-rotation

### 🧠 DevOps-Focused Sections
- Cloud Architecture
- DevOps Automation
- E-Commerce Systems
- IT Consulting

### 🎬 Dynamic Media
- High-quality animated GIFs for services
- Interactive 3D components
- Smooth transitions

### 📊 Business Ready
- Portfolio projects section
- Client-ready contact form (Netlify)
- Trust indicators & stats

---

## 📁 Project Structure

src/
│
├── App.jsx # Main entry point (combines all sections)
│
├── data/
│ └── siteData.js # Static data (services, content, etc.)
│
├── components/
│
│ ├── layout/
│ │ ├── Navbar.jsx # Top navigation bar
│ │ └── Background.jsx # Global background effects (gradients + grid)
│
│ ├── hero/
│ │ ├── Hero.jsx # Hero section (heading + CTA)
│ │ ├── HeroStage.jsx # 3D scene container (Canvas)
│ │ └── HologramGlobe.jsx # Animated 3D globe
│
│ ├── sections/
│ │ ├── TrustBar.jsx # Trust badges (AWS, Docker, etc.)
│ │ ├── Services.jsx # Services cards (with GIF/3D)
│ │ ├── Innovation.jsx # "Step Into Innovation" section
│ │ ├── TechStack.jsx # Technology logos grid
│ │ ├── Portfolio.jsx # Projects showcase
│ │ ├── About.jsx # Company overview
│ │ └── Contact.jsx # Contact form (Netlify integrated)
│
│ ├── 3d/
│ │ ├── CardScene.jsx # 3D renderer for service cards
│ │ └── MiniWorlds.jsx # All mini 3D scenes (cloud, devops, etc.)
│
│ └── ui/
│ ├── CountNumber.jsx # Animated counter (stats)
│ ├── GlowOrb.jsx # Floating glow effect
│ └── TechLogo.jsx # Tech logo component
│
├── img/
│ ├── cloud.gif # Cloud animation
│ ├── infinity.gif # DevOps animation
│ ├── trolly.gif # E-commerce animation
│ ├── laptop.gif # IT services animation
│ ├── earth-day.jpg # Earth texture (day)
│ ├── earth-clouds.png # Cloud overlay
│ └── earth-night.jpg # Night lights texture
│
└── index.css # Global styles (Tailwind + custom)