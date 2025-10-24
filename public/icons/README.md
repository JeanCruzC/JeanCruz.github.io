# Icons Directory

Carpeta para organizar todos los archivos de iconos del sitio:

## Estructura recomendada:
- `favicon-32x32.png` - Favicon principal (32x32px)
- `favicon-192x192.png` - Favicon Android (192x192px) 
- `apple-touch-icon.png` - Icono iOS (180x180px)
- `icon-512x512.png` - Icono PWA grande
- `favicon.ico` - Favicon legacy
- `favicon.svg` - Favicon vectorial (opcional)

## Uso:
Actualizar referencias en `BaseLayout.astro` para apuntar a `/icons/` en lugar de `/gallery/`