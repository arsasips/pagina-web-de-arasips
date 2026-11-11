---
tipo: pendientes
estado: vigente
creado: 2026-10-29
actualizado: 2026-11-11
tags: [pendientes]
fuentes: ["../src/data/mockData.ts", "[[documentos-y-activos]]"]
---

# Pendientes

- **Pendiente:** horarios y direcciones ya fueron confirmados por el propietario; falta validar vigencia de teléfonos/correos del volante, canal WhatsApp, servicios por sede y condiciones EPS/particulares antes de reflejarlos en la web.
- **Pendiente:** revisar las imágenes y videos de `Docs/` individualmente y confirmar permisos de uso, especialmente si aparecen pacientes o menores.
- **Observado en móvil (390 × 844):** no se desborda horizontalmente, pero la cabecera se ve apretada y el logotipo roto ocupa varias líneas. Puede revisarse junto con la sustitución del logo.
- **Pendiente:** revisar el DOCX de membrete para extraer identidad y datos empresariales sin divulgar información privada.
- **Observado en la vista previa de escritorio:** los dos logos enlazados desde Google no cargan. Propuesta pequeña: copiar el logo local a `public/` y sustituir los enlaces externos, después de confirmar que se usará ese diseño en la landing. También puede elegirse una fachada propia de `Docs/` para reemplazar la imagen principal genérica, tras confirmar cuál corresponde a cada sede y que está autorizada.
- **Resuelto para el repositorio (2026-10-29):** retirados de los datos iniciales los registros de cita con información identificable y los testimonios no verificados. También se retiraron las identificaciones de muestra del portal y se añadió una migración local que filtra únicamente las dos claves de citas demo (`rec-001`, `rec-002`) y cuatro IDs de testimonios demo (`test-1` a `test-4`).
- **Pendiente antes de usar funciones con datos reales:** las citas y testimonios se guardan en `localStorage` sin backend ni autenticación institucional. Mantener estas funciones solo para demostración hasta que exista un destino seguro y autorizado.
- **Confirmado:** dependencias instaladas y `package-lock.json` creado. `npm run lint` y `npm run build` pasaron.
- **Confirmado:** el commit inicial ya está en el repositorio público `arsasips/pagina-web-de-arasips`, rama `main`.
- **Resuelto parcialmente (2026-11-06):** el propietario confirmó dirección y horarios de Atánquez y Valledupar. La web aún contiene valores anteriores y no se ha actualizado.
- **Pendiente:** confirmar si el teléfono 322 499 3463 de Atánquez es también su WhatsApp; pedir teléfono/WhatsApp de Valledupar y enlaces de Maps de ambas sedes.
- **Pendiente:** confirmar WhatsApp/teléfonos actuales, perfiles y credenciales, redes, textos de misión/visión, servicios por sede y condiciones para particulares.
- **Pendiente:** identificar sede/fecha y autorización de fotos y videos de `Docs/`, con atención a personas menores; confirmar enlaces Maps y redes oficiales.
- **Pendiente:** contestar las cinco preguntas de [[plan-de-mejora]] antes de implementar cambios empresariales.
- **Confirmado por el propietario (2026-11-06):** nombre de empresa, NIT, domicilio empresarial informado, lista general de servicios y un conjunto de datos de dirección/horario/teléfono. La asignación a sedes y el segundo conjunto de contacto requieren aclaración; detalles en [[empresa]].
- **Pendiente:** para usar imágenes de actividades, precisar el alcance del “sí” recibido: autorización por pieza y permisos de acudientes cuando aparecen menores; confirmar frecuencia y próxima fecha.
- **Pendiente:** correo de privacidad, dirección/sede y contacto de Valledupar, enlaces de Maps/redes y existencia de testimonios autorizados.
- **Pendiente por entrega posterior del propietario:** misión, visión y datos aprobados del equipo profesional.
- **Preferencia/instrucción confirmada (2026-11-06):** recordar las preguntas pendientes 2–5 de [[plan-de-mejora]] al comenzar la Etapa 2; el propietario las responderá entonces.
- **Pendiente del Paso 1:** asignar fotos/videos de actividades a sede y fecha, y confirmar autorizaciones antes de publicarlos. Las fachadas de Valledupar y Atánquez están identificadas en `Docs/`.
- **Pendiente:** confirmar vigencia de teléfonos/correos hallados en el volante, si los números reciben WhatsApp y qué servicios del material gráfico corresponden a cada sede.
- **Pendiente:** confirmar vigencia y autorización del dato profesional visible en una imagen del membrete antes de crear un perfil público.
