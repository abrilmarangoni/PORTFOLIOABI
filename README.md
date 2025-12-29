# Portfolio Abie

Portfolio web profesional para Software Engineer, diseñado con un enfoque en performance, accesibilidad y UI de alto nivel.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14+ (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Tipografía**: Geist Mono
- **Animaciones**: Framer Motion
- **Optimización**: Next.js Image Optimization

## 📋 Características

- ✅ Diseño pixel-perfect basado en Figma
- ✅ Espaciados en múltiplos de 8px
- ✅ Tipografía Geist Mono optimizada
- ✅ Performance optimizada (lazy loading, code splitting)
- ✅ Accesibilidad WCAG AA (ARIA, navegación por teclado, contraste)
- ✅ Responsive design
- ✅ SEO optimizado

## 🛠️ Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🎨 Diseño

El diseño sigue estrictamente las especificaciones de Figma:
- Colores: Negro (#000), Gris oscuro (#111), Bordes (#333), Texto (#999, #fff)
- Espaciados: Múltiplos de 8px
- Tipografía: Geist Mono en todos los textos
- Bordes: 16px de border-radius para cards principales

## 📁 Estructura del Proyecto

```
PortfolioAbie/
├── app/
│   ├── globals.css      # Estilos globales y configuración de fuente
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página principal
├── components/
│   ├── AboutSection.tsx         # Sección "About Me"
│   ├── SelectedWork.tsx        # Sección "Selected Work"
│   ├── DailyMathChallenge.tsx  # Sección "Daily Math Challenge"
│   └── Navigation.tsx           # Navegación inferior
└── public/              # Archivos estáticos
```

## 🔧 Configuración

### Variables de Entorno

No se requieren variables de entorno para el funcionamiento básico.

### Personalización

Para personalizar los links de contacto, edita el componente `AboutSection.tsx`:

```tsx
<a href="mailto:tu-email@ejemplo.com">Email ↗</a>
```

## ♿ Accesibilidad

- Todos los elementos interactivos tienen estados de focus visibles
- Navegación completa por teclado
- Atributos ARIA en elementos semánticos
- Contraste de colores WCAG AA compliant
- Textos alternativos en imágenes

## 🚀 Deploy

El proyecto está listo para deploy en Vercel:

```bash
vercel
```

O cualquier otra plataforma que soporte Next.js.

## 📝 Notas

- Las imágenes de Figma están configuradas para cargarse desde los assets de Figma API
- El tiempo se actualiza automáticamente cada segundo
- Los links de contacto pueden ser personalizados según necesidad

## 👨‍💻 Autor

Abril Marangoni - Design Engineer — Generative AI @ The University of Texas at Austin

