---
tipo: plan
estado: borrador-pendiente-de-validacion
creado: 2026-11-06
actualizado: 2026-11-06
tags: [landing, mejoras, ARSAS]
fuentes: ["../PLAN DE MEJORA/25-centro-de-rehabilitacion-y-educacion-especial-arsas-ips-sas/plan-mejoras.md", "../PLAN DE MEJORA/25-centro-de-rehabilitacion-y-educacion-especial-arsas-ips-sas/validacion-con-cliente.md", "[[estado-del-proyecto]]", "[[empresa]]", "[[documentos-y-activos]]"]
---

# Plan de mejora de la landing ARSAS IPS

Este plan adapta el checklist recibido al código que existe y a las fuentes revisadas. Los datos que se contradicen o no tienen autorización permanecen **pendientes**. Se trabaja una etapa por vez; no se publica ni se envían datos reales durante pruebas.

## Lo que encontramos

- **Confirmado:** la web es una aplicación React + TypeScript + Vite con inicio, servicios, sedes, profesionales, citas y portal. Hay dos sedes y botones/enlaces de WhatsApp distintos en el código.
- **Confirmado por el propietario (2026-11-06):** nombre informado, NIT `824003324-4`, domicilio empresarial Carrera 17 # 13B bis-14, barrio Alfonso López, y lista general de ocho servicios. Ciudad/sede del domicilio, asignación de servicios y condiciones EPS/particulares pendientes.
- **Confirmado por el propietario (2026-11-06):** Atánquez corresponde a Carrera 4 # 6-52, horario lunes a jueves 7:30 a. m.–12:00 p. m. y 1:00–4:00 p. m., viernes 7:00 a. m.–3:00 p. m., teléfono 322 499 3463. Falta confirmar si también es WhatsApp.
- **Confirmado por el propietario (2026-11-06):** Valledupar corresponde a Carrera 17 # 13B bis-14, barrio Alfonso López. Horario: lunes y martes 7:00 a. m.–12:30 p. m. y 2:00–5:00 p. m.; miércoles a viernes 7:00 a. m.–12:00 p. m. y 2:00–5:00 p. m. Teléfono/WhatsApp y Maps pendientes.
- **Pendiente:** el horario anterior del código no coincide con el horario informado. El teléfono sí coincide con el número que el código asigna a Atánquez, pero no basta por sí solo para confirmar la asignación.
- **Observado:** el logo y la foto principal usan enlaces externos de Google que fallan en la vista local revisada. Ambas tarjetas de sede reutilizan esa foto. Las fotos de perfiles son de Unsplash y no prueban la identidad de profesionales reales.
- **Pendiente de validar:** los nombres, reseñas, títulos, registros y horarios de profesionales del código no están respaldados por las fuentes empresariales revisadas; tratarlos como demostrativos hasta confirmación.
- **Confirmado en el código:** no hay testimonios iniciales cargados. La sección se oculta si la lista está vacía, aunque sigue existiendo una opción local para compartir testimonios.
- **Observado:** el pie incluye enlaces genéricos a Facebook e Instagram, no a perfiles específicos de ARSAS.
- **Pendiente:** el material visual propio de `Docs/` incluye fotos de fachada, piezas gráficas, actividades con adultos y menores y videos; no están confirmados todos los lugares, fechas ni consentimientos. No usar imágenes de personas/menores hasta confirmar autorización.
- **Pendiente:** misión/visión aprobadas, servicios por sede, condiciones para particulares, enlaces Maps, redes oficiales, testimonios autorizados y datos del responsable de privacidad.

## Resultado del Paso 1 · Material por sede

### Valledupar

- **Confirmado por el propietario:** dirección Carrera 17 # 13B bis-14, barrio Alfonso López, y horario registrado en [[empresa]].
- **Material disponible:** el logo y la paleta institucional son comunes a la empresa. `Docs/Soportes de contenido digital ARSAS IPS-20261029T193507Z-1-001/Soportes de contenido digital ARSAS IPS/CARPETA NUEVO/FACHADA.jpeg` muestra una fachada, pero no está identificada como Valledupar; no atribuirla a esta sede todavía. Hay piezas gráficas de servicios y material de actividades, pero no se ha asociado cada pieza a esta sede.
- **Falta:** una foto de fachada/instalaciones confirmada como Valledupar, teléfono/WhatsApp, enlace Maps, servicios que presta esta sede y permisos específicos para fotos/videos con personas.

### Atánquez

- **Confirmado por el propietario:** sede Atánquez en Carrera 4 # 6-52, teléfono 322 499 3463 y horario registrado en [[empresa]]. El teléfono como canal de WhatsApp está pendiente de confirmación.
- **Material disponible:** `Docs/Soportes de contenido digital ARSAS IPS-20261029T193507Z-1-001/Soportes de contenido digital ARSAS IPS/FACHADA SEDE ATANQUE.jpeg` muestra una fachada rotulada ARSAS y es el único archivo visual nombrado por sede. También hay fotos de actividades comunitarias, varias con menores, y videos.
- **Falta:** enlace Maps, confirmar si el teléfono es WhatsApp, identificar cuáles fotos/videos corresponden a Atánquez, fechas y descripción de actividades, y confirmar autorización de cada material (incluido acudiente para menores).

### Material compartido y hallazgos en la página

- `LOGO.jpeg` y `PALETA DE COLORES.jpeg` son activos corporativos compartidos; revisar calidad y aprobación para el sitio antes de copiarlos a `public/`.
- Hay 17 imágenes JPEG/PNG inventariadas visualmente: fachadas, piezas de servicios, actividades y capturas de referencia. Las capturas de `sesion 2` son referencias, no fotos para publicar. El DOCX de membrete contiene cuatro imágenes incrustadas pero no fue posible previsualizarlo; los 23 videos aún no se reprodujeron.
- En el sitio actual, los logos remotos no cargan y la imagen de portada remota no está acreditada como foto de ARSAS; las tarjetas de ambas sedes reutilizan esa imagen. Las fotos de perfiles vienen de Unsplash (stock), no demuestran la identidad del personal. Los nombres, credenciales y reseñas de perfiles quedan sin validar.
- **Testimonios:** el código actual no precarga testimonios de muestra y oculta su sección cuando no hay entradas. No se encontraron testimonios empresariales aprobados en el catálogo revisado.
- **Pendiente:** la oferta general que informó el propietario no está distribuida por sede; tampoco se confirmaron misión/visión, atención a particulares, redes oficiales ni testimonios autorizados.

## Preguntas para cerrar la validación

1. **Parcialmente respondida:** direcciones y horarios de ambas sedes confirmados; queda por confirmar si 322 499 3463 también es WhatsApp de Atánquez, y faltan teléfono/WhatsApp de Valledupar y enlaces Maps de ambas.
2. ¿Cómo se reparten los ocho servicios entre las sedes? ¿Atienden particulares además de EPS y qué deben hacer para pedir información?
3. Queda pendiente para cuando la tengas: misión/visión aprobadas y perfiles profesionales vigentes y autorizados.
4. Entiendo que respondiste que sí hay autorización para material de actividades. ¿Incluye cada foto/video y, si salen menores, autorización de acudiente? ¿Cada cuánto son las actividades y cuál es la próxima fecha confirmada?
5. Para cerrar: ¿cuál es el correo de privacidad, las URL de redes oficiales y hay testimonios reales autorizados? El nombre y NIT ya quedaron registrados como informados por ti.

## Etapas

### Etapa 0 · Preparar el trabajo y conservar una versión

- Revisar el estado de Git antes de cada cambio; mantener el ZIP recibido y los originales de `Docs/` intactos.
- **Skills identificadas:** `computer-use` está disponible en el entorno para revisar una vista del navegador; `seo-organico-ia` y `tratamiento-datos-landing` vienen en ZIP en la carpeta del plan, todavía no instaladas; `emil-design-eng`, `mobile-native`, `break-ui` e `impeccable` se mencionan en las instrucciones, pero no están presentes localmente.
- Si se aprueba su instalación, instalar solo las dos skills incluidas localmente; las cuatro referenciadas externamente requieren obtenerlas de sus fuentes oficiales y revisarlas antes de usarlas. No hacen falta instalaciones para corregir contenidos o probar compilación.
- **Criterio de cierre:** respaldo/versionado identificable y herramientas disponibles documentadas. No marcar completado antes de verificarlo.

### Etapa 1 · Validar la información del negocio (bloqueante)

- Resolver las cinco preguntas de validación y registrar las respuestas confirmadas en [[empresa]] y [[decisiones]].
- Comparar con nuevos originales que se agreguen a `Docs/`; conservar versiones previas y documentar contradicciones.
- **Criterio de cierre:** datos de ambas sedes, oferta y autorizaciones distinguibles entre confirmado y pendiente.

### Etapa 2 · Corregir datos de contacto por sede

- Cuando se confirmen, actualizar dirección, horario, WhatsApp, teléfono y Maps en el contenido centralizado y en todas las zonas visibles (inicio, sedes, pie, preguntas frecuentes y accesos de contacto).
- Asegurar que la selección/cambio de sede mantenga juntos todos sus datos sin cruces y que la sede elegida se recuerde de manera comprensible.
- **Criterio de cierre:** enlaces y datos coinciden entre toda la landing y se abren a la sede correcta.

### Etapa 3 · Sustituir activos de muestra por identidad y fotos propias

- Preparar el logo de `Docs/` para web y reemplazar el logo externo roto una vez aprobada su versión.
- Elegir fotos reales identificadas como Valledupar o Atánquez para portada y tarjetas. No publicar retratos ni escenas con personas/menores sin autorización comprobada.
- **Criterio de cierre:** no hay imágenes externas rotas ni fotos de stock presentadas como equipo o sedes reales.

### Etapa 4 · Alinear oferta, misión y visión

- Agregar misión/visión solo desde textos aprobados.
- Revisar servicios por sede y la atención a particulares/EPS; retirar o corregir afirmaciones clínicas y comerciales sin fuente aprobada.
- **Criterio de cierre:** cada servicio y condición está respaldado y etiquetado por sede, sin promesas de resultados.

### Etapa 5 · Revisar perfiles profesionales

- Confirmar nombre, rol/título, credenciales, sede, reseña, foto y autorización de publicación de cada perfil existente.
- Cambiar «especialistas» por «profesionales» en los textos de interfaz conforme a la preferencia del plan validado.
- **Criterio de cierre:** solo perfiles confirmados; mismo formato y sin fotos de stock que parezcan retratos reales.

### Etapa 6 · Actividades comunitarias de Atánquez

- Incorporar únicamente actividades realizadas documentadas y futuras fechas confirmadas por separado.
- Usar imágenes/videos solo con autorización; no reproducir videos automáticamente ni con sonido.
- **Criterio de cierre:** fechas y frecuencia entendibles y material publicable autorizado.

### Etapa 7 · Testimonios, mapas y redes

- Mantener oculta la sección de testimonios si no hay testimonios reales autorizados.
- Sustituir redes genéricas por enlaces oficiales confirmados; añadir Maps de ambas sedes.
- **Criterio de cierre:** cada enlace se abre a su destino real y no quedan ejemplos.

### Etapa 8 · Protección de datos (bloqueante antes de captar datos reales)

- Usar la skill `tratamiento-datos-landing` después de instalarla desde el ZIP local y revisar sus referencias.
- Inventariar campos, almacenamiento local, mensajes WhatsApp y terceros; la web contiene formularios de cita con información personal y de salud. No hacer envíos reales en pruebas.
- Redactar borrador con datos confirmados, conservarlo en `Docs/` y solicitar revisión profesional, especialmente por datos de salud y menores. No publicar con campos `[COMPLETAR]` ni presentar el borrador como asesoría legal.
- **Criterio de cierre:** revisión de responsable y canal de privacidad; aviso y controles implementados y comprobados en formularios/WhatsApp.

### Etapa 9 · Pulido visual y uso en móvil

- Revisión institucional cercana con identidad aprobada; comprobar jerarquía de sedes, legibilidad, controles táctiles, teclado, contraste y textos largos.
- Usar `computer-use` para inspección visual disponible. Si se instalan skills de diseño/móvil, emplearlas en el alcance descrito por el checklist; no cambiar colores ni textos sin aprobación.
- **Criterio de cierre:** revisión visual de móvil y escritorio sin desbordes ni controles difíciles de usar.

### Etapa 10 · SEO básico y revisión final

- Revisar título, descripción, textos alternativos, estructura, contenido renderizado y datos locales confirmados con `seo-organico-ia` cuando se instale desde el ZIP.
- Compilar y ejecutar las comprobaciones existentes. Probar localmente los enlaces de cada sede con datos ficticios y sin transmitirlos a terceros; pruebas reales de recepción requieren un canal autorizado.
- **Criterio de cierre:** informar por separado lo compilado, revisado visualmente, probado funcionalmente y publicado. La publicación queda fuera de este plan hasta contar con autorización aplicable.

## Siguiente paso

Al comenzar la Etapa 2, recordar las preguntas pendientes 2–5 al propietario, según pidió el 2026-11-06. Antes de modificar datos de contacto, confirmar los teléfonos/WhatsApp y Maps que aún faltan. Véanse [[pendientes]], [[empresa]] y [[documentos-y-activos]].
