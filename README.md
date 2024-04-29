<h1>Anteproyecto</h1>
<h2>Notion</h2>
https://faceted-binder-6cc.notion.site/Anteproyecto-1f21f41efbe444c48c01509a30aad739?pvs=25
<h2>Bitácora de tareas</h2>
El proyecto lo empecé antes de Semana Santa, para tener un avance mientras compaginaba las prácticas
<br>
<br>
<br>
<hr>
Repositorio subido por primera vez el Lunes 01/04/2024
PROVISIONAL, NO DEFINITIVO
Comencé el Lunes 18/03/2024
<br>
<br>
<h1>MARZO</h1>
<br>
<br>
Día 18
Logo en wepik.com
<br>
Creación del header, me basé en el header de esta página https://www.curated.design/articles/linear-asks
<br>
Día 19
Creación de la página principal (Una sección minimalista en la que hay un bosque de fondo con degradado oscuro, un h1 y un párrafo)
<br>
20 y 21 
Creación de la galería - slider, con tooltips 
<br>
Día 23 
Cards con precios
<br>
Día 24
Acordeón. Me ayudé gracias a este vídeo https://www.youtube.com/watch?v=oOXExNA8A48&list=LL&index=2
<br>
Día 25 Footer
<br>
Día 26. Arreglé algunos bugs del slider, que evitaba que la modal se cerrara con el overlay
<br>
Día 27. Repaso general en la página, especialmente en los botones. Añadí active y hover y mejoré la página
<br>
Día 28. Añadí menú hamburguesa al header y decidí meter una seccion nueva "Contacto". 
<br>
Día 30
Sección de ventajas. Me basé en este https://imgur.com/a/xaeMvPq de la página de diseños curated.design
<br>
Día 31
Añadí sección de contacto y le puse una flecha en el home que te permite bajar a la introducción
<br>
<h1>ABRIL</h1>
<br>
<br>
Día 3
Implemento API de registro
<br>
Día 4
Implemento API de login
<br>
Día 5
Estuve investigando sobre varias formas de hacer el login, si centrarlo todo en un div o crear un grid con dos columnas, una que ocupe más (la de la imagen) para no dar sensación de vacío al formulario
<br>
Día 6
Acabo el login definitivamente, además del registro y olvidé password. También modifiqué home y mejoré cosas del responsive
<br>
Día 7
Haciendo página de generar
<br>
Día 8 Haciendo página de carrito
<br>
Día 9, 10, 11, 12, 13
Me dedico a refactorizar, quitar errores, y mejorar aspecto visual de muchas páginas
<br>
Día 13
Migración completa a NEXTJS
<br>
Día 14
Inicio con la autenticación de usuarios usando Laravel Sanctum. Modifico el registro y el login
<br>
Día 15
Finalizo la autenticación, añado middleware, rutas protegidas
<br>
Día 17
Intenté añadir socket.io para respuestas a tiempo real
<br>
Día 18 
Quito socket.io por su dificultad, especialmente de tener un servidor a parte, e implemento useEffect dentro de una petición GET para respuestas a tiempo real
<br>
Día 19
Implemento HuggingFace para imágenes (Antes pensaba añadir Stable diffusion). El motivo es que éste ofrece una API gratuita, y la API de Stable Diffusion es de pago
<br>
Día 20
Arreglé modal del home, admin y generar, ya que hice una modificación previa y dejaron de funcionar, creo que es por la migración de React Router DOM a NextJS.<br>
Agregué una característica al textarea para que haga growing automático con javascript. Con CSS no se puede, iban a meter una clase, pero aún no lo han hecho<br>
Mejoré aspecto visual de la página de generar<br>
Agregué toastify<br>
Día 21
Mejoré interfaz y la galería de la página generar la cambié entera, debido a unos fallos relacionado con la experiencia de usuario
<br>
Día 22
Empiezo con el desarrollo de la página de usuarios dentro del panel de admin. Éste contiene datos generales de la cuenta y de su historial de prompts para tener a los usuarios controlados
<br>
Día 23
Continuo desarrollando la página de usuarios dentro del panel de admin
<br>
Día 24
Continuo desarrollando la página de usuarios dentro del panel de admin
Arreglé modal de admin e implementé la modal para el panel de administrador y otras mejoras
<br>
Día 25
Para la petición asíncrona en el state, quité el loading y lo sustituí por un "skeleton". Tengo pensado añadirlo en más partes dónde se requieran datos del servidor
Termino la página de usuarios dentro del panel de admin
<br>
Día 26
Mejoré detalles de la página de usuarios del panel de admin
<br>
Día 27
Añado menú hamburguesa al header, ya que añado nuevas secciones
El home cambio muchas cosas para darle un aspecto visual más bonito: el formulario de contacto usé los colores siguiendo el patrón de la web y la sección de introducción al verlo mucho texto, preferí quitarlo y añadí otra cosa más agradable en su lugar
Empiezo con la página de perfil de usuarios. Aquí los usuarios tendrán accceso de su historial de prompts, que el código es el mismo que el de admin. También podrán cambiar las contraseñas si sienten que la contraseña ha sido comprometida o incluso darse de baja de forma definitiva
<br>
Día 28
Finalizo la sección de perfil de usuarios, y además la página del carrito, la parte del resumen no usaba la estructura de una tabla, a pesar de ser una tabla, usaba en su lugar divs. Eso lo he cambiado, además de mejorar su aspecto visual
Empiezo a investigar como verificar los usuarios a través de correo electrónico, pero no lo consigo
Día 29
Finalizo la API para verificar usuarios, cambiar contraseña en caso de olvido mediante un correo, cambio de contraseña normal y formulario de contacto en el que me llegan los datos desde el cliente



Recursos que utilicé:
Dudas y relleno de texto
ChatGPT y Bard
Imágenes
Freepik.com

Iconos
https://heroicons.com
Flaticon.com

Background
https://mycolor.space/gradient
Documentación Tailwind
https://tailwindcss.com/docs
Diseño (para ideas)
https://www.curated.design
