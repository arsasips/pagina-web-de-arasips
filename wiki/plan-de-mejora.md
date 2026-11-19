---
tipo: plan
estado: borrador-pendiente-de-validacion
creado: 2026-11-06
actualizado: 2026-11-19
tags: [landing, mejoras, ARSAS]
fuentes: ["../PLAN DE MEJORA/25-centro-de-rehabilitacion-y-educacion-especial-arsas-ips-sas/plan-mejoras.md", "../PLAN DE MEJORA/25-centro-de-rehabilitacion-y-educacion-especial-arsas-ips-sas/validacion-con-cliente.md", "[[estado-del-proyecto]]", "[[empresa]]", "[[documentos-y-activos]]"]
---

# Plan de mejora de la landing ARSAS IPS

Este plan adapta el checklist recibido al código que existe y a las fuentes revisadas. Los datos que se contradicen o no tienen autorización permanecen **pendientes**. Se trabaja una etapa por vez; no se publica ni se envían datos reales durante pruebas.

## Lo que encontramos

- **Confirmado:** la web es una aplicación React + TypeScript + Vite con inicio, servicios, sedes, profesionales, citas y portal. Hay dos sedes y botones/enlaces de WhatsApp distintos en el código.
- **Confirmado por el propietario (2026-11-06):** nombre informado, NIT `824003324-4`, domicilio empresarial Carrera 17 # 13B bis-14, barrio Alfonso López y lista general de ocho servicios. La dirección corresponde a Valledupar.
- **Confirmado por el propietario (2026-11-12):** psiquiatría, fisiatría, neuropediatría y neuropsicología se ofrecen en ambas sedes; la asignación de los demás servicios y las condiciones EPS/particulares siguen pendientes.
- **Confirmado por el propietario (2026-11-11):** ambos teléfonos por sede reciben WhatsApp: 322 499 3463 Atánquez y 310 560 6873 Valledupar.
- **Confirmado por el propietario (2026-11-06):** Valledupar corresponde a Carrera 17 # 13B bis-14, barrio Alfonso López. Horario: lunes y martes 7:00 a. m.–12:30 p. m. y 2:00–5:00 p. m.; miércoles a viernes 7:00 a. m.–12:00 p. m. y 2:00–5:00 p. m.
- **Encontrado en `Docs/REHABILTACION.jpeg`:** el volante incluye los números 322 499 3463 y 310 560 6873 y correos por sede. El código los enlaza a WhatsApp; el volante por sí solo no confirma que ambos números reciban WhatsApp ni que sigan vigentes. Los enlaces Maps de las dos sedes siguen pendientes.
- **Observado (histórico):** los logos externos de Google fallan en la vista local y el encabezado aún muestra un logo roto; las fachadas locales ya reemplazaron la foto de sede genérica. Los perfiles de muestra en Unsplash se reemplazaron con fotos entregadas para los directorios de ambas sedes.
- **Pendiente de validar:** vigencia de los perfiles publicados. Docs contiene además una credencial profesional individual que no se ha asociado a los perfiles y cuya publicación requiere validación.
- **Confirmado en el código:** no hay testimonios iniciales cargados. La sección se oculta si la lista está vacía, aunque sigue existiendo una opción local para compartir testimonios.
- **Observado:** el pie incluye enlaces genéricos a Facebook e Instagram, no a perfiles específicos de ARSAS.
- **Pendiente:** el material visual de `Docs/` incluye fotos de ambas fachadas, piezas gráficas, actividades con adultos y menores y videos; faltan fechas y autorizaciones de cada foto/video. No usar imágenes de personas/menores hasta confirmar autorización.
- **Pendiente:** servicios por sede, condiciones para particulares, enlaces Maps, redes oficiales, testimonios autorizados y datos del responsable de privacidad. Misión y visión ya se añadieron desde la placa institucional recibida.
- **Actualizado (2026-11-19):** recibidos `Docs/.../mision y vision .jpeg`, `Docs/.../PROFESIONAL - SEDE ATANQUEZ.docx` y `Docs/.../profesionales sede valledupar.docx`. El propietario solicitó incorporar su información y confirmó que los retratos están autorizados. Misión y visión aparecen en el inicio; el directorio incluye perfiles de ambas sedes. La visión se adaptó omitiendo la fecha 2026 de la placa. La biografía de fisioterapia se vinculó a Mayra Silva Venecia por la relación de nombre, cargo y descripción en el orden del documento.

## Resultado del Paso 1 · Material por sede

### Valledupar

- **Confirmado por el propietario:** dirección Carrera 17 # 13B bis-14, barrio Alfonso López, y horario registrado en [[empresa]].
- **Material disponible:** el logo y la paleta institucional son comunes a la empresa. `Docs/Soportes de contenido digital ARSAS IPS-20261029T193507Z-1-001/Soportes de contenido digital ARSAS IPS/CARPETA NUEVO/FACHADA.jpeg` muestra la sede de Valledupar y su aviso incluye la dirección Carrera 17 # 13B bis-14. El volante muestra el número 310 560 6873 y `arsasipsvalledupar@gmail.com`; el código asocia ese número con Valledupar. La lista de servicios del volante no especifica sede.
- **Falta:** enlace Maps, confirmar vigencia del correo y definir los servicios vigentes en Valledupar.

### Atánquez

- **Confirmado por el propietario:** sede Atánquez en Carrera 4 # 6-52, teléfono 322 499 3463 y horario registrado en [[empresa]]. El teléfono como canal de WhatsApp está pendiente de confirmación.
- **Material disponible:** `Docs/Soportes de contenido digital ARSAS IPS-20261029T193507Z-1-001/Soportes de contenido digital ARSAS IPS/FACHADA SEDE ATANQUE.jpeg` muestra la fachada de ARSAS y anuncia fisiatría, neuropsicología, fisioterapia, fonoaudiología, terapia ocupacional y psicología. El volante de rehabilitación presenta también el número 322 499 3463 y `arsasipsatanquez@gmail.com`. Hay fotos de actividades comunitarias, algunas con menores, y videos.
- **Falta:** enlace Maps, confirmar vigencia del correo, identificar las fotos/videos de actividades y sus fechas/descripciones, y confirmar autorización de cada material (incluidos acudientes para menores).

### Material compartido y hallazgos en la página

- `LOGO.jpeg` y `PALETA DE COLORES.jpeg` son activos corporativos compartidos; revisar calidad y aprobación para el sitio antes de copiarlos a `public/`.
- Hay 17 imágenes JPEG/PNG inventariadas visualmente: fachadas, piezas de servicios, actividades y capturas de referencia. Las capturas de `sesion 2` son referencias, no fotos para publicar. El DOCX contiene cuatro imágenes incrustadas, incluida una credencial profesional que podría servir de soporte para un perfil; faltan verificar vigencia y autorización. Los 23 videos aún no se reprodujeron.
- El volante de rehabilitación enumera neuropediatría, neuropsicología, psicología, fonoaudiología, terapia ocupacional y fisioterapia. El volante de salud mental enumera psiquiatría, medicina general, psicología, trabajo social, terapia ocupacional y fisioterapia. La fachada de Atánquez anuncia fisiatría, neuropsicología, fisioterapia, fonoaudiología, terapia ocupacional y psicología. Estas listas difieren de la lista general más reciente del propietario; confirmar vigencia y sede de cada servicio.
- El volante imprime 322 499 3463, 310 560 6873 y los correos `arsasipsatanquez@gmail.com` / `arsasipsvalledupar@gmail.com`. La pieza no rotula con claridad el canal WhatsApp; el código actual enlaza esos teléfonos a WhatsApp.
- Una imagen incrustada en el membrete muestra una credencial profesional de fonoaudiología. No divulgar sus datos ni crear un perfil público hasta confirmar vigencia y autorización.
- En el sitio actual, los logos remotos no cargan y la imagen de portada remota no está acreditada como foto de ARSAS; las tarjetas de ambas sedes reutilizan esa imagen. Las fotos de perfiles vienen de Unsplash (stock), no demuestran la identidad del personal. Los nombres, credenciales y reseñas de perfiles quedan sin validar.
- **Testimonios:** el código actual no precarga testimonios de muestra y oculta su sección cuando no hay entradas. No se encontraron testimonios empresariales aprobados en el catálogo revisado.
- **Pendiente:** la oferta general que informó el propietario no está distribuida por sede; tampoco se confirmaron atención a particulares, redes oficiales ni testimonios autorizados.

## Preguntas para cerrar la validación

1. **Respondida parcialmente (2026-11-11):** ambos números reciben WhatsApp. Enlaces de Maps aún pendientes.
2. **Respondida parcialmente:** los servicios varían por sede. Falta indicar cuáles corresponden a cada una y si atienden particulares además de EPS, y qué deben hacer para pedir información.
3. **Respondida parcialmente (2026-11-19):** recibidas misión, visión y directorios de profesionales de ambas sedes; retratos autorizados por el propietario. Verificar vigencia del personal y publicar únicamente los datos respaldados por los documentos.
4. **Pendiente de concretar:** el propietario indicó que tiene los datos de actividades. Falta compartir frecuencia, próxima fecha y permisos específicos por foto/video (incluidos permisos de acudientes cuando corresponda).
5. **Pendiente de compartir:** el propietario indicó que tiene los datos de privacidad/redes/testimonios. Faltan el correo de privacidad, URL oficiales y confirmar testimonios autorizados.

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
- **Implementación local lista (2026-11-11):** se añadió selector inicial y control persistente para cambiar sede; dirección, horario y WhatsApp seleccionados se enlazan en cabecera, accesos de contacto, sedes, preguntas frecuentes y pie. `Sedes` sincroniza la selección global y queda recordada en este navegador. Ambos números fueron confirmados como WhatsApp. La página ya informa que la oferta cambia por sede, sin afirmar disponibilidad no confirmada.
- **Implementación local (2026-11-12):** se actualizaron las opciones de servicio y agendamiento para reflejar las cuatro especialidades que el propietario confirmó en ambas sedes. La oferta de las demás especialidades aún requiere asignación.
- **Pendiente para cerrar la etapa:** enlaces de Maps cuando se compartan; prueba del cambio de sede y revisión móvil aún pendientes. La revisión de escritorio se retomó el 2026-11-11 y confirmó que cargan las fachadas.

### Etapa 3 · Sustituir activos de muestra por identidad y fotos propias

- Preparar el logo de `Docs/` para web y reemplazar el logo externo roto una vez aprobada su versión.
- Elegir fotos reales identificadas como Valledupar o Atánquez para portada y tarjetas. No publicar retratos ni escenas con personas/menores sin autorización comprobada.
- **Criterio de cierre:** no hay imágenes externas rotas ni fotos de stock presentadas como equipo o sedes reales.
- **Avance (2026-11-11):** el propietario identificó y pidió usar como fondo las fotos de ambas sedes: `Docs/.../CARPETA NUEVO/FACHADA.jpeg` (Valledupar) y `Docs/.../FACHADA SEDE ATANQUE.jpeg` (Atánquez). Se copiaron sin alterar a `public/images/sede-valledupar-fachada.jpeg` y `public/images/sede-atanquez-fachada.jpeg`; la portada sigue la sede activa y las tarjetas/detalles muestran la fachada correspondiente. Los originales permanecen en Docs; el reemplazo del logo sigue pendiente.
- **Avance (2026-11-12):** por solicitud del propietario, se aplicó a los títulos un azul derivado de `PALETA DE COLORES.jpeg`; los textos blancos sobre fondos oscuros se preservan. El logo local continúa pendiente.

### Etapa 4 · Alinear oferta, misión y visión

- Agregar misión/visión solo desde textos aprobados.
- Revisar la asignación de los servicios restantes por sede y la atención a particulares/EPS; retirar o corregir afirmaciones clínicas y comerciales sin fuente aprobada.
- **Criterio de cierre:** cada servicio y condición está respaldado y etiquetado por sede, sin promesas de resultados.
- **Avance (2026-11-19):** misión y visión tomadas de la placa institucional y añadidas al inicio como contenido común a Valledupar y Atánquez, según confirmación del propietario. La visión original decía “en el 2026”; se retiró el año como ajuste de vigencia temporal. La asignación de servicios y condiciones EPS/particulares sigue pendiente.

### Etapa 5 · Revisar perfiles profesionales

- Confirmar nombre, rol/título, credenciales, sede, reseña, foto y autorización de publicación de cada perfil existente.
- Cambiar «especialistas» por «profesionales» en los textos de interfaz conforme a la preferencia del plan validado.
- **Criterio de cierre:** solo perfiles confirmados; mismo formato y sin fotos de stock que parezcan retratos reales.
- **Avance (2026-11-19):** sustituidos los seis perfiles de muestra por la información identificada en los directorios de Atánquez y Valledupar. Se retiraron credenciales, experiencia, horarios, áreas de enfoque y nombres no respaldados por esos originales. Se integraron nueve retratos (cinco de Atánquez y cuatro de Valledupar), con autorización confirmada por el propietario.

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
- Usar `computer-use` para inspección visual disponible. Si se instalan skills de diseño/móvil, emplearlas en el alcance descrito por el checklist; los cambios de color requieren confirmación del propietario, recibida para la paleta el 2026-11-12.
- **Criterio de cierre:** revisión visual de móvil y escritorio sin desbordes ni controles difíciles de usar.
- **Avance (2026-11-19):** se ajustó el encuadre de los nueve retratos de equipo para que se vea la foto completa dentro de cada tarjeta. Revisado en la vista local de escritorio para Valledupar; falta la revisión móvil.

### Etapa 10 · SEO básico y revisión final

- Revisar título, descripción, textos alternativos, estructura, contenido renderizado y datos locales confirmados con `seo-organico-ia` cuando se instale desde el ZIP.
- Compilar y ejecutar las comprobaciones existentes. Probar localmente los enlaces de cada sede con datos ficticios y sin transmitirlos a terceros; pruebas reales de recepción requieren un canal autorizado.
- **Criterio de cierre:** informar por separado lo compilado, revisado visualmente, probado funcionalmente y publicado. La publicación queda fuera de este plan hasta contar con autorización aplicable.

## Siguiente paso

Siguiente: completar la asignación de servicios restantes por sede y obtener los enlaces Maps. Luego continuar con datos de actividades, privacidad y la revisión visual móvil. Véanse [[pendientes]], [[empresa]] y [[documentos-y-activos]].
