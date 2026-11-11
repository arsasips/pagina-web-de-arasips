---
tipo: decisiones
estado: vigente
creado: 2026-10-29
actualizado: 2026-11-11
tags: [decisiones]
fuentes: ["../AGENTS.md", "[[documentos-y-activos]]", "Propietario, respuestas en conversación 2026-11-06"]
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

## 2026-11-06 — Recordar preguntas pendientes al comenzar la Etapa 2
- **Confirmado por el propietario:** posponer las preguntas pendientes 2–5 del plan hasta comenzar la Etapa 2 y recordárselas entonces.
- **Motivo:** el propietario prefiere responderlas durante esa etapa; conservarlas como pendientes sin bloquear el avance de la wiki.

## 2026-11-11 — Usar una sede activa para los datos de contacto
- **Confirmado por el propietario:** los dos números de sede reciben WhatsApp; los servicios cambian según la sede. Las respuestas detalladas sobre misión/equipo, actividades y privacidad se compartirán más adelante.
- **Decisión de implementación:** pedir selección de sede al ingresar, conservarla en el navegador y permitir cambiarla de forma visible. Dirección, horario y enlaces principales de contacto siguen la sede elegida; la vista “Sedes” actualiza la selección global.
- **Motivo:** evita dirigir consultas al número de la otra ubicación y mostrar horarios incorrectos, sin afirmar aún la distribución específica de servicios.
- **Fuentes:** respuesta del propietario en conversación 2026-11-11; [[empresa]], [[plan-de-mejora]].

## 2026-11-11 — Usar la foto de fachada de Valledupar
- **Confirmado por el propietario:** `Docs/.../CARPETA NUEVO/FACHADA.jpeg` corresponde a la sede Valledupar y debe usarse como fondo.
- **Decisión de implementación:** preservar el original y copiar el archivo a `public/images/sede-valledupar-fachada.jpeg` para la página; conectarlo con el visual principal y las vistas de esa sede.
- **Fuente:** propietario, respuesta en conversación 2026-11-11; [[documentos-y-activos]].

## 2026-11-11 — Usar la fachada de Atánquez como fondo
- **Confirmado por el propietario:** `Docs/.../FACHADA SEDE ATANQUE.jpeg` es la fachada de Atánquez y debe usarse para esa sede.
- **Decisión de implementación:** preservar el original y usar una copia técnica en `public/images/sede-atanquez-fachada.jpeg`; la portada y las vistas por sede muestran la imagen correspondiente a la selección activa.
- **Fuente:** propietario, respuesta en conversación 2026-11-11; [[documentos-y-activos]].
