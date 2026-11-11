---
tipo: estado
estado: vigente
creado: 2026-10-29
actualizado: 2026-11-11
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
- **Comprobación de este cambio:** `npm run lint` y `npm run build` pasan. La compilación mantiene el aviso existente sobre `__dirname` en `vite.config.ts`. El navegador integrado no logró conectar al servidor Vite local; revisión visual y prueba de selección quedan pendientes.
- **Resuelto (2026-11-11):** se encontraron procesos Vite antiguos de este proyecto ocupando los puertos 3000 y 3001 sin responder. Se detuvieron esos procesos y se inició una sola instancia en `http://localhost:3000/`; una solicitud HTTP local respondió `200`. La revisión visual sigue pendiente.
- **Confirmado e implementado (2026-11-11):** el propietario identificó `Docs/.../CARPETA NUEVO/FACHADA.jpeg` como la fachada de Valledupar y pidió usarla de fondo. Se copió sin alterar a `public/images/sede-valledupar-fachada.jpeg` y se conectó a la imagen principal, la tarjeta de Valledupar y el detalle de esa sede. Original conservado.
- **Pendiente de Etapa 2:** enlaces de Maps. La distribución de servicios se mantiene pendiente; el propietario indicó que varía por sede.
- **Pendiente:** el portal y los testimonios usan `localStorage` del navegador; no se comprobó recepción en un sistema institucional ni autenticación. No deben usarse para gestionar datos reales de salud sin una solución autorizada y segura.
- **Siguiente paso anterior (pendiente de validación):** revisar reemplazo de logos e imagen principal.
- **Confirmado (2026-11-06):** revisado `PLAN DE MEJORA/25-centro-de-rehabilitacion-y-educacion-especial-arsas-ips-sas/`; contiene el checklist, ZIP de skills SEO y tratamiento de datos, documento de validación y mensaje modelo. Se creó [[plan-de-mejora]] con etapas adaptadas al código.
- **Confirmado por el propietario (2026-11-06):** direcciones y horarios de ambas sedes: Atánquez, Carrera 4 # 6-52; Valledupar, Carrera 17 # 13B bis-14, Alfonso López. Los horarios detallados están en [[empresa]]. La web todavía no refleja esta información.
- **Pendiente:** verificar vigencia de los dos teléfonos y correos hallados en el volante, confirmar si los teléfonos reciben WhatsApp y obtener enlaces de Maps de ambas sedes.
- **Pendiente:** validar servicios por sede, textos institucionales, perfiles, autorizaciones de imágenes/personas, actividades, enlaces sociales/Maps y datos de privacidad.
- **Siguiente paso:** al comenzar la Etapa 2, recordar al propietario las preguntas pendientes 2–5 de [[plan-de-mejora]]; luego corregir los datos confirmados de contacto y sede.
- **Actualización 2026-11-06:** el propietario confirmó la asignación de las direcciones y horarios a Atánquez y Valledupar. No se modificó la landing; quedan pendientes algunos canales y mapas.
- **Confirmado (2026-11-11):** reexaminados directamente los volantes, fachadas y medios incrustados del membrete en `Docs/`; el inventario y el resultado actualizado por sede están en [[documentos-y-activos]] y [[plan-de-mejora]]. El Paso 1 sigue completado con hallazgos ampliados. No se modificó el sitio.
