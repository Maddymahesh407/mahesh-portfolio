# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Production preparation applied in this workspace

This repository was prepared for production readiness. Key actions performed:

- SEO: meta description, Open Graph, Twitter card, canonical link, structured data (JSON-LD), `sitemap.xml`, `robots.txt`.
- Accessibility: skip link, ARIA labels on sections and interactive elements, focus outlines, reduced-motion support.
- Performance: lazy-loaded sections, Suspense fallback spinner, `LazyImage` component for image lazy-loading, memoized static sections to reduce re-renders.
- UX polish: page transitions using `framer-motion`, consistent spacing via Tailwind, spinner loading states.
- Manifest & favicon: `public/manifest.json`, `favicon.svg` support.

See the `README` section in the repository root for run/build instructions and the deployment checklist.
