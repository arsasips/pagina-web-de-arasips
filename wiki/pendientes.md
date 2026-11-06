---
tipo: pendientes
estado: vigente
creado: 2026-10-29
actualizado: 2026-11-06
tags: [pendientes]
fuentes: ["../src/data/mockData.ts", "[[documentos-y-activos]]"]
---

# Pendientes

- **Pendiente:** verificar qué horarios, teléfonos, direcciones, EPS y servicios son vigentes y están autorizados para la landing; la información actual procede del código y no se corroboró contra fuentes aprobadas.
- **Pendiente:** revisar las imágenes y videos de `Docs/` individualmente y confirmar permisos de uso, especialmente si aparecen pacientes o menores.
- **Observado en móvil (390 × 844):** no se desborda horizontalmente, pero la cabecera se ve apretada y el logotipo roto ocupa varias líneas. Puede revisarse junto con la sustitución del logo.
- **Pendiente:** revisar el DOCX de membrete para extraer identidad y datos empresariales sin divulgar información privada.
- **Observado en la vista previa de escritorio:** los dos logos enlazados desde Google no cargan. Propuesta pequeña: copiar el logo local a `public/` y sustituir los enlaces externos, después de confirmar que se usará ese diseño en la landing. También puede elegirse una fachada propia de `Docs/` para reemplazar la imagen principal genérica, tras confirmar cuál corresponde a cada sede y que está autorizada.
- **Resuelto para el repositorio (2026-10-29):** retirados de los datos iniciales los registros de cita con información identificable y los testimonios no verificados. También se retiraron las identificaciones de muestra del portal y se añadió una migración local que filtra únicamente las dos claves de citas demo (`rec-001`, `rec-002`) y cuatro IDs de testimonios demo (`test-1` a `test-4`).
- **Pendiente antes de usar funciones con datos reales:** las citas y testimonios se guardan en `localStorage` sin backend ni autenticación institucional. Mantener estas funciones solo para demostración hasta que exista un destino seguro y autorizado.
- **Confirmado:** dependencias instaladas y `package-lock.json` creado. `npm run lint` y `npm run build` pasaron.
- **Confirmado:** el commit inicial ya está en el repositorio público `arsasips/pagina-web-de-arasips`, rama `main`.
- **Pendiente (2026-11-06):** validar los datos contradictorios de dirección y horarios entre `PLAN DE MEJORA/` y `src/data/mockData.ts` para ambas sedes antes de corregir la web.
- **Pendiente:** confirmar WhatsApp/teléfonos actuales, perfiles y credenciales, redes, textos de misión/visión, servicios por sede y condiciones para particulares.
- **Pendiente:** identificar sede/fecha y autorización de fotos y videos de `Docs/`, con atención a personas menores; confirmar enlaces Maps y redes oficiales.
- **Pendiente:** contestar las cinco preguntas de [[plan-de-mejora]] antes de implementar cambios empresariales.
- **Confirmado por el propietario (2026-11-06):** nombre de empresa, NIT, domicilio empresarial informado, lista general de servicios y un conjunto de datos de dirección/horario/teléfono. La asignación a sedes y el segundo conjunto de contacto requieren aclaración; detalles en [[empresa]].
- **Pendiente:** para usar imágenes de actividades, precisar el alcance del “sí” recibido: autorización por pieza y permisos de acudientes cuando aparecen menores; confirmar frecuencia y próxima fecha.
- **Pendiente:** correo de privacidad, dirección/sede y contacto de Valledupar, enlaces de Maps/redes y existencia de testimonios autorizados.
- **Pendiente por entrega posterior del propietario:** misión, visión y datos aprobados del equipo profesional.
