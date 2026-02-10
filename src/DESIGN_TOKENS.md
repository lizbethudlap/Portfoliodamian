# Sistema de Design Tokens

Este proyecto implementa un sistema completo de design tokens dividido en dos niveles: **Primitivos** y **Semánticos**.

## Estructura del Sistema

### 1. Tokens Primitivos (`/styles/tokens/primitives.css`)

Los tokens primitivos son valores base que **NO deben usarse directamente** en componentes. Representan los valores fundamentales del sistema de diseño.

#### Categorías de Primitivos:

- **Colores**: Paleta base de colores con nomenclatura descriptiva
  - Grises y neutrales: `--primitive-color-black`, `--primitive-color-gray-*`, `--primitive-color-white`
  - Azules: `--primitive-color-blue-*` (100-900)
  - Amarillos: `--primitive-color-yellow-*` (300-500)
  - Verdes: `--primitive-color-green-*`

- **Espaciados**: Sistema de espaciado consistente (xs a 9xl)
  ```css
  --primitive-spacing-xs: 10px;
  --primitive-spacing-9xl: 100px;
  ```

- **Radios de borde**: Tamaños de border-radius
  ```css
  --primitive-radius-sm: 8px;
  --primitive-radius-xl: 20px;
  ```

- **Tipografía**: Tamaños, pesos, alturas de línea y familias
  ```css
  --primitive-font-size-xs: 14px;
  --primitive-font-weight-medium: 500;
  --primitive-line-height-tight: 1.109;
  --primitive-font-family-inter: 'Inter', sans-serif;
  ```

### 2. Tokens Semánticos (`/styles/tokens/semantics.css`)

Los tokens semánticos son los que **deben usarse en los componentes**. Mapean los primitivos a contextos específicos de uso.

#### Categorías de Semánticos:

- **Marca**: Colores principales de la marca
  ```css
  --semantic-brand-primary: var(--primitive-color-yellow-500);
  --semantic-brand-secondary: var(--primitive-color-blue-800);
  ```

- **Superficies**: Colores de fondo para diferentes áreas
  ```css
  --semantic-surface-background
  --semantic-surface-header
  --semantic-surface-section-primary
  --semantic-surface-card
  ```

- **Texto**: Colores para diferentes tipos de texto
  ```css
  --semantic-text-primary
  --semantic-text-secondary
  --semantic-text-inverse
  --semantic-text-brand
  ```

- **Botones**: Estados y variantes de botones
  ```css
  --semantic-button-primary-bg
  --semantic-button-primary-text
  --semantic-button-secondary-border
  ```

## Temas

El sistema soporta dos temas: **Light** y **Dark**.

### Uso de Temas

La clase `.dark` en el elemento raíz activa el tema oscuro:

```typescript
// Toggle theme
document.documentElement.classList.toggle('dark');
```

Los tokens semánticos cambian automáticamente según el tema activo:

```css
/* Light theme (default) */
:root {
  --semantic-text-primary: var(--primitive-color-blue-800);
  --semantic-surface-background: var(--primitive-color-blue-100);
}

/* Dark theme */
.dark {
  --semantic-text-primary: var(--primitive-color-yellow-300);
  --semantic-surface-background: var(--primitive-color-black);
}
```

## Uso en Componentes

### ❌ Incorrecto (No usar primitivos directamente)
```tsx
<div style={{ color: 'var(--primitive-color-blue-800)' }}>
  Texto
</div>
```

### ✅ Correcto (Usar tokens semánticos)
```tsx
<div style={{ color: 'var(--semantic-text-primary)' }}>
  Texto
</div>
```

### Ejemplo Completo

```tsx
export function MyComponent() {
  return (
    <section 
      style={{
        backgroundColor: 'var(--semantic-surface-section-primary)',
        padding: 'var(--semantic-spacing-section-y)'
      }}
    >
      <h2 
        style={{
          fontFamily: 'var(--semantic-font-heading-secondary)',
          fontSize: 'var(--semantic-font-size-h2)',
          color: 'var(--semantic-text-primary)'
        }}
      >
        Título
      </h2>
    </section>
  );
}
```

## Ventajas del Sistema

1. **Consistencia**: Todos los componentes usan los mismos valores
2. **Mantenibilidad**: Cambios centralizados afectan todo el sistema
3. **Tematización**: Cambio de tema automático sin modificar componentes
4. **Escalabilidad**: Fácil agregar nuevos tokens o temas
5. **Semántica clara**: Los nombres describen el uso, no el valor

## Estructura de Archivos

```
/styles
  /tokens
    primitives.css    # Tokens base (NO usar directamente)
    semantics.css     # Tokens contextuales (USAR en componentes)
  globals.css         # Importa los tokens y configuración global
```

## Convenciones de Nomenclatura

### Primitivos
- `--primitive-{category}-{name}-{variant}`
- Ejemplos: `--primitive-color-blue-800`, `--primitive-spacing-xl`

### Semánticos
- `--semantic-{context}-{property}-{variant}`
- Ejemplos: `--semantic-button-primary-bg`, `--semantic-text-inverse`

## Extensión del Sistema

Para agregar nuevos tokens:

1. **Agregar primitivos** en `/styles/tokens/primitives.css`
2. **Mapear a semánticos** en `/styles/tokens/semantics.css`
3. **Definir variantes de tema** si es necesario en la clase `.dark`

## Componentes Incluidos

- `Header`: Navegación y theme switcher
- `Hero`: Sección hero con gradiente y CTA
- `Brands`: Logos de marcas colaboradoras
- `Services`: Carrusel de servicios
- `Gallery`: Galería de imágenes con overlay
- `ThemeSwitcher`: Botones para cambiar tema

Todos los componentes utilizan tokens semánticos para garantizar la consistencia visual y el soporte de temas.
