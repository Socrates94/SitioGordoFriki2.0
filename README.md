# Gordo Friki - Sitio Web 2.0

![Gordo Friki Banner](src/img/banner1.jpeg)

Sitio web oficial de **El taller del gordo friki**, una consultoría de vanguardia especializada en infraestructura TI, reparación de hardware y desarrollo de software a medida en la Ciudad de Puebla.

## 🚀 Características

- **Diseño Modern Tech**: Interfaz oscura profesional con efectos de *glassmorphism* y gradientes dinámicos.
- **Totalmente Responsivo**: Optimizado para una experiencia fluida en dispositivos móviles, tabletas y computadoras de escritorio.
- **Secciones Integrales**:
  - **Servicios Especializados**: Detalle de soporte físico y soluciones digitales.
  - **Galería Interactiva**: Visualización de proyectos y trabajos realizados.
  - **Promociones**: Planes de precios claros y destacados.
  - **Slider Infinito**: Carrusel de marcas y tecnologías aliadas.
- **Contacto Directo**: Integración con WhatsApp para solicitudes de servicio instantáneas.

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y optimizada.
- **SASS (SCSS)**: Arquitectura de estilos modular y mantenible.
- **JavaScript**: Lógica interactiva para la galería y el desplazamiento suave.
- **Diseño Moderno**: Uso de variables CSS, Flexbox, CSS Grid y Mixins avanzados.

## 📁 Estructura del Proyecto

```bash
├── build/                 # Archivos compilados (CSS, JS)
│   ├── css/
│   │   └── app.css       # CSS final generado por Sass
│   └── js/
│       └── app.js        # Lógica principal
├── src/                   # Código fuente
│   ├── scss/              # Archivos Sass modulares
│   │   ├── base/          # Variables, mixins y estilos globales
│   │   └── layout/        # Estilos específicos de componentes
│   ├── img/               # Recursos visuales (imágenes, logos)
│   └── js/                # Scripts de desarrollo
├── index.html             # Página principal
└── README.md
```

## ⚙️ Instalación y Desarrollo

Para realizar cambios en el estilo y compilar el archivo CSS final, asegúrate de tener instalado **Sass**.

1.  Clona el repositorio.
2.  Navega a la carpeta del proyecto.
3.  Compila los archivos SCSS ejecutando:

```bash
npx sass src/scss/app.scss build/css/app.css
```

O para desarrollo continuo (watch mode):

```bash
npx sass --watch src/scss/app.scss:build/css/app.css
```

## ✒️ Autor

- **Gordo Friki** - *Desarrollo y mantenimiento* - [Socrates94](https://github.com/Socrates94)

---
© 2024-2028 **El taller del gordo friki** - Todos los derechos reservados.
