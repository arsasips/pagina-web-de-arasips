---
tipo: registro
estado: vigente
creado: 2026-10-29
actualizado: 2026-10-29
tags: [log]
fuentes: ["[[index]]", "[[documentos-y-activos]]"]
---

# Registro cronológico

## [2026-10-29] arranque | ARSAS IPS
- Inspeccionado el proyecto React + TypeScript + Vite existente, el ZIP fuente dentro de `Docs/`, y los materiales empresariales disponibles.
- Confirmada visualmente la imagen `LOGO.jpeg` y la paleta azul. El catálogo registra fotos y videos pendientes de inspección individual.
- Creada la memoria inicial y excluida `Docs/` de Git por privacidad.
- No se modificó el diseño de la landing: no se recibió aún una petición concreta de cambio; se propone consultar sobre armonización de paleta o foto principal autorizada.

## [2026-10-29] configuración | Dependencias y vista previa
- Ajustada la dependencia directa de esbuild a `^0.28.0` para resolver el peer conflict con Vite 8; instalación npm completada sin consulta de auditoría en línea y generado `package-lock.json`.
- `npm run lint` y `npm run build` pasaron. Vite emitió aviso de compatibilidad por `__dirname`.
- Servidor iniciado en `http://127.0.0.1:3000/` y vista de escritorio abierta. Se observó que los dos logos remotos fallan; las imágenes locales ofrecen alternativas, sujetas a selección/autorización. No se probaron formularios ni se revisó móvil.
- No hay commit porque falta identidad Git local/global; se necesita nombre y correo para atribuirlo sin cambiar la configuración global.
- El membrete DOCX tiene imágenes pero ningún texto extraíble; no se pudo renderizar por ausencia de LibreOffice.
- La hoja de contacto permitió identificar en las fotos fachadas ARSAS, piezas gráficas de servicios y actividades con menores/adultos; permisos de publicación pendientes. Inventariados los 42 archivos de `Docs/`.
- La vista móvil de 390 × 844 no tiene desbordamiento horizontal; la cabecera se percibe apretada. El CTA de agendamiento abrió el formulario sin enviar información; no hubo errores de consola.

## [2026-10-29] preparación-remota | GitHub
- Se inspeccionó el conjunto de archivos candidato: `Docs/`, `node_modules/`, `dist/` y `screen.png` quedan ignorados; `.env.example` contiene solo marcadores de posición.
- Se retiraron registros de cita identificables, accesos rápidos con documentos y testimonios no verificados. La app filtra solo las entradas de demostración conocidas de `localStorage` al iniciar.
- `npm run lint` y `npm run build` volvieron a pasar después de los cambios.
- GitHub no está conectado en esta sesión; se solicitó conectar el acceso para crear un repositorio privado en `arsasips`. No se creó ni se subió nada aún.

## [2026-10-29] commit | Repositorio proporcionado por el propietario
- Se usó el repositorio existente `arsasips/pagina-web-de-arasips` indicado por el propietario; es público y estaba vacío.
- Configurada identidad Git solo en este repositorio local con los datos facilitados.
- Creado commit inicial local en `main`; el remoto está configurado. La subida quedó esperando el inicio de sesión del usuario en Git Credential Manager.
