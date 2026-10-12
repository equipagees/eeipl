# Equipage Equipment Solutions (EES / EEIPL) 🚜🏗️

> **Official Web Platform for Industrial Machinery, Lithium Forklifts, Pick & Carry Cranes, and Aerial Rescue Solutions across PAN India.**

[![React](https://img.shields.io/badge/React-19.2-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?logo=vite)](https://vitejs.dev/)
[![Security](https://img.shields.io/badge/Security-Hardened%20Headers%20%2B%20Honeypot-success?logo=shield)](https://eeipl.co.in)
[![SEO Ready](https://img.shields.io/badge/SEO-JSON--LD%20%2B%20OpenGraph-orange?logo=google)](https://eeipl.co.in/sitemap.xml)
[![License](https://img.shields.io/badge/License-Proprietary-red)]()

---

## 📌 Overview

**Equipage Equipment Solutions (EES)** is an authorized distributor and systems engineering integrator in India for tier-1 global equipment OEMs. We deliver high-reliability material handling equipment, lithium-ion battery technology, rough-terrain articulated cranes, high-altitude aerial platforms, and municipal fire fighting vehicles.

### Authorised OEM Brands Represented:
1. **BYD MHE** – Lithium Iron Phosphate (LiFePO4) zero-maintenance electric forklifts, reach trucks, and warehouse stackers.
2. **Terex / Franna** – Articulated pick & carry mobile cranes (17T to 25T) operating without outriggers.
3. **Doosan Bobcat** – 7-Series heavy diesel and electric counterbalanced forklifts (2T to 25T).
4. **Beltas Turntable Ladders** – Hydraulic turntable aerial rescue ladders (18m to 64m) mounted on commercial truck chassis.
5. **Liftmak Platforms** – Advanced aerial ladder fire fighting and rescue hydraulic platforms (15m to 70m).
6. **Jinwoo SMC** – Truck-mounted telescopic and articulated elevating work platforms (30m to 75m).
7. **Hydramak** – HM24A truck-mounted articulated aerial work platforms (23.2m height, 10m outreach).
8. **Skymech** – Hydraulic self-loading knuckle boom (SKB 8–23) and straight boom truck loader cranes.

---

## 🚀 Key Platform Features

### 1. Fresh & High-Impact Industrial UI
- **Modern Obsidian & Amber Design System**: Ultra-sleek dark palette (`#070B14`, `#0D1424`) with safety amber (`#F59E0B`) and tech cyan (`#0EA5E9`) precision accents.
- **Interactive Equipment Showcase**: Dynamic tabbed viewer featuring equipment cutouts, real-time specifications, and direct quote shortcuts.
- **Machinery Fleet Matrix**: Real-time filtering by category (Material Handling, Cranes, Aerial Platforms, Fire & Rescue).
- **Responsive Layout**: Fluid experience across mobile, tablet, and ultrawide screens.

### 2. Search Engine Optimization (SEO) Ready
- **Dynamic SEO Head Injection**: `<SEO />` component dynamically managing titles, meta descriptions, and canonical tags for every route.
- **Schema.org Structured Data**:
  - `LocalBusiness` / `Organization` with pan-India headquarters and branch contact metadata.
  - `WebSite` schema with search action directives.
  - `Product` & `AggregateOffer` schema for machinery line items.
- **Search Engine Assets**:
  - `public/sitemap.xml` with priority and change frequency directives.
  - `public/robots.txt` granting access to web crawlers and Googlebot.
  - `public/manifest.json` for PWA compatibility.
- **Social Graph Optimization**: Open Graph (`og:*`) and Twitter Card (`twitter:*`) tags pre-configured for rich previews.

### 3. Enterprise-Grade Security Hardening
- **Strict HTTP Security Headers**:
  - `Content-Security-Policy` (CSP)
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN` (Clickjacking mitigation)
  - `X-XSS-Protection: 1; mode=block`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` restricting camera, microphone, and geolocation
- **Form Input Sanitization**: Custom utility (`src/utils/security.js`) stripping malicious tags, inline JavaScript pseudo-protocols, and XSS attack vectors.
- **Anti-Bot Honeypot Defense**: Invisible honeypot traps silently disqualifying automated spam submissions.
- **Rate Limiting Protection**: Client-side submission cooldown throttling to stop denial-of-service form flooding.
- **Zero Vulnerability Dependencies**: Fully audited and verified clean through `npm audit`.

---

## 🛠️ Tech Stack

- **Runtime & UI**: React 19 (`react`, `react-dom`)
- **Routing**: React Router DOM 7 (`react-router-dom`)
- **Bundler & Dev Server**: Vite 8 with fast HMR
- **Styling**: Vanilla CSS Design Tokens (zero heavy CSS dependencies, high performance)
- **Deployment Ready**: Optimized for Cloudflare Pages, Netlify (`public/_headers`), and Vercel (`vercel.json`)

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18.x or later)
- npm (v9.x or later)

### Installation
```bash
# Clone the repository
git clone https://github.com/equipagees/eeipl.git

# Enter project directory
cd eeipl

# Install dependencies
npm install
```

### Development
```bash
# Start local Vite development server
npm run dev
```

### Production Build
```bash
# Compile and optimize production distribution bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🏢 Corporate Contact & Regional Network

- **Registered Office**: Plot No 21 & 21A, Sector 142, Noida, Uttar Pradesh - 201305, India
- **Direct Phone**: +91-9910408544
- **Official Email**: contact@eeipl.co.in
- **Website**: [https://eeipl.co.in](https://eeipl.co.in)
- **Regional Hubs**: Delhi NCR · Mumbai · Kolkata · Bengaluru

---

## 📄 License

Proprietary © Equipage Equipment Solutions (EES) / Equipage Engineering & Industrial Private Limited. All Rights Reserved.
