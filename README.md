# 🚀 Portfolio Hub 

> Live: [https://designyourvision.vercel.app](https://designyourvision.vercel.app)

A production-grade **NodeJS Monolith** designed to serve as a centralized portfolio and a rapid-deployment engine for static websites. This architecture allows for instant scaling of "Brochure" and "App-Simulation" demos under a single serverless deployment.

## ⚡ Tech Stack

* **Core:** NodeJS, Express.js (Hybrid Server-Side Rendering)
* **Styling:** Tailwind CSS, Custom CSS Variables
* **Templating:** EJS (Embedded JavaScript)
* **Animations:** GSAP (GreenSock), CSS Keyframes
* **Deployment:** Vercel (Serverless Functions)

## 🏭 The Demo Factory (Featured Projects)

This repository hosts a collection of high-performance, industry-specific demos. Each project is self-contained in the `public/demos` directory but unified under the main Hub architecture.

| Project | Industry | Key Technical Features |
| :--- | :--- | :--- |
| **Nexus Mart** | E-Commerce | Full-stack simulation, LocalStorage "Mock Backend", Admin Panel for Inventory, Dark Mode UI. |
| **Horizon University** | Education | Enterprise-level 12-page architecture, Mega-Menu navigation, Student Portal simulation. |
| **Velocity Fitness** | Health & Wellness | High-intensity Neon design, Tailwind Grid layouts, Responsive Class Scheduling UI. |
| **Espresso Atelier** | F&B / Hospitality | Parallax scrolling, JavaScript-powered filterable menu, "Glassmorphism" aesthetics. |
| **Nova Care** | Healthcare | High-trust corporate design, 10-page structure, Emergency routing logic. |
| **Azure Estates** | Luxury Real Estate | Cinematic minimalism, Sticky Sidebar agents, Editorial-style layouts. |
| **Safe DAO** | Web3 / Social | Landing page for personal safety SOS application, High-contrast Alert UI. |


🚀 Deployment
This project is optimized for Vercel Zero-Config Deployment.

Push changes to the main branch.

Vercel detects the vercel.json configuration.

The system automatically builds the Express API as a Serverless Function and serves the public/ folder as Static Assets (CDN).

📂 Directory Structure
Plaintext

/

├── api/             # Express Server Logic (Vercel Entry Point)

├── public/          # Static Assets

│   ├── css/         # Global Styles

│   ├── js/          # Universal Scripts (Global Nav, etc.)

│   └── demos/       # All demo sites live here

├── views/           # EJS Templates for the main Portfolio Hub

└── vercel.json      # Serverless Routing Configuration


📬 Contact & Leads
The integrated contact form uses Web3Forms for serverless email handling.

Lead Capture: Automated email dispatch to admin.

Architecture: Zero-backend form handling.

Built by Anish Agarwal.
