---
tipo: estado
estado: vigente
creado: 2026-10-29
actualizado: 2026-10-29
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
- **Confirmado:** se inicializó Git con identidad local `arsasips` / `arsasfacturacion@gmail.com`; remoto `https://github.com/arsasips/pagina-web-de-arasips.git` configurado por solicitud del propietario. El repositorio se ve vacío y público. Commit local creado; el `push` está esperando autenticación de Git Credential Manager.
- **Pendiente:** la identidad de Git (`user.name` y `user.email`) no está configurada, por lo que aún no hay commit inicial.
- **Pendiente:** la landing no se ha publicado como sitio web. El código aún no se ha subido a GitHub porque requiere autenticación.
- **Pendiente:** el portal y los testimonios usan `localStorage` del navegador; no se comprobó recepción en un sistema institucional ni autenticación. No deben usarse para gestionar datos reales de salud sin una solución autorizada y segura.
- **Siguiente paso:** elegir si se reemplazan los dos logos externos fallidos con el logo local de `Docs/` (tras validarlo para web) o si se prefiere otra mejora; revisar en móvil.
