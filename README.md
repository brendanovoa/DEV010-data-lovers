# Data lovers :trophy: Juegos Olímpicos :trophy: 
### :swimmer: Índice :swimmer:
:table_tennis: Descripción del proyecto
:table_tennis: Investigación previa para desarrollo del proyecto
:table_tennis: Características de la aplicación y demostración para desktop y movil
:table_tennis: Tecnologías utilizadas
:table_tennis: Estado del proyecto
:table_tennis: Autoras

------------

#### :weight_lifting: **Descripción del proyecto** :weight_lifting:
Proyecto desarrollado para obtener y visualizar datos acerca de los atletas que participaron durante los Juegos Olímpicos, realizados en Río de Janeiro en el año 2016. Data Lovers -Juegos Olímpicos- es un sitio web para visualizar, filtrar, ordenar y calcular datos de los atletas antes mencionados.

El sitio web permite visualizar tres secciones:
- **Atletas:**Dentro de esta sección se despliegan los nombres de los atletas en orden alfabético para después filtrarlos de acuerdo al país que representaron, esto por medio de un menú desplegable que muestra todos los países participantes.
- **Países:**Dentro de esta sección se despliega la lista de los países participantes en orden alfabético durante esta edición de juegos olímpicos, mostrando también el cálculo de cuántas medallas de cada tipo (oro, plata y bronce) ganó cada uno.
- **Equidad de Género:**Dentro de esta sección se despliega el cálculo del número de mujeres que participaron en esta edición de los juegos, así como se puede visualizar el número de países que representaron y el conteo total de medallas de cada tipo que ganaron (oro,plata y bronce).

------------

#### :weight_lifting: **Investigación previa para desarrollo del proyecto ** :weight_lifting:
Los Juegos Olímpicos de Río de Janeiro, fueron un evento multideportivo internacional, celebrado en la ciudad de Río de Janeiro, Brasil, en 2016. La elección de Río marcó la primera vez que los J.O. se realizan en un país sudamericano. Este evento tuvo gran acogida a nivel mundial, de todas estas personas hay un grupo que desea poder interactuar y ver la información de los atletas, los deportes olímpicos y los países que participaron.

:medal: ** Hallazgos** :medal:
- En los juegos olímpicos son muchos los países participantes, para nuestros usuarios es importante saber cuáles son y cuáles fueron sus resultados.
- Para nuestros usuarios es importante tener información relevante sobre los atletas olímpicos, como su nombre, edad, altura, peso, país que representa y especialidad deportiva.
- Adicionalmente a nuestros usuarios les gustaría saber la cantidad de mujeres atletas que participaron y ganaron medallas.

:medal: **Historias de Usuario** :medal:

Las historias de usuario planteadas fueron las siguientes:
- **Mostrar atletas participantes:**Yo como usuaria quiero ver a todos los participantes de los J.O. para poder conocerlos.
- **Organización y paginación:**Yo como usuaria quiero ver la información en orden alfabético y poder recorrer los atletas o países participantes en bloques para encontrar lo que busco más fácilmente.
- **Filtrar atletas por país:**Yo como usuaria quiero poder filtrar a los atletas que participaron por cada país para saber cuáles y cuántos son de cada uno.
- **Mostrar países participantes:**Yo como usuaria quiero saber qué países participaron para poder conocer sus datos (nombre y resultados).
- **Mostrar datos específicos de atletas:**Yo como usuaria quiero ver la información completa de los atletas (nombre, edad, género, altura, peso, país y especialidad deportiva) para poder conocer a todos los participantes.
- **Estadísticas de género:**Yo como usuaria quiero ver cuántas atletas mujeres participaron en los juegos olímpicos para evaluar la equidad de género.

[![Historias de usuario](https://i.imgur.com/N25zQ2b.png "Historias de usuario")](https://i.imgur.com/N25zQ2b.png "Historias de usuario")

:medal: **Prototipos de baja fidelidad**  :medal:

De acuerdo a lo visto en las HU nos planteamos el siguiente diseño de páginas  para el despliegue de la información:

[![Prototipos de baja fidelidad](https://i.imgur.com/EMuTbN4.png "Prototipos de baja fidelidad")](https://i.imgur.com/EMuTbN4.png "Prototipos de baja fidelidad")

:medal: **Prototipos de Alta fidelidad** :medal:

- Página de entrada.
[![P. entrada](https://i.imgur.com/0ogoudG.png "P. entrada")](https://i.imgur.com/0ogoudG.png "P. entrada")

- Página de inicio.
[![P. inicio](https://i.imgur.com/NPx9PjS.png "P. inicio")](https://i.imgur.com/NPx9PjS.png "P. inicio")

- Página de Países participantes.
[![P. países](https://i.imgur.com/G0boliS.png "P. países")](https://i.imgur.com/G0boliS.png "P. países")

- Página de Atletas participantes.
[![P. atletas](https://i.imgur.com/8n7oEGt.png "P. atletas")](https://i.imgur.com/8n7oEGt.png "P. atletas")

- Página de Equidad de Género
[![P. equidad ](https://i.imgur.com/BDbXSIK.png "P. equidad ")](https://i.imgur.com/BDbXSIK.png "P. equidad ")

:medal: **Pruebas de usabilidad** :medal:

Se realizaron pruebas de usabilidad con 3 potenciales usuarias las cuales recomendaron:
- Las páginas de acceso e inicio se percibían como que frenaban la lectura del sitio y no se sabía qué información se iba a obtener en el. Por lo siguiente se decidió eliminar estas dos páginas y acceder directamente a los atletas participantes.
- Colocar menos información de inicio para no saturar la vista. Se planteo separar los datos de atletas a cards a las cuales se accedería individualmente.
- Otros comentarios fueron en relación a los colores utilizados los cuales les parecieron adecuados y llamativos pero que no incomodaban a la lectura.
- Los botones y su ubicación fueron claros y a la vista.

:medal: **Revisión de datos** :medal:

Al revisar a profundidad el volúmen de los datos, utilizando JSON HERO, nos replanteamos la estructura y contenido de la interfaz para priorizar un acomodo ordenado y  fácil de navegar para los usuarios, así como, optimizar el despliegue de la información.
Aunado  a esto, la data contenía algunos errores como números agregados en los nombres de países y nombres de atletas con falta de letras capitales. Por esto, decidimos  corregir los datos para poder trabajarlos correctamente.

- Visualización de la información por medio de JsonHero.
[![Json Hero](https://i.imgur.com/fXHgoZ5.png "Json Hero")](https://i.imgur.com/fXHgoZ5.png "Json Hero")

:medal: **Cambios en prototipos de baja y alta fidelidad** :medal:

- Cambios para el prototipo de baja fidelidad sección “Atletas”
[![Baja fidelidad Atletas](https://i.imgur.com/tmJXKYI.png "Baja fidelidad Atletas")](https://i.imgur.com/tmJXKYI.png "Baja fidelidad Atletas")

- Cambios para el prototipo de baja fidelidad sección “Países”
[![baja fidelidad Países](https://i.imgur.com/G5uJ0lK.png "baja fidelidad Países")](https://i.imgur.com/G5uJ0lK.png "baja fidelidad Países")

- Cambios para prototipo de alta fidelidad sección “Atletas”
[![Alta fidelidad Atletas](https://i.imgur.com/xH73YvO.png "Alta fidelidad Atletas")](https://i.imgur.com/xH73YvO.png "Alta fidelidad Atletas")

[![Datos atletas](https://i.imgur.com/VCgA9Yf.png "Datos atletas")](https://i.imgur.com/VCgA9Yf.png "Datos atletas")

- Cambios para prototipo de alta fidelidad sección “Países”
[![Alta fidelidad Países](https://i.imgur.com/livGy2t.png "Alta fidelidad Países")](https://i.imgur.com/livGy2t.png "Alta fidelidad Países")

- Cambios para prototipo de alta fidelidad sección “Equidad de Género”
[![Alta fidelidad equidad](https://i.imgur.com/VFiVtcR.png "Alta fidelidad equidad")](https://i.imgur.com/VFiVtcR.png "Alta fidelidad equidad")

------------

#### :weight_lifting: **Características de la aplicación y demostración para desktop y movil** :weight_lifting:

- Despliegue de la sección “Atletas” visualización de los nombres de los atletas participantes en orden alfabético y  paginación para mostrarlos:
[![Pantalla atletas](https://i.imgur.com/xH73YvO.png "Pantalla atletas")](https://i.imgur.com/xH73YvO.png "Pantalla atletas")

[![Movil atletas](https://i.imgur.com/TlGv49n.png "Movil atletas")](https://i.imgur.com/TlGv49n.png "Movil atletas")

- Despliegue de ventana o PopUp para visualizar más información acerca del atleta seleccionado.

[![PopUp ](https://i.imgur.com/VCgA9Yf.png "PopUp ")](https://i.imgur.com/VCgA9Yf.png "PopUp ")

[![PopUp movil](https://i.imgur.com/Rhm0TDK.png "PopUp movil")](https://i.imgur.com/Rhm0TDK.png "PopUp movil")

- Filtrar atletas por país que representaron

[![Filtro países](https://i.imgur.com/MmwasQR.png "Filtro países")](https://i.imgur.com/MmwasQR.png "Filtro países")

- Despliegue de la sección “Países”: Visualización de nombres en orden alfabético de los países participantes, junto con los resultados obtenidos (medallas).

[![Medallas](https://i.imgur.com/livGy2t.png "Medallas")](https://i.imgur.com/livGy2t.png "Medallas")

[![Medallas movil](https://i.imgur.com/UEQyGTV.png "Medallas movil")](https://i.imgur.com/UEQyGTV.png "Medallas movil")

- Despliegue de la sección “Equidad de Género”: Visualización del cálculo de cuántas atletas mujeres participaron durante esta edición de los Juegos Olímpicos.

[![equidad](https://i.imgur.com/VFiVtcR.png "equidad")](https://i.imgur.com/VFiVtcR.png "equidad")

[![Equidad movil](https://i.imgur.com/fh90ngi.png "Equidad movil")](https://i.imgur.com/fh90ngi.png "Equidad movil")

------------

#### :weight_lifting: **Tecnologías utilizadas** :weight_lifting:

- Adobe Ilustrator
- Figma
- Trello
- HTML 5
- CSS 3
- JavaScript Vainilla

------------

#### :weight_lifting: **Estado del proyecto** :weight_lifting:

Proyecto en repositorio remoto en Github y despegado en Github pages.
Sección de datos específicos por atleta en proceso.

Se realizaron pruebas unitarias para las funciones que realizan filtros, ordenamiento y conteo de datos con una cobertura del 100%.

[![pruebas](https://i.imgur.com/NfR33Lx.png "pruebas")](https://i.imgur.com/NfR33Lx.png "pruebas")

------------

#### :weight_lifting: **Autoras** :weight_lifting:

- Brenda Hernandez Novoa
[![Bren](https://i.imgur.com/9gP2Nho.png "Bren")](https://i.imgur.com/9gP2Nho.png "Bren")

- Jazmin Ruiz Orbe
[![Jazz](https://i.imgur.com/cIscuuV.png "Jazz")](https://i.imgur.com/cIscuuV.png "Jazz")
