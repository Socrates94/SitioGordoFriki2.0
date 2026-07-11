# 🖥️ El Taller del Gordo Friki - Sitio Web 2.0

<div align="center">
  <img src="src/img/lomito.png" alt="Mascota del taller" width="200" style="border-radius: 50%; box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3); margin-bottom: 20px;" />

  <h3>Potencia y Precisión para tu Tecnología</h3>

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
  [![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.org/)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
  [![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
</div>

---

## 📝 Descripción del Proyecto

Este es el sitio web oficial de **El Taller del Gordo Friki**, una consultoría de vanguardia ubicada en la **Ciudad de Puebla**. El sitio web funciona como una tarjeta de presentación digital interactiva y catálogo de servicios especializados en:
*   🖥️ **Soporte Físico y Hardware**: PC, notebooks, mantenimiento, reparación a nivel componente y diagnóstico.
*   💾 **Software y Licenciamiento**: Venta e instalación de licencias originales, sistemas operativos y desinfección de malware.
*   🌐 **Desarrollo a Medida**: Aplicaciones web, móviles (Android/iOS) y sistemas de escritorio personalizados.

Diseñado con un enfoque estético premium y moderno (*dark tech*), implementa principios avanzados de experiencia de usuario (UX), adaptabilidad móvil (Responsive Web Design) y animaciones fluidas utilizando SASS para los estilos.

---

## ✨ Características Principales

*   🎨 **Aésteica Premium Dark Mode**: Combinación de gradientes de color violeta e índigo, tipografías modernas (Montserrat) y tarjetas con efecto *glassmorphism*.
*   📱 **Diseño 100% Responsivo**: Adaptado perfectamente para móviles, tabletas y pantallas de escritorio anchas (con alineación corregida del banner principal).
*   📋 **Catálogo Interactivo**: Sección de servicios interactiva con listas de precios detalladas.
*   🖼️ **Galería Multimedia**: Galería de imágenes integrada con efectos de hover para mostrar el trabajo diario en el taller.
*   🔥 **Slider Infinito**: Carrusel interactivo continuo que muestra las marcas y tecnologías asociadas (Asus, HP, Apple, Samsung, Microsoft, etc.).
*   💬 **Llamados a la Acción (CTA)**: Botones interactivos que enlazan directamente a soporte por WhatsApp para facilitar la captación de clientes.

---

## 🛠️ Tecnologías e Infraestructura

*   **Estructura**: HTML5 semántico con enfoque SEO optimizado.
*   **Estilos**: SASS (SCSS) compilado, estructurado de manera modular siguiendo la metodología 7-1 (carpetas `base/`, `layout/`).
*   **Interactividad**: JavaScript moderno para animaciones, carga dinámica de componentes y la interactividad general del sitio.
*   **Fuentes**: Google Fonts (Montserrat).

---

## 📁 Estructura de Directorios

El proyecto cuenta con una estructura limpia y fácil de navegar:

```directory
├── build/                 # Recursos compilados listos para producción
│   ├── css/
│   │   ├── app.css       # CSS final de producción (generado por Sass)
│   │   └── app.css.map   # Sourcemap de depuración
│   └── js/
│       └── app.js        # Lógica de JavaScript optimizada
├── src/                   # Código de desarrollo (fuente)
│   ├── scss/              # Hojas de estilo estructuradas en Sass
│   │   ├── base/          # Variables, mixins y normalización
│   │   │   ├── _globales.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _normalize.scss
│   │   │   └── _variables.scss
│   │   ├── layout/        # Estilos aplicados a componentes y secciones del sitio
│   │   │   ├── _banner.scss
│   │   │   ├── _servicios.scss
│   │   │   ├── _footer.scss
│   │   │   └── ...
│   │   └── app.scss       # Archivo de entrada de Sass
│   ├── js/                # Scripts de JavaScript originales
│   └── img/               # Recursos gráficos e imágenes del sitio
├── index.html             # Punto de entrada HTML del sitio
└── README.md              # Documentación del proyecto
```

---

## ⚙️ Instalación y Compilación de Estilos

Para contribuir al desarrollo del proyecto o modificar los estilos, necesitas compilar los archivos SASS. Asegúrate de tener instalado [Sass](https://sass-lang.com/install) de forma global o vía `npx` (Node.js).

### 1. Clonar el repositorio
```bash
git clone https://github.com/Socrates94/SitioGordoFriki2.0.git
cd SitioGordoFriki2.0
```

### 2. Compilar estilos una sola vez
Para compilar la hoja de estilos SCSS a CSS de producción, ejecuta el siguiente comando:
```bash
npx sass --load-path=src/scss src/scss/app.scss build/css/app.css
```

### 3. Escuchar cambios en tiempo real (Watch Mode)
Si estás haciendo cambios constantes y deseas que se compilen automáticamente al guardar:
```bash
npx sass --watch --load-path=src/scss src/scss/app.scss:build/css/app.css
```

---

## ✒️ Autor y Créditos

*   **El Taller del Gordo Friki** - *Desarrollo de Software y Soporte*
*   **Socrates94** - *Repositorio y Mantenimiento* - [GitHub Perfil](https://github.com/Socrates94)

---
<div align="center">
  <p>© 2024-2028 El taller del gordo friki. Todos los derechos reservados.</p>
</div>
