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

## [2026-11-11] etapa | Paso 2: selección global de sede
- Confirmados por el propietario los WhatsApp de ambas sedes y que los servicios varían por sede; lo no especificado queda pendiente en [[empresa]] y [[plan-de-mejora]].
- Implementados selector inicial, cambio persistente de sede, sincronización de la vista Sedes, contactos y horarios por selección; corregidos datos anteriores en preguntas frecuentes.
- `npm run lint` y `npm run build` pasan. No se pudo revisar visualmente: el navegador integrado no conecta con el servidor local.
- No se realizó publicación ni envío de mensajes. Enlaces de Maps y distribución de servicios siguen pendientes.

## [2026-11-11] soporte | Recuperar la vista previa local
- Diagnóstico: procesos Vite anteriores de esta carpeta ocupaban 3000/3001 sin responder, por eso el navegador esperaba y los intentos adicionales cambiaban de puerto o fallaban.
- Detenidos solo los dos procesos verificados como Vite de este proyecto; levantada una instancia limpia en 127.0.0.1:3000.
- Comprobación HTTP local a http://127.0.0.1:3000/ respondió 200. No se completó revisión visual desde navegador.

## [2026-11-11] activo | Fachada de Valledupar
- El propietario identificó `Docs/.../CARPETA NUEVO/FACHADA.jpeg` como foto de la sede Valledupar e indicó usarla como fondo.
- Revisada visualmente; copiada sin alterar a `public/images/sede-valledupar-fachada.jpeg`. El sitio la usa en el visual principal, la tarjeta y el detalle de Valledupar. Original conservado en Docs.
- Actualizados [[documentos-y-activos]], [[estado-del-proyecto]], [[plan-de-mejora]] y [[decisiones]].

## [2026-11-11] activo | Fachada de Atánquez
- A petición del propietario, revisada visualmente `Docs/.../FACHADA SEDE ATANQUE.jpeg` y asignada a Atánquez.
- Copiada sin alterar a `public/images/sede-atanquez-fachada.jpeg`; conectada a la portada dinámica, tarjeta y detalle de Atánquez. Original conservado en Docs.
- Retirado el enlace de fachada genérica externa. Actualizados [[documentos-y-activos]], [[estado-del-proyecto]], [[plan-de-mejora]] y [[decisiones]].

## [2026-11-11] verificación | Fondos de ambas sedes
- Revisada la página en el navegador local de escritorio; las dos fachadas servidas desde `public/images/` aparecen cargadas con ancho natural de 1600 px.
- Confirmados `npm run lint`, `npm run build` y respuestas HTTP 200 para la página y ambos JPEG.
- No se envió información; revisión móvil aún pendiente.

## [2026-11-12] identidad visual | Azul de la paleta en títulos
- El propietario pidió usar para las letras la referencia `Docs/.../PALETA DE COLORES.jpeg`, inspeccionada visualmente; muestra una gama desde azul intenso hasta celeste.
- Se aplicó un azul derivado del tono intenso (`#0b5fb7`) a títulos y texto tipográfico destacado; se conservaron los textos explícitamente blancos sobre fondos oscuros. Original inmutable en `Docs/`.
- Actualizados [[decisiones]], [[documentos-y-activos]], [[estado-del-proyecto]], [[plan-de-mejora]] e [[index]]. No se publicó ni se modificó el original.

## [2026-11-12] oferta por sede | Cuatro especialidades en ambas ubicaciones
- El propietario confirmó que psiquiatría, fisiatría, neuropediatría y neuropsicología se ofrecen tanto en Valledupar como en Atánquez.
- El catálogo y las opciones del módulo de agendamiento ahora incluyen las cuatro para las dos sedes. No se inventaron ni añadieron datos de profesionales.
- Actualizados [[empresa]], [[pendientes]], [[decisiones]], [[estado-del-proyecto]], [[plan-de-mejora]] e [[index]]. La asignación de los demás servicios sigue pendiente.

## [2026-11-19] contenido institucional | Misión, visión y equipo de Atánquez
- Inspeccionados los originales `mision y vision .jpeg` y `PROFESIONAL - SEDE ATANQUEZ.docx` en `Docs/`; ambos originales quedaron intactos.
- Añadidas misión y visión a la página de inicio. Se omitió la mención temporal “en el 2026” de la visión original.
- Reemplazados los perfiles de muestra por la información del DOCX; incorporados los cinco retratos con autorización confirmada por el propietario. No se publicaron datos de credenciales ni horarios que el archivo no respalda. Una biografía de fisioterapia sin nombre quedó pendiente de identificación.
- Actualizados [[empresa]], [[documentos-y-activos]], [[pendientes]], [[plan-de-mejora]], [[estado-del-proyecto]] e [[index]].
- Diagnóstico de vista previa: `ERR_CONNECTION_TIMED_OUT` en el navegador integrado y acceso al socket local bloqueado en el entorno de ejecución; no se confirma un fallo de renderizado de React. Sin publicación remota.

## [2026-11-19] verificación | Contenido institucional y perfiles
- `npm run lint` pasó con `tsc --noEmit`; `npm run build` generó `dist/` correctamente, con el aviso ya conocido de Vite sobre `__dirname`.
- La vista visual sigue sin verificarse porque el navegador de vista previa no alcanza el servidor local (timeout).

## [2026-11-19] contenido institucional | Equipo profesional de Valledupar
- Inspeccionado el original `profesionales sede valledupar.docx` en `Docs/`; contiene nombres y cargos de tres profesionales y una persona administrativa, además de cuatro retratos. El propietario confirmó que los retratos están autorizados.
- Incorporados los datos y las fotos asociadas por el orden de contenido del documento al directorio de Valledupar; el original se conserva sin cambios.
- Actualizados [[empresa]], [[documentos-y-activos]], [[pendientes]], [[plan-de-mejora]], [[estado-del-proyecto]] y [[decisiones]].

## [2026-11-19] revisión | Asociación del perfil de fisioterapia en Atánquez
- Releído el orden de texto e imágenes incrustadas del DOCX: el nombre “Mayra Silva Venecia” aparece inmediatamente antes del cargo y la descripción de fisioterapia.
- Asociada la biografía de fisioterapia a su perfil; retirada la nota provisional de nombre faltante de [[empresa]], [[pendientes]] y [[plan-de-mejora]].

## [2026-11-19] verificación | Vista previa local abierta
- Confirmado por el propietario que misión y visión aplican a ambas sedes; se registró como contenido institucional compartido.
- Diagnóstico del bloqueo: el servidor iniciado en el entorno restringido no aceptaba conexiones al socket local. Se reinició Vite con escucha limitada a `127.0.0.1:3000`; el navegador abrió la página y quedó visible.
- Verificación: `npm run lint` y `npm run build` pasan; Vite conserva el aviso conocido de `__dirname`. La revisión visual se limitó al inicio en escritorio; no hubo pruebas funcionales ni publicación.

## [2026-11-19] ajuste visual | Retratos completos en el directorio
- Por solicitud del propietario, cambiada la presentación de fotos de profesionales y personal administrativo a `object-contain` para evitar que las tarjetas recorten el encuadre.
- Revisada la vista de profesionales de Valledupar en escritorio; las fotos aparecen completas. Revisión móvil aún pendiente.
- Actualizados [[decisiones]], [[estado-del-proyecto]] e [[plan-de-mejora]].

## [2026-11-19] identidad visual | Logo y paleta compartida
- Integrada la copia local public/images/arsas-logo.jpeg en el encabezado y pie compartidos por Valledupar y Atánquez; el original en Docs no se alteró.
- Aplicada paleta con azul de marca, fondos azulados suaves, naranja de acento y detalle lineal con los tonos del arcoíris del logo.
- Revisada la página local en navegador: carga logo y contenido. La revisión móvil queda pendiente; no se publicó.
- Actualizados [[documentos-y-activos]], [[estado-del-proyecto]], [[pendientes]] y [[decisiones]].
