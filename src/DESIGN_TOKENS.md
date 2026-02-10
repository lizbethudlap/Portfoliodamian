# Sistema de Design Tokens con Tailwind CSS v4.1

Este proyecto implementa un sistema completo de design tokens usando **Tailwind CSS v4.1** con **HTML, CSS y JavaScript vanilla** (sin frameworks). La arquitectura tiene dos niveles: **Primitivos** y **Semánticos**.

## Estructura del Sistema

### Arquitectura con Tailwind v4.1

Los tokens están definidos en `/styles/globals.css` usando la directiva `@theme` de Tailwind v4.1, lo que permite una integración nativa y automática con el sistema de utilidades de Tailwind.

```css
@import "tailwindcss";

@theme {
  --color-primitive-blue-800: #001c56;
  --color-text-primary: var(--color-primitive-blue-800);
}
```

### 1. Tokens Primitivos

Los tokens primitivos son valores base que **NO deben usarse directamente** en el HTML. Se definen con el prefijo `primitive-`.

#### Categorías de Primitivos:

**Colores** - Paleta base con nomenclatura descriptiva:
```css
--color-primitive-black: #000000;
--color-primitive-blue-800: #001c56;
--color-primitive-yellow-500: #ddff00;
```

**Espaciados** - Sistema consistente (xs → 9xl):
```css
--spacing-primitive-xs: 10px;
--spacing-primitive-9xl: 100px;
```

**Radios** - Tamaños de border-radius:
```css
--radius-primitive-sm: 8px;
--radius-primitive-xl: 20px;
```

**Tipografía** - Tamaños, pesos, alturas de línea y familias:
```css
--font-size-primitive-xs: 14px;
--font-weight-primitive-medium: 500;
--line-height-primitive-tight: 1.109;
--font-family-primitive-inter: 'Inter', sans-serif;
```

### 2. Tokens Semánticos

Los tokens semánticos son los que **deben usarse en el HTML**. Mapean los primitivos a contextos específicos de uso.

#### Categorías de Semánticos:

**Marca**:
```css
--color-brand-primary: var(--color-primitive-yellow-500);
--color-brand-secondary: var(--color-primitive-blue-800);
```

**Superficies**:
```css
--color-surface-background
--color-surface-header
--color-surface-section-primary
--color-surface-card
```

**Texto**:
```css
--color-text-primary
--color-text-secondary
--color-text-inverse
--color-text-brand
```

**Botones**:
```css
--color-button-primary-bg
--color-button-primary-text
--color-button-secondary-border
--color-button-icon
```

**Layout**:
```css
--size-header-height: 66px;
--size-card-width: 237px;
--size-icon-sm: 18px;
```

## Temas con Tailwind v4.1

Tailwind v4.1 ofrece soporte nativo para temas con la clase `.dark` y `prefers-color-scheme`.

### Configuración de Dark Mode

```css
/* Preferencia del sistema */
@media (prefers-color-scheme: dark) {
  @theme {
    --color-surface-background: var(--color-primitive-black);
    --color-text-primary: var(--color-primitive-yellow-300);
  }
}

/* Override manual */
.dark {
  --color-surface-background: var(--color-primitive-black);
  --color-text-primary: var(--color-primitive-yellow-300);
}
```

### Toggle Theme en JavaScript Vanilla

```javascript
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  const theme = isDark ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}

// Inicializar al cargar
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }
}

document.addEventListener('DOMContentLoaded', initTheme);
```

## Uso en HTML

### Con Clases de Tailwind + Variables CSS

Tailwind v4.1 permite usar variables CSS directamente en las clases:

```html
<!-- ❌ Incorrecto - No usar primitivos directamente -->
<div class="text-[var(--color-primitive-blue-800)]">
  Texto
</div>

<!-- ✅ Correcto - Usar tokens semánticos -->
<div class="text-[var(--color-text-primary)]">
  Texto
</div>
```

### Combinando Tailwind y Variables

```html
<section class="w-full overflow-hidden py-16 bg-[var(--color-surface-section-primary)]">
  <h2 class="font-semibold text-[var(--color-text-primary)]"
      style="font-size: var(--font-size-primitive-2xl); line-height: var(--line-height-primitive-loose)">
    Título
  </h2>
</section>
```

### Clases de CSS Personalizadas

Para componentes reutilizables, define clases en `globals.css`:

```css
.nav-link {
  font-size: var(--font-size-primitive-xs);
  color: var(--color-text-primary);
  transition: opacity 0.2s;
}

.nav-link:hover {
  opacity: 0.7;
}
```

```html
<a href="#home" class="nav-link">Home</a>
```

### Patrones Recomendados

**Layout y espaciado**: Usar clases de Tailwind cuando sea posible
```html
<div class="flex items-center gap-4 px-8 py-16">
```

**Colores del sistema de diseño**: Usar variables CSS
```html
<div class="bg-[var(--color-surface-card)] text-[var(--color-text-primary)]">
```

**Tamaños específicos del diseño**: Usar style inline con variables
```html
<div style="height: var(--size-header-height)">
```

## Ventajas de Tailwind v4.1 sin React

1. **Sin dependencias**: HTML, CSS y JavaScript puros
2. **Integración nativa**: Los tokens se integran directamente con Tailwind
3. **Mejor rendimiento**: Sin overhead de frameworks
4. **Dark mode nativo**: Soporte automático con `prefers-color-scheme`
5. **Sintaxis moderna**: Uso de `@theme` para definir tokens
6. **Sin configuración extra**: No requiere `tailwind.config.js` para tokens básicos
7. **Fácil debugging**: Inspección directa del DOM

## Estructura de Archivos

```
/
  index.html          # Página principal con todo el HTML
  main.js             # JavaScript vanilla para interactividad
  /styles
    globals.css       # Todos los tokens y estilos de Tailwind v4.1
  /imports
    (SVGs y assets)   # Assets importados de Figma
```

## Interactividad con JavaScript Vanilla

### Theme Switcher

```javascript
// Inicializar tema desde localStorage
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }
}

// Toggle entre light y dark
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
```

### Carrusel de Servicios

```javascript
let currentSlide = 0;

function nextSlide() {
  const maxSlides = Math.ceil(services.length / 3) - 1;
  currentSlide = currentSlide >= maxSlides ? 0 : currentSlide + 1;
  updateCarousel();
}

function updateCarousel() {
  const carousel = document.getElementById('services-carousel');
  const offset = currentSlide * (237 + 12) * 3; // card width + gap
  carousel.style.transform = `translateX(-${offset}px)`;
}
```

### Smooth Scroll

```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
```

## Convenciones de Nomenclatura

### Primitivos
- `--{category}-primitive-{name}-{variant}`
- Ejemplos: `--color-primitive-blue-800`, `--spacing-primitive-xl`

### Semánticos
- `--{category}-{context}-{property}`
- Ejemplos: `--color-button-primary-bg`, `--color-text-inverse`

### Clases de CSS
- Usar nombres descriptivos en kebab-case
- Ejemplos: `.nav-link`, `.service-card`, `.carousel-btn`

### Categorías de Variables

| Categoría | Prefijo | Ejemplo |
|-----------|---------|---------|
| Colores | `--color-*` | `--color-text-primary` |
| Espaciado | `--spacing-*` | `--spacing-primitive-xl` |
| Tamaños | `--size-*` | `--size-header-height` |
| Radios | `--radius-*` | `--radius-primitive-lg` |
| Fuentes | `--font-*` | `--font-size-primitive-xl` |
| Líneas | `--line-height-*` | `--line-height-primitive-snug` |

## Diferencias entre Light y Dark

### Light Theme
```css
--color-surface-background: #c6cfff;  /* Azul claro */
--color-text-primary: #001c56;         /* Azul oscuro */
--color-button-icon: #004cc6;          /* Azul */
--color-state-active: #101111;         /* Gris oscuro */
```

### Dark Theme
```css
--color-surface-background: #000000;   /* Negro */
--color-text-primary: #cee10a;         /* Amarillo-verde */
--color-button-icon: #ddff00;          /* Amarillo brillante */
--color-state-active: #bef0e0;         /* Verde agua */
```

## Extensión del Sistema

Para agregar nuevos tokens en Tailwind v4.1:

1. **Agregar primitivos** en `@theme`:
```css
@theme {
  --color-primitive-purple-500: #8b5cf6;
}
```

2. **Mapear a semánticos**:
```css
@theme {
  --color-accent-highlight: var(--color-primitive-purple-500);
}
```

3. **Definir variante dark** si es necesario:
```css
.dark {
  --color-accent-highlight: var(--color-primitive-purple-300);
}
```

4. **Crear clase CSS si es reutilizable**:
```css
.highlight-badge {
  background-color: var(--color-accent-highlight);
  padding: 8px 16px;
  border-radius: var(--radius-primitive-sm);
}
```

## Debugging y DevTools

### Inspeccionar Variables CSS

En las DevTools del navegador:

```javascript
// En la consola del navegador
getComputedStyle(document.documentElement)
  .getPropertyValue('--color-text-primary')
```

### Toggle Manual de Temas

```javascript
// En la consola del navegador
document.documentElement.classList.toggle('dark')
```

### Ver todos los tokens activos

```javascript
// En la consola
const styles = getComputedStyle(document.documentElement);
const tokens = Array.from(document.styleSheets)
  .flatMap(sheet => Array.from(sheet.cssRules))
  .filter(rule => rule.selectorText === ':root' || rule.selectorText === '.dark')
```

## Best Practices

### ✅ Hacer:

1. **Usar tokens semánticos** en todo el HTML
2. **Combinar Tailwind utilities con variables CSS** para flexibilidad
3. **Crear clases CSS** para componentes reutilizables
4. **Usar `class`** para layout y `style` para valores específicos del diseño
5. **Mantener consistencia** entre light y dark themes
6. **Comentar código JavaScript** para facilitar mantenimiento
7. **Usar event delegation** para eventos dinámicos

### ❌ Evitar:

1. **Valores hardcodeados** en el HTML
2. **Usar primitivos directamente** en la UI
3. **Inline styles** para todo (usar clases CSS cuando sea repetitivo)
4. **JavaScript inline** en atributos HTML
5. **Estilos globales** que sobrescriban tokens sin necesidad

## Componentes Incluidos

### HTML Structure

- ✨ **Header**: Navegación responsiva con theme switcher
- 🎯 **Hero**: Sección hero con gradiente dinámico y overlay
- 🏢 **Brands**: Sección de logos de colaboradores
- 🎨 **Services**: Carrusel interactivo con navegación
- 🖼️ **Gallery**: Galería con overlay semitransparente
- 🌓 **Theme Switcher**: Toggle entre light/dark mode

### JavaScript Features

- 🔄 **Theme persistence**: Guarda preferencia en localStorage
- 🎠 **Auto-advance carousel**: Avanza automáticamente cada 5s
- 🖱️ **Interactive dots**: Click en dots para navegar carrusel
- ⬆️ **Smooth scroll**: Navegación suave entre secciones
- 🎨 **Dynamic icon switching**: Iconos cambian según tema activo

## Performance Tips

1. **Lazy loading de imágenes**:
```html
<img src="image.jpg" loading="lazy" alt="Description">
```

2. **Optimizar eventos**:
```javascript
// Debounce para resize events
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Tu código aquí
  }, 250);
});
```

3. **Usar CSS transforms** para animaciones (mejor performance):
```css
.carousel {
  transition: transform 0.3s ease;
}
```

## Navegadores Soportados

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+

### Características Requeridas:
- CSS Variables (Custom Properties)
- CSS Grid & Flexbox
- ES6 JavaScript
- LocalStorage API
- classList API

---

**Stack**: HTML5 + CSS3 (Tailwind v4.1) + JavaScript Vanilla  
**Versión**: Tailwind CSS v4.1  
**Última actualización**: 2026
