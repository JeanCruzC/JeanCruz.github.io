# Páginas de Proyectos

## Estructura

Cada proyecto debe tener su propia página dedicada siguiendo este patrón:

```
src/pages/proyectos/[nombre-proyecto].astro
```

## Proyectos que necesitan página:

- ✅ **tinka-analytics.astro** - COMPLETADO
- ⏳ **control-tower-wfm.astro** - PENDIENTE
- ⏳ **generador-turnos.astro** - PENDIENTE
- ⏳ **forecast-multipais.astro** - PENDIENTE
- ⏳ **playbook-cx.astro** - PENDIENTE

## Template a seguir

Cada página debe incluir estas secciones:

1. **Header del proyecto**
   - Título
   - Tagline/descripción corta
   - Tags de tecnologías

2. **Descripción del Proyecto**
   - Contexto y objetivo
   - Problema que resuelve

3. **Tecnologías y Arquitectura**
   - Backend & Data
   - Frontend & Visualización
   - Herramientas específicas

4. **Funcionalidades Principales**
   - 4-6 features clave con iconos
   - Descripción de cada una

5. **Desafíos y Soluciones**
   - 2-3 desafíos técnicos
   - Cómo se resolvieron

6. **Demo/Visualización**
   - Iframe embebido (si aplica)
   - Screenshots
   - Enlaces externos

7. **Resultados e Impacto**
   - Métricas
   - Logros
   - Beneficios

8. **CTA Final**
   - Botón de contacto
   - Link a más proyectos

## Actualizar data/projects.ts

Cuando crees una nueva página, actualiza el enlace en `src/data/projects.ts`:

```typescript
links: [
  { label: "Ver Proyecto Completo", href: "/proyectos/nombre-proyecto/" }
]
```

## Referencia

Usa `tinka-analytics.astro` como plantilla base para mantener consistencia visual y estructura.
