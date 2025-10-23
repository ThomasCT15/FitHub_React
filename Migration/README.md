# FitHub — Página del Gym
Resumen
- FitHub es una landing web para un gimnasio, desarrollada con HTML, CSS y JavaScript.
- Enfoque: diseño limpio, accesible y responsivo para presentar servicios, clases y entrenadores.
- Paleta principal: azules y blanco. Ejemplos de color: #0D6EF5, #0A58CA y #FFFFFF.

Características principales
- Página de inicio con hero, beneficios y llamadas a la acción.
- Sección de Clases: listado, horarios y filtros por tipo (cardio, fuerza, yoga).
- Perfil de Entrenadores: fotos, especialidades y enlaces a redes.
- Reservas y contacto: formulario con validaciones en cliente (JS).
- Testimonios y galería de instalaciones.
- Navegación fija y diseño adaptado a móvil.

Tecnologías
- HTML5 — estructura semántica.
- CSS3 — estilos modulares y responsive (Flexbox / Grid).
- JavaScript — interactividad, validación y manipulación del DOM.
- (Opcional) Live Server para desarrollo local.

Estructura recomendada (carpeta src)
- src/
  - index.html — punto de entrada.
  - css/
    - styles.css — estilos globales.
    - components/ — estilos por componente (header, cards, footer).
  - js/
    - main.js — comportamiento global (menú, validaciones).
    - api.js — gestión de reservas/localStorage.
    - components/ — scripts independientes (slider, modal).
  - assets/ — imágenes, iconos y fuentes.

Guía de diseño
- Colores: azul dominante y blanco como fondo secundario.
- Tipografía: sans‑serif legible, tamaños responsivos y jerarquía clara.
- Accesibilidad: texto con contraste suficiente, estados de foco visibles y etiquetas en formularios.

Ejecutar en local (Windows)
- Abrir directamente: doble clic en `src/index.html`.
- Usar Live Server en VS Code (recomendado).
- Usar servidor simple desde la raíz del proyecto:
  - PowerShell / CMD:
    - npx http-server src -o

Buenas prácticas
- Mantener separación HTML / CSS / JS.
- Validar datos en cliente y servidor.
- Optimizar imágenes y recursos para mobile.
- Documentar componentes y estilos reutilizables.
⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆ 
⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿ 
⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀ 
⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉ 

