# 👨‍💻 Iván González - Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Bienvenido al repositorio de mi portfolio profesional. Una aplicación web moderna, de alto rendimiento y segura, diseñada para mostrar mis proyectos, servicios y trayectoria como desarrollador web y de aplicaciones.

---

## 🚀 Características Principales

- **Multi-Página (Next.js App Router):** Navegación fluida y rápida entre secciones dedicada (Inicio, Proyectos, Servicios, Sobre mí y Contacto).
- **Integración Segura con GitHub API:** Fetching dinámico de repositorios privados utilizando una API Route (Proxy) en el servidor para proteger credenciales sensibles.
- **Diseño Deep Dark & Neon:** Estética moderna basada en contrastes profundos, neones vibrantes y efectos de *Glassmorphism*.
- **Canvas Interactive Background:** Motor de partículas personalizado desarrollado con la Canvas API para una experiencia visual dinámica.
- **SEO Optimizado:** Metadatos dinámicos, archivo robots.txt y estructura semántica para un posicionamiento impecable.
- **Responsive Design:** Adaptado perfectamente para dispositivos móviles, tablets y escritorio.

---

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 15+ (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Framer Motion & CSS keyframe animations
- **Visuales:** HTML5 Canvas API
- **Backend/API:** Next.js Serverless Functions

---

## ⚙️ Configuración y Despliegue

### 1. Clonar el repositorio
```bash
git clone https://github.com/jukk4p/ivangonzalez-dev.git
cd ivangonzalez-dev
```

### 2. Variables de Entorno
Crea un archivo `.env.local` en la raíz del proyecto y añade tu Token de Acceso Personal de GitHub:
```env
GITHUB_PAT=tu_token_aqui
```

### 3. Instalación de dependencias
```bash
npm install
```

### 4. Lanzar entorno de desarrollo
```bash
npm run dev
```

---

## 📂 Estructura del Proyecto

```text
src/
├── app/            # Rutas y lógica de servidor (Next.js App Router)
│   ├── api/        # Endpoints (GitHub Proxy)
│   └── (pages)/    # Proyectos, Servicios, Sobre mí, Contacto
├── components/     # Componentes modulares
│   ├── layout/     # Navbar, Footer
│   ├── sections/   # Hero, Portfolio, Services, Contact
│   └── ui/         # CanvasBackground, UI Elements
└── styles/         # Global CSS y tokens de diseño
```

---

## 📬 Contacto

Si tienes alguna propuesta o consulta, no dudes en contactarme a través de mi web oficial:
🔗 [ivangonzalez.cloud](https://ivangonzalez.cloud)

---

> Desarrollado con ❤️ por Iván González.
