---
tipo: decisiones
estado: vigente
creado: 2026-10-29
actualizado: 2026-10-29
tags: [decisiones]
fuentes: ["../AGENTS.md", "[[documentos-y-activos]]"]
---

# Decisiones

## 2026-10-29 — Conservar el proyecto y el ZIP originales
- **Confirmado:** mantener el código extraído que ya existe en la raíz, junto con el ZIP original bajo `Docs/`; las entradas del ZIP corresponden a la aplicación presente.
- **Motivo:** evita duplicar o sobrescribir trabajo y conserva la fuente recibida.

## 2026-10-29 — Excluir originales empresariales de Git
- **Confirmado:** ignorar `Docs/` en `.gitignore` porque puede contener archivos privados y originales empresariales.
- **Motivo:** no subir inadvertidamente fotos, documentos o información privada al repositorio.

## 2026-10-29 — Contenido de negocio permanece provisional hasta validar
- **Confirmado:** textos y datos existentes en el código no se presentan como aprobados por el solo hecho de existir. Referencia: `src/data/mockData.ts`.
- **Motivo:** parte del contenido tiene marcas explícitas de ejemplo o datos de prueba.

## 2026-10-29 — Alinear esbuild con Vite 8
- **Confirmado:** se cambió la dependencia directa de `esbuild` en `package.json` de `^0.25.0` a `^0.28.0` y se generó `package-lock.json`.
- **Fuente:** el primer `npm install` falló porque Vite 8.3.5 requiere un peer opcional de esbuild `^0.27.0 || ^0.28.0`, incompatible con 0.25.
- **Motivo:** permitir una instalación reproducible y las comprobaciones locales sin forzar resolución incompatible.

## 2026-10-29 — No versionar muestras con datos de pacientes
- **Confirmado:** eliminar los registros de cita, identificaciones de búsqueda de ejemplo y testimonios no validados del contenido inicial. La aplicación migra solo las entradas de demostración conocidas que ya estaban en `localStorage`; no elimina otros registros.
- **Confirmado:** excluir `screen.png` del repositorio porque contiene las muestras de la landing; el archivo original permanece en la carpeta de trabajo.
- **Motivo:** preparar el proyecto para repositorio remoto evitando divulgar datos potencialmente privados o testimonios no autorizados.
