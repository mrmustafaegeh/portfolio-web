# 🌐 Mustafa Egeh — Premium Dark 3D Portfolio

A high-performance, visually stunning portfolio ecosystem built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. 

This iteration abandons basic glassmorphism and heavy particle systems in favor of a strict **"Premium Dark 3D"** aesthetic. Think Apple Vision Pro meets a high-end game studio: surgical use of Three.js, pure deep blacks, sharp UI edges, CSS 3D physics, and zero lag.

![Portfolio Setup](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)

---

## ✨ Features & Architecture

### 🌌 Immersive "Premium Dark 3D" Philosophy
- **Strict Color Architecture**: Pure deep black backgrounds (`#080808` to `#0a0a0a`) mixed with a sharp electric lime accent (`#CAFF00`). No cheap glows.
- **Surgical WebGL**: ONE impressive Three.js wireframe mesh located only in the Hero. Lazy-loaded via `Suspense` so it never blocks the main thread.
- **Pure CSS 3D Tech**:
  - The **About** section features an automatic rotating 3D CSS Cube showcasing tech tools without JavaScript canvas engines.
  - The **Services** section utilizes `vanilla-tilt.js` for lightweight 3D perspective magnetic cards.
  - The **Projects** grid features pure CSS `preserve-3d` flip-cards, showing images on the front and detailed descriptions on the back upon hover.
- **Typography**: Industrial and bold. `Syne` for main headings, `Space Mono` for tech details and UI accents.

### ⚡ Unmatched Performance
- **Zero Idle Loops**: All infinite loops and bloated React `particle` systems were deleted. 
- **Framer Motion Mastery**: Animations use `viewport={{ once: true }}` so they don't lag browsers by constantly resolving while scrolling up and down.
- **TypeScript & Vite**: Rapid compiling, strict type safety, zero TS errors on build.

---

## 🛠 Tech Stack

- **Frontend Core**: React 18, Vite 6, TypeScript
- **Styling**: Tailwind CSS 3 (Custom configuration)
- **3D & Physics**: Three.js (Hero), Vanilla-Tilt (Services), CSS `preserve-3d` (Projects, About)
- **Animation**: Framer Motion
- **Web Fonts**: Google Fonts (Syne, Space Mono, Inter)

---

## 🚀 Quick Start

To run the ecosystem locally, clone the repo and execute the following commands.

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Production Build
```bash
cd frontend
npm run build
```
Vercel handles the heavy lifting perfectly. Expect a ~14s build time with 0 errors.

---

## 📅 Contact
Available for premium engineering and high-end creative work.
**Email**: Mr.mustafaegeh@gmail.com
