---
tipo: registro
estado: vigente
creado: 2026-10-29
actualizado: 2026-11-11
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

## [2026-10-29] publicación | GitHub
- El usuario completó la autenticación en Git Credential Manager.
- Subido el commit `039572805697edf6bec1ce0cec120865758e7f2b` a `arsasips/pagina-web-de-arasips`, rama `main`.
- Verificado en GitHub: el último commit aparece en el repositorio y están visibles `src/` y `wiki/`; no se subieron `Docs/`, `screen.png`, `node_modules/` ni `dist/`.

## [2026-11-06] plan | análisis de carpeta de mejora ARSAS

- Revisado el checklist, su guía de skills y la lista de validación dentro de `PLAN DE MEJORA/`.
- Identificadas las skills SEO y tratamiento de datos empaquetadas localmente; las skills de diseño/móvil nombradas no están instaladas. No se instaló nada ni se modificó la landing.
- Contrastado el checklist con el código y el catálogo de `Docs/`; se anotaron diferencias de dirección/horario por sede, recursos visuales externos rotos y datos/perfiles/redes sin validar.
- Creado [[plan-de-mejora]] con etapas y preguntas pendientes; revisar respuestas antes de aplicar cambios empresariales.

## [2026-11-06] ingest | datos comerciales informados por el propietario
- Registrados nombre, NIT, domicilio empresarial y oferta general comunicados directamente por el propietario en [[empresa]].
- Registrados dirección, horario y teléfono de una ubicación sin asignarlos definitivamente a una sede; la posible relación con Atánquez queda como supuesto hasta confirmación.
- Actualizadas las preguntas pendientes del [[plan-de-mejora]]; no se cambió la landing porque faltan el contacto completo de Valledupar, la distribución de servicios y datos de privacidad.

## [2026-11-06] ingest | sedes y horarios confirmados
- Confirmado que la dirección, horario y teléfono informados primero corresponden a Atánquez; añadidos los horarios de Valledupar y su dirección a [[empresa]].
- Registrado que queda pendiente confirmar WhatsApp de Atánquez, contacto y Maps de Valledupar, y Maps de ambas sedes.
- Según preferencia del propietario, las preguntas pendientes 2–5 se recordarán al iniciar la Etapa 2; actualizado [[plan-de-mejora]] y [[decisiones]]. No se editó el sitio.

## [2026-11-06] auditoría | Paso 1 del plan de mejora
- Revisados el código de la landing y el inventario visual existente de `Docs/`; redactado el resultado por sede en [[plan-de-mejora]].
- Identificada fachada rotulada para Atánquez; la fachada restante no está asignada a Valledupar. Registrados logos remotos rotos, imagen de portada no acreditada, fotos de stock en perfiles y ausencia de testimonios precargados.
- Marcado el Paso 1 como completado en el checklist local, dejando pendientes de autorización, identificación y datos. No se modificó la página.

## [2026-11-11] revisión | Hallazgos adicionales dentro de Docs
- Reabiertos los volantes `REHABILTACION.jpeg` y `WhatsApp Image 2026-10-01 at 1.39.15 PM.jpeg`, ambas fachadas y los medios incrustados del membrete, tras la observación del propietario.
- Encontrados teléfonos, correos de sede y listas adicionales de servicios en los volantes; la fachada de Valledupar muestra su dirección; el membrete incluye una credencial profesional. Actualizados [[documentos-y-activos]], [[empresa]] y [[plan-de-mejora]].
- Corregida la nota del Paso 1; no se cambió la landing. Siguen pendientes vigencia, canal WhatsApp, distribución de servicios y permisos de publicación.
