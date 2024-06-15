<h1>Anteproyecto</h1>
<h1>Vídeo https://youtu.be/lLUtOqzvXV4</h1>
<h1>Figma https://www.figma.com/file/6WtYirOMLAj0LMfy7B4ieR/Victor?type=design&node-id=0%3A1&mode=design&t=fNP7U6DKcMdvrzSe-1</h1>
<h1>Documentación: https://faceted-binder-6cc.notion.site/TFG-57cc9842a7d546499f5093adaf6b6af9?pvs=4</h1>
<h1>Vídeo TFG: https://youtu.be/Zsud9NoZYdw</h1>
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
Creación del header, me basé en el header de esta página
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
Acordeón
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
Sección de ventajas
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
<br>
Día 30
Revisando las APIs del día anterior, me doy cuenta que verificar usuarios y cambiar contraseña no funciona como quería, ya que el token no se enviaba por parámetros de la url, sino por parte de request. Me pongo en marcha con las dos APIS
<br>
<br>
<br>
<h1>MAYO</h1>
<br>
<br>
Día 1
Tras un intenso día y debido a la escasa documentación de Laravel con React finalizo la API de olvidar password, también conecto exitosamente el frontend. Creo una peticion GET con el token, en el cliente leo los parametros de la URL, si es correcta, renderiza un formulario para cambiar la contraseña, si no, directamente no permite al usuario cambiar la contraseña. El tóken expira en un día
<br>
Día 2
Lo mismo que ayer, nula documentación. Finalizo la API de verificar email, ajusto middleware para que los usuarios que entren a rutas protegidas sean aquellos verificados y registrados. Para la verificación, si el usuario se loguea y no está verificado, se le avisa para confirmar la cuenta. En el registro, al registrarse también se le avisa para ello. El tóken tiene fecha de expiración.
<br>
Día 3
Me dedico a añadir tipados que faltan, pero todo empieza a fallar y tengo que revertir la carpeta al día anterior. Además, finalizo la sección de contacto, añadí validación tanto en el frontend como en el backend, y llegan los correos correctamente
<br>
Día 4
Investigo las diferentes formas para almacenar fotos, en este caso me decanto por el servidor local de Laravel, ya que es menos costoso y mi aplicación es pequeña. Amazon S3 para un futuro, y empiezo a desarrollar la funcionalidad para cambiar fotos de usuario, teniendo la oportunidad de recortar la foto, usando una librería externa
<br>
Día 5
Preparo el frontend para recortar imágenes de los usuarios e intento acabar el backend. Pero me surgen problemas, especialmente por el formato de las imágenes. En el frontend se me generaban imágenes tipo BLOB y mi intención era subirlas en formato JPG para que se alojaran en la carpeta. Además, intenté procesar las imágenes en Laravel, pero la biblioteca Intervention Image me daba error. 
<br>
Día 6
Finalizo la funcionalidad de cambio de avatar, proceso las imágenes en el cliente,  y al servidor las envío en formato JPG en lugar de BLOB, además de crear dos endpoints, uno para alojar las imágenes y otro para hacer un GET desde el cliente
<br>
Día 7
<br>
Panel de admin rediseñado, añado mejoras estéticas importantes
<br>
Día 8
Empiezo a hacer el carrito de compras funcionar. Veo un problema potencial y lo arreglo. El problema en cuestión era que el input para enviar formulario estaba en otro componente, y para enviar datos es obligatorio que el input esté dentro del propio formulario. Tuve que cambiar toda la lógica y practicamente rehacer el carrito de compras desde cero, ya que era completamente incompatible.
<br>
Día 9
Investigo sobre las mejores formas para validar un formulario y me decanto por React Hook Form para los datos y ZOD para la validación de los datos. Termino la página de la información personal, además de crear su correspondiente API para almacenar los datos personales del usuario.
<br>
Día 10
Finalizo la otra parte, la página de datos de facturación. En este caso no mando ninguna API, ya que es **ILEGAL**. Únicamente almaceno de forma temporal en un hook esos datos, para luego mostrarlos encriptados en la página de confirmación. Además, implemento la lógica para la redirección, es decir, middleware, por ejemplo, que no puedas acceder a confirmación a través de la URL si no completaste un paso. Para eso me ayudo con un useState.
<br>
Día 11
Creo la API para comprar suscripción. La lógica finalmente es la siguiente: Tengo una tabla suscripciones, y este a su vez tiene 6 columnas: id, id_user (foreign key), tipo, prompts_disponibles, precio, created_at. En la API le envío un único dato, que es un número del 1 al 3. Por ejemplo, si escoge el plan básico, le correspondería el 1, y lo que hago ahora es una condición. Si la id que le llega es 1, que asigne las siguientes columnas a la tabla de suscripciones: tipo: básico, prompts_disponibles: 10, precio: 9. Y la misma lógica para el resto. Ahora, creo un comando para que me establezca las columnas al valor inicial, y configuro un schedule para que ese comando lo ejecute diariamente. Entonces, cada usuario a comienzo del día tendría los prompts reseteados a su valor inicial, como se prometió en la página de compras.
<br>
Además, implemento la lógica para el total de prompts disponibles que se muestra en el placeholder. Lo que hago es sumar free_prompts de la tabla user + prompts_disponibles de la tabla suscripciones.
<br>
Día 12
Creo un command como el del día anterior que se ejecuta a diario en el Kernel gracias al cronjob. Este lo que hará será buscar suscripciones expiradas, y si la suscripción expirada es menor o igual que la fecha actual, entonces lo borrará. Además, creo la lógica para obtener la IP del usuario, que es con el propio request de Laravel, además de usar una API externa, ya que Laravel lo que me da es la IP privadad, y yo necesito la pública del Router. Y por último, implemento la lógica para obtener la actividad del usuario, es decir, si está conectado o desconectado o la última actividad. Esto lo he logrado gracias a una biblioteca que funciona en el cliente, llamada "idletimer", éste capta eventos como scroll, clicks, navegación del usuario, etcétera. Si se captura un evento, quiere seteamos el estado del usuario a conectado, en caso contrario, como desconectado
<br>
Día 13
Creo la API para cancelar suscripción, y la de eliminar cuenta que funciona unicamente si la contraseña que se da es correcta. Además, llevo partes del backend al cliente, y acabo la parte del perfil de usuario, trayendo toda la información como la suscripción, nombre, correo electrónico... Y en caso de que no exista, especificando los prompts gratuitos y añadiendo un botón de comprar
<br>
Día 14
Creo la API para actualizar usuarios y además lo implemento en el cliente para ello añado muchísimas cosas, como una tabla de de administrador para garantizar permisos, poder cambiar contraseña, el usuario, el correo electrónico, además de modificar la lógica de las suscripciones para eliminarlas dentro del panel, cambiar al usuario las suscripciones y por último añadirle prompts gratuitos personalizado
<br>
Día 15
Creo la API para agregar usuarios y lo implemento en el cliente, además de actualizarse a tiempo real.
<br>
Día 16
Creo la paginación y trabajo en el checkbox, tanto individual como el checkbox de todos los usuarios, e implemento la eliminación una acabada la API
<br>
Día 17
Creo búsqueda por searchbar y modifico otras páginas para refactorizar y añadir mejoras
<br>
Día 18
Refactorizo y arreglo numerosos bugs
<br>
Día 19
Finalizo la página de buscar usuarios por id, además de tener completamente funcional la tabla de registro de prompts del usuario, y recoger numerosos datos como su vivienda (si compró una suscripción), la IP (gracias a registrarse / loguearse), nombre, correo, etc.
<br>
Día 20
Implemento en el panel de admin cards con información como beneficio de suscripciones, usuarios semanales, etc. Tanto en el frontend como en el backend
<br>
Día 21
Migro toda la lógica de alertas a React Hook Form para seguir uniformidad y hacerlo más estético además de implementar el estado de usuarios y la última sesión de usuarios
<br>
Día 22
Sigo migrando la lógica de alertas y añado middleware para administradores, arreglo errores, refactorizo, arreglo paginación de historial-prompts y cambio toda la lógica que tenía respecto a la comprobación de TOKEN por Local Storage, ya que fue inutil porque es más apropiado controlarlo con la propiedad "email_verified_at". Ajusto además las cards con unos problemas que tenía respecto al color y al SVG; si los números son negativos en rojo, si son positivos en verde 
<br>
Día 23
Añadido responsive en el perfil, mejorado paginación, refactorización y mejora de performance en general
Arreglado error de cambiar perfil, que obligaba a actualizar la pagina
Paginación arreglada, cambio de lógica de alertas, arreglos en la autenticación en general, administración, añadido middleware para administradores, mejora de performance, refactorización, etc
<br>
Día 24
Preparando para el deployment, buscando diferentes formas de hacerlo. Al final usé PM2, un gestor de procesos especializado en node
<br>
Día 25
Cree las instancias: EC2, RDS y descargué todo lo necesario: PHP, MYSQL, NGINX para el servidor web, PM2 para el gestor de procesos y lo desplegué
<br>
Día 26
Estuve corrigiendo errores de esLint y de paquetes, ya que al buildear la imagen en Next me daba muchos problemas
<br>
Día 27
Continúo con el despliegue y finalizo
<br>
Día 28
Continúo desarrollando y quitando errores, tanto del frontend como del backend
<br>
Día 29
Continúo desarrollando y quitando errores, tanto del frontend como del backend

<br>
Día 30
Continúo desarrollando y quitando errores, tanto del frontend como del backend

<br>
Día 31
Cambios en la validación y control de errores en el cambio de fotos para permitir 1MB máximo
<br>
<h2>Junio</h2>
<br>
Día 1
Corrección de errores importantes, ya que no mutaba los datos y por tanto al redirigir al usuario autenticado al login, el middleware actuaba y redirigía a la ruta principal. Con useSWR conseguí solventarlo. Además de que la página de olvidar password no mostraba el error correctamente
<br>
Día 2
Corrección de errores en el login, antes no mostraba nada cuando era la contraseña incorrecta, además me doy cuenta de que los botones que tienen loading tienen tamaño diferente.
<br>
Día 3
Desarrollo la versión de Javascript Vanilla, y acabo el header y las primeras secciones
<br>
Día 4
Continúo con la version Vanilla y acabo las otras secciones de la parte principal, además de añadir javascript a la galería, a la modal, slides, etc
<br>
Día 5
Acabo la página principal y me pongo a maquetar el login, que únicamente tendrá HTML y CSS y creo también el header para admin, con la modal del menú usuario, además de las cards
<br>
Día 6
Continúo con la version vanilla y acabo la tabla de usuarios de la página de administradores, y tras intensas horas consigo finalizar definitivamente la versión vanilla
Continúo con el Figma y añado un par de cosas para dejarlo lo más similar posible
<br>
Día 7
Acabo el diseño Figma, tanto la version mobile como la desktop
<br>
Día 8
Creo un cronjob en el servidor de producción para que ejecute los comandos y añado middleware en las APIS de admin, ya que solo estaba en el cliente, pero me faltaba el servidor, además empiezo con los tests unitarios de Laravel
Recursos que utilicé:<br>
Dudas y relleno de texto<br>
ChatGPT y Bard<br>
Freepik.com<br>
Wepik.com<br>
Stackoverflow<br>
Github issues<br>
Udemy<br>
Documentación de tailwind, laravel, react, nextjs...<br>
Páginas de diseños como curated.design o dark.design<br>
Youtube<br>
<br>
Iconos<br>
https://heroicons.com<br>
Flaticon.com<br>
<br>
Background<br>
https://mycolor.space/gradient<br>

