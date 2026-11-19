---
tipo: estado
estado: vigente
creado: 2026-10-29
actualizado: 2026-11-19
tags: [proyecto, estado]
fuentes: ["../package.json", "../README.md", "../metadata.json"]
---

# Estado del proyecto

- **Confirmado:** versión local declarada `0.0.0`; landing React 19 + TypeScript + Vite 8 (Vite 8.3.5 instalado); entrada `src/main.tsx`, página principal `src/views/HomeView.tsx`, datos `src/data/mockData.ts`.
- **Confirmado:** npm, Node.js v24.22.1 y Git 2.56.0 están disponibles. Scripts: `npm run dev` (Vite puerto 3000), `npm run build`, `npm run lint` (TypeScript). Dependencias instaladas; bloqueo `package-lock.json` creado. Se alineó `esbuild` a `^0.28.0` por incompatibilidad inicial con Vite 8.
- **Confirmado:** `npm run lint` terminó sin errores y `npm run build` compiló (`dist/`), con un aviso de Vite sobre `__dirname` en `vite.config.ts`.
- **Confirmado:** se retiraron del contenido precargado las citas con datos de pacientes y los testimonios no verificados; el portal ya no ofrece identificaciones de muestra. Se conservan otras citas creadas por el usuario localmente, salvo las dos claves de demo anteriores que la aplicación migra al iniciar.
- **Confirmado:** servidor local disponible en `http://127.0.0.1:3000/`; la vista de escritorio se abrió en navegador. El CTA “Quiero agendar mi cita” abre el formulario, que se cerró sin enviar datos. No se hicieron pruebas de WhatsApp/teléfonos ni se enviaron formularios.
- **Revisión visual de escritorio y móvil (390 × 844):** no se observó desbordamiento horizontal. En escritorio, ancho documental y del viewport coinciden (1265 px); en móvil coinciden (375 px). No hay errores de consola. Los dos logos externos fallan al cargar; el encabezado móvil queda apretado por espacio limitado.
- **Confirmado:** no había repositorio Git al iniciar; `Docs/` contiene el ZIP fuente de AI Studio y materiales empresariales. Se conservará el ZIP original; el código actual parece corresponder a su contenido.
- **Confirmado:** identidad Git configurada solo en este repositorio como `arsasips` / `arsasfacturacion@gmail.com`. Repositorio público `https://github.com/arsasips/pagina-web-de-arasips`; código y wiki subidos a `main`, commit de la landing `039572805697edf6bec1ce0cec120865758e7f2b`. Git local queda conectado a `origin/main`.
- **Pendiente:** la landing no se ha publicado como sitio web; subir el código a GitHub no la despliega.
- **Confirmado (2026-11-11):** Paso 2 implementado localmente: selección inicial obligatoria de Valledupar/Atánquez; cambio disponible desde cabecera y botón flotante; elección persistida en `localStorage` del navegador. Los datos de sede, horarios, preguntas frecuentes y contactos visibles se alinearon a información confirmada y ambos números están validados por el propietario como WhatsApp.
- **Comprobación (2026-11-11):** `npm run lint` y `npm run build` pasan; Vite conserva un aviso sobre `__dirname`. Revisada la página en navegador de escritorio: ambas fachadas locales aparecen cargadas (ancho natural 1600 px). Revisión móvil pendiente.
- **Resuelto (2026-11-11):** se encontraron procesos Vite antiguos de este proyecto ocupando los puertos 3000 y 3001 sin responder. Se detuvieron esos procesos y se inició una sola instancia en `http://localhost:3000/`; una solicitud HTTP local respondió `200`. La revisión visual sigue pendiente.
- **Confirmado e implementado (2026-11-11):** el propietario identificó `Docs/.../CARPETA NUEVO/FACHADA.jpeg` como la fachada de Valledupar y pidió usarla de fondo. Se copió sin alterar a `public/images/sede-valledupar-fachada.jpeg` y se conectó a la imagen principal, la tarjeta de Valledupar y el detalle de esa sede. Original conservado.
- **Confirmado e implementado (2026-11-11):** el propietario pidió también usar `Docs/.../FACHADA SEDE ATANQUE.jpeg` como fondo de Atánquez. Copiada sin alterar a `public/images/sede-atanquez-fachada.jpeg`; la portada cambia según la sede activa y cada tarjeta/detalle muestra su propia fachada. Retirado el enlace de imagen genérica externa.
- **Implementado por solicitud del propietario (2026-11-12):** se tomó el azul intenso de `Docs/.../PALETA DE COLORES.jpeg` como referencia para los títulos/letras destacadas; se usa un tono azul más oscuro para legibilidad sobre fondos claros. El original sigue intacto en Docs.
- **Implementado por confirmación del propietario (2026-11-12):** psiquiatría, fisiatría, neuropediatría y neuropsicología figuran para Valledupar y Atánquez en el catálogo de servicios y en las opciones de agendamiento. No se añadieron perfiles de profesionales.
- **Pendiente de Etapa 2:** enlaces de Maps. La distribución de servicios se mantiene pendiente; el propietario indicó que varía por sede.
- **Pendiente:** el portal y los testimonios usan `localStorage` del navegador; no se comprobó recepción en un sistema institucional ni autenticación. No deben usarse para gestionar datos reales de salud sin una solución autorizada y segura.
- **Implementado (2026-11-19):** logo local de `Docs/LOGO.jpeg` integrado en encabezado y pie compartidos por ambas sedes. Paleta global actualizada con azul institucional, fondos azul claro, acento naranja y una franja arcoíris discreta. Revisada la página local en navegador: abre y carga contenido. Revisión móvil del nuevo diseño pendiente.
- **Confirmado (2026-11-06):** revisado `PLAN DE MEJORA/25-centro-de-rehabilitacion-y-educacion-especial-arsas-ips-sas/`; contiene el checklist, ZIP de skills SEO y tratamiento de datos, documento de validación y mensaje modelo. Se creó [[plan-de-mejora]] con etapas adaptadas al código.
- **Confirmado por el propietario (2026-11-06):** direcciones y horarios de ambas sedes; la landing ya refleja los datos confirmados en [[empresa]].
- **Pendiente:** enlaces de Maps de ambas sedes y vigencia de los correos hallados en el volante.
- **Pendiente:** validar servicios por sede, textos institucionales, perfiles, autorizaciones de imágenes/personas, actividades, enlaces sociales/Maps y datos de privacidad.
- **Implementado localmente (2026-11-19):** misión y visión institucionales añadidas al inicio desde `Docs/.../mision y vision .jpeg`; directorio de ambas sedes actualizado con la información de sus DOCX y nueve fotos autorizadas. Se retiraron del directorio los perfiles de muestra sin respaldo. `npm run lint` y `npm run build` pasan (Vite mantiene su aviso conocido sobre `__dirname`). La vista previa integrada mostró `ERR_CONNECTION_TIMED_OUT`; el entorno del navegador no pudo conectarse al servidor local. No se ha publicado.
- **Actualización de vista previa (2026-11-19):** confirmado por el propietario que misión y visión aplican a las dos sedes; se muestran en inicio como texto institucional compartido. Se permitió a Vite escuchar solo en `127.0.0.1:3000`; la página abrió en el navegador de vista previa y queda visible en esta sesión. La sección inicial se cargó correctamente. El logo local y la paleta compartida ya están integrados. No se ha publicado.
- **Ajuste visual (2026-11-19):** las tarjetas del directorio ahora usan `object-contain` para mostrar completos los retratos de profesionales y personal administrativo; observado en la vista de Valledupar en escritorio. La revisión móvil sigue pendiente.
- **Siguiente paso:** compartir enlaces de Maps y confirmar la distribución de servicios por sede; reintentar la vista visual local desde un navegador con acceso al servidor. Detalles en [[plan-de-mejora]].
- **Histórico (2026-11-06):** el propietario confirmó la asignación de las direcciones y horarios a Atánquez y Valledupar.
- **Confirmado (2026-11-11):** reexaminados directamente los volantes, fachadas y medios incrustados del membrete en `Docs/`; el inventario y el resultado actualizado por sede están en [[documentos-y-activos]] y [[plan-de-mejora]]. El Paso 1 sigue completado con hallazgos ampliados. No se modificó el sitio.
