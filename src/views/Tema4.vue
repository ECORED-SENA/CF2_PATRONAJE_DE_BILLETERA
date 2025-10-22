<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Ejemplos de operaciones básicas
    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img1.png", alt="", style="width: 285px").m-auto
      .col-lg
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Diseño lógico")
            .col-12
              p.mb-0 El usuario inicia la herramienta desde la barra de menús, la barra de herramientas o la línea de comandos. Una vez activa, el sistema solicita seleccionar el objeto sobre el cual se aplicará la operación. Este método resulta ideal en procesos que requieren pasos secuenciales definidos.
          .row(titulo="Primero objeto – después herramienta")
            .col-12
              p.mb-0 El usuario selecciona previamente el objeto o la curva manteniendo presionado el clic izquierdo y arrastrando el cursor para abarcar las curvas. Si la selección se hace de abajo hacia arriba, solo se eligen los objetos contenidos en el recuadro resaltado en amarillo. Luego se activa la herramienta y el comando se aplica directamente sobre los elementos seleccionados. Este enfoque es más eficiente cuando se trabaja con conjuntos de geometrías previamente identificadas.
    .row.bg-c12
      .col-12
        .p-5
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src="@/assets/curso/tema4/img1.svg", alt="", style="width: 80px").m-auto
            .col-md
              p.mb-0 #[b Nota técnica.] La elección del orden no altera el resultado, pero puede optimizar el flujo de trabajo según la complejidad del modelo o la cantidad de objetos a manipular. En Rhinoceros, todas las líneas son consideradas curvas, ya sean rectas o curvas, siendo la base de la mayoría de las herramientas de dibujo y edición.
    Separador
    #t_4_1
    .titulo-segundo.color-acento-contenido
      h2 4.1 Líneas y polilíneas
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p El comando polilínea permite crear segmentos rectos consecutivos que forman una línea compuesta o una figura cerrada. Puede activarse de tres maneras:
        .row.mb-3
          .col-12
            .p-4.bg-c16
              .row.align-items-center
                .col-md-auto.mb-3.mb-md-0
                  figure
                    img(src="@/assets/curso/tema4/img2.png", alt="", style="width: 260px").m-auto
                .col-md
                  .row.h-100
                    .col-12.bg-c5
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Desde la barra de menús.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Desde la barra de herramientas.
                          li.d-flex.mb-0
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Escribiendo el comando Polilínea en la línea de comandos.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/img3.png", alt="", style="width: 360px").m-auto
    .titulo-sexto.color-acento-contenido.mb-3
      p.mb-0 #[b Figura 20.] Selección comando polilínea
    .row.mb-5
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img4.png", alt="Imagen de la selección del comando Polilínea desde la barra de herramientas en Rhinoceros, como primer paso para dibujar formas básicas en 2D.", style="width: 1000px").m-auto
    p.mb-5 El procedimiento para dibujar una polilínea es el siguiente:
    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-md-8.mb-3.mb-md-0
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Paso 1]
                  p.mb-0 Definir el primer punto con clic izquierdo.
                .col-md-4
                  figure
                    img(src="@/assets/curso/tema4/img2.svg", alt="", style="width: 120px").m-auto
    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-12
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Paso 2]
                  p Escribir la distancia deseada (ejemplo: 30 mm) en la línea de comandos.
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 21.] Dibujo de polilínea.
                  .row
                    .col-12
                      figure
                        img(src="@/assets/curso/tema4/img5.png", alt="Captura del proceso de dibujo de una polilínea, mostrando la línea de comandos con la entrada del valor numérico para definir la distancia entre puntos.", style="width: 900px").m-auto
    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-md-8.mb-3.mb-md-0
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Paso 3]
                  p.mb-0 Dirigir el cursor en la dirección correspondiente y fijar el segundo punto con clic izquierdo.
                .col-md-4
                  figure
                    img(src="@/assets/curso/tema4/img3.svg", alt="", style="width: 120px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-md-8.mb-3.mb-md-0
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Paso 4]
                  p.mb-0 Continuar definiendo más segmentos o finalizar la polilínea presionando Enter.
                .col-md-4
                  figure
                    img(src="@/assets/curso/tema4/img4.svg", alt="", style="width: 120px").m-auto
    .titulo-sexto.color-acento-contenido.mb-3
      p.mb-0 #[b Figura 22.] Polilínea dibujada
    .row
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img6.png", alt="Vista del resultado final tras trazar una polilínea con varios segmentos conectados mediante clics sucesivos.", style="width: 1000px").m-auto
    Separador
    #t_4_2
    .titulo-segundo.color-acento-contenido
      h2 4.2 Cuadrados y rectángulos
    .row.mb-5
      .col-lg-auto.mb-3.mb-lg-0.pe-lg-0
        figure
          img(src="@/assets/curso/tema4/img7.png", alt="", style="width: 370px").m-auto
      .col-lg.bg-c2
        .row.h-100.align-items-center
          .col-12
            .p-4
              p.text-white.mb-0 En Rhinoceros  se pueden crear cuadrados o rectángulos de diferentes maneras, según las necesidades del diseño. Los dos métodos más comunes son los siguientes:
    .row.mb-5
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Con polilínea
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p Este método consiste en construir el cuadro a partir de segmentos consecutivos:
        .row.mb-3
          .col-12
            .p-4.bg-c15
              .row
                .col-12
                  .p-4.bg-c5
                    ol.lista-ol--cuadro.lista-ol
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span a
                        |
                        p.mb-0 Seleccionar la herramienta Polilínea desde la barra de herramientas o escribir Polilínea en la línea de comandos y presionar Enter.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span b
                        |
                        p.mb-0 Establecer el primer vértice con clic izquierdo.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span c
                        |
                        p.mb-0 Mover el cursor en línea recta hacia la dirección deseada e introducir la longitud del lado (ejemplo: 50 mm) en la barra de comandos. Confirmar con Enter.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span d
                        |
                        p.mb-0 Continuar trazando los otros lados alineándose con el rastreo ortogonal para asegurar ángulos rectos.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span e
                        |
                        p.mb-0 Unir el último punto con el primero para cerrar la figura.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/img8.png", alt="", style="width: 350px").m-auto
    .titulo-sexto.color-acento-contenido.mb-3
      p.mb-0 #[b Figura 23.] Construcción cuadrado a partir de Polilíneas
    .row.mb-5
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img9.png", alt="Dibujo de un cuadrado construido a partir de líneas individuales con la herramienta Polilínea, siguiendo restricciones ortogonales para mantener la geometría precisa.", style="width: 1000px").m-auto
    .row.mb-5
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Con la herramienta rectángulo
    p.mb-5 Este método es más rápido y preciso, ya que permite definir esquinas y dimensiones directamente:
    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-12
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Paso 1]
                  p Seleccionar la herramienta Rectángulo desde la barra de herramientas o escribir Rectángulo en la línea de comandos y presionar Enter.
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 24.] Selección comando Rectángulo
                  .row
                    .col-12
                      figure
                        img(src="@/assets/curso/tema4/img10.png", alt="Selección del comando Rectángulo desde la barra de herramientas en Rhinoceros, utilizado para crear figuras rectangulares de forma rápida.", style="width: 900px").m-auto
    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-md-8.mb-3.mb-md-0
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Paso 2]
                  p.mb-0 Definir la primera esquina con clic izquierdo.
                .col-md-4
                  figure
                    img(src="@/assets/curso/tema4/img2.svg", alt="", style="width: 120px").m-auto
    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-12
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Paso 3]
                  p Seleccionar la herramienta Rectángulo desde la barra de herramientas o escribir Rectángulo en la línea de comandos y presionar Enter.
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 25.] Selección esquina rectángulo
                  .row.mb-5
                    .col-12
                      figure
                        img(src="@/assets/curso/tema4/img11.png", alt="Captura del primer paso en la creación de un rectángulo, donde se define la primera esquina de la figura en la vista de dibujo.", style="width: 900px").m-auto
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 26.] Definición ancho del cuadrado
                  .row
                    .col-12
                      figure
                        img(src="@/assets/curso/tema4/img12.png", alt="Definición del ancho del rectángulo mediante el ingreso de un valor numérico en la línea de comandos o clic del segundo punto.", style="width: 900px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-md-8.mb-3.mb-md-0
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Paso 4]
                  p.mb-0 Opcionalmente, se pueden crear rectángulos desde el centro, mediante tres puntos o con esquinas redondeadas.
                .col-md-4
                  figure
                    img(src="@/assets/curso/tema4/img6.svg", alt="", style="width: 120px").m-auto
    .row.bg-c12
      .col-12
        .p-5
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src="@/assets/curso/tema4/img7.svg", alt="", style="width: 80px").m-auto
            .col-md
              p.mb-0 Al finalizar, el objeto se genera como una polilínea cerrada, editable como una sola unidad.
    Separador
    #t_4_3
    .titulo-segundo.color-acento-contenido
      h2 4.3 Círculos
    .row.mb-5
      .col-lg-auto.mb-3.mb-lg-0.pe-lg-0
        figure
          img(src="@/assets/curso/tema4/img13.png", alt="", style="width: 370px").m-auto
      .col-lg.bg-c22
        .row.h-100.align-items-center
          .col-12
            .p-4
              p.text-white.mb-0 Los círculos son una de las formas básicas más utilizadas en el modelado de Rhinoceros 8. El software ofrece varias maneras de crearlos, desde las más simples hasta opciones avanzadas para un control más preciso.
    .row.mb-5
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Cómo acceder a la herramienta
    .row.align-items-center.mb-4
      .col-lg-8.mb-4.mb-lg-0
        p La herramienta de círculo puede activarse de diferentes formas:
        .row.mb-3
          .col-12
            .p-4.bg-c16
              .row.align-items-center
                .col-md-auto.mb-3.mb-md-0
                  figure
                    img(src="@/assets/curso/tema4/img15.png", alt="", style="width: 260px").m-auto
                .col-md
                  .row.h-100
                    .col-12.bg-c5
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Desde la barra de herramientas de curvas, identificada con el ícono de un círculo.
                          li.d-flex.mb-0
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Escribiendo el comando Círculo en la línea de comandos.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/img14.png", alt="", style="width: 330px").m-auto
    .titulo-sexto.color-acento-contenido.mb-3
      p.mb-0 #[b Figura 27.] Selección comando círculo
    .row.mb-5
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img16.png", alt="Selección del comando Círculo desde la barra de herramientas, representado por un ícono de forma circular en Rhinoceros.", style="width: 1000px").m-auto
    .row.mb-5
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Métodos principales para crear círculos
    p.mb-5 Existen diversos métodos según el tipo de definición geométrica que se requiera:
    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-12
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Centro y radio]
                  p El usuario define primero el centro del círculo con un clic o ingresando coordenadas. Luego especifica el radio con un valor numérico o un clic (ejemplo: 50 mm).
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 28.] Creación  círculo a partir de centro y radio
                  .row
                    .col-12
                      figure
                        img(src="@/assets/curso/tema4/img17.png", alt="Creación de un círculo utilizando el método de centro y radio, especificando un valor de 50 mm para el radio.", style="width: 900px").m-auto
    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-md-8.mb-3.mb-md-0
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Centro y diámetro]
                  p.mb-0 Funciona igual que el método anterior, pero en lugar del radio se introduce el diámetro total del círculo.
                .col-md-4
                  figure
                    img(src="@/assets/curso/tema4/img8.svg", alt="", style="width: 120px").m-auto
    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-md-8.mb-3.mb-md-0
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Tres puntos]
                  p.mb-0 Se eligen tres puntos arbitrarios en el espacio de trabajo, y el círculo se genera pasando exactamente por ellos.
                .col-md-4
                  figure
                    img(src="@/assets/curso/tema4/img9.svg", alt="", style="width: 120px").m-auto
    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-md-8.mb-3.mb-md-0
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Dos puntos y radio]
                  p.mb-0 Se seleccionan dos puntos que determinan un diámetro parcial y, a partir de ellos, se especifica el radio del círculo.
                .col-md-4
                  figure
                    img(src="@/assets/curso/tema4/img10.svg", alt="", style="width: 120px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-md-8.mb-3.mb-md-0
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Circunferencia tangencial]
                  p.mb-0 Se construye un círculo tangente a tres curvas (líneas, arcos u otras). Es ideal para lograr ajustes precisos.
                .col-md-4
                  figure
                    img(src="@/assets/curso/tema4/img11.svg", alt="", style="width: 120px").m-auto
    .row.mb-5
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Funcionalidades adicionales
    .row.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        p Este método consiste en construir el cuadro a partir de segmentos consecutivos:
        .row.mb-3
          .col-12
            .p-4.bg-c15
              .row.align-items-center
                .col-md-auto.mb-3.mb-md-0
                  figure
                    img(src="@/assets/curso/tema4/img19.png", alt="", style="width: 260px").m-auto
                .col-md
                  .row.h-100
                    .col-12.bg-c5
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Ingreso de valores exactos en la línea de comandos para mayor precisión.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Creación de círculos concéntricos, útiles en diagramas o patrones radiales.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 El círculo se genera como una curva NURBS editable, que puede ajustarse, subdividirse o transformarse en geometrías más complejas.
                          li.d-flex.mb-0
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Posibilidad de trabajar en cualquier plano activo: Top, Front, Right o un plano personalizado.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/img18.png", alt="", style="width: 350px").m-auto
    Separador
    #t_4_4
    .titulo-segundo.color-acento-contenido
      h2 4.4 Empalmar curvas
    p La herramienta Empalmar permite crear una transición suave mediante un arco entre dos curvas o bordes. Es muy útil para suavizar esquinas, mejorar la estética y evitar aristas pronunciadas en los diseños.
    p.mb-5 #[b El procedimiento para aplicar un empalme es el siguiente:]
    .row.justify-content-center.mb-5
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Paso 1")
            .col-12
              p Activar la herramienta Empalmar desde la barra de herramientas o escribiendo el comando correspondiente.
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 29.] Selección comando empalmar
              .row
                .col-12
                  figure
                    img(src="@/assets/curso/tema4/img20.png", alt="Selección del comando Empalmar desde la barra de herramientas para suavizar las esquinas entre curvas con un radio definido.", style="width: 900px").m-auto
          .row.align-items-center(titulo="Paso 2")
            .col-md.mb-3.mb-md-0
              p.mb-0 Definir el radio del empalme. En este ejemplo, se aplica un valor de 2 mm en las esquinas inferiores del cuadro, ingresado directamente en la línea de comandos.
            .col-md-auto
              figure
                img(src="@/assets/curso/tema4/img12.svg", alt="", style="width: 100px").m-auto
          .row(titulo="Paso 3")
            .col-12
              p Seleccionar las dos curvas o bordes de superficie a unir mediante el empalme, haciendo clic izquierdo sobre cada uno de ellos.
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 30.] Selección curvas a empalmar
              .row
                .col-12
                  figure
                    img(src="@/assets/curso/tema4/img21.png", alt="Selección de dos curvas consecutivas en una esquina del cuadro para aplicar un empalme con radio de 2 mm.", style="width: 900px").m-auto
          .row(titulo="Paso 4")
            .col-12
              p Para redondear otra esquina, hacer clic derecho para repetir el último comando. Ingresar nuevamente el valor del radio (2 mm) y seleccionar las curvas a suavizar.
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 31.] Selección segunda curva a empalmar
              .row
                .col-12
                  figure
                    img(src="@/assets/curso/tema4/img22.png", alt="Aplicación del mismo procedimiento de empalme en otra esquina del cuadro utilizando clic derecho para repetir el comando.", style="width: 900px").m-auto
          .row.align-items-center(titulo="Paso 5")
            .col-md.mb-3.mb-md-0
              p.mb-0 Finalizar el comando y revisar el resultado.
            .col-md-auto
              figure
                img(src="@/assets/curso/tema4/img13.svg", alt="", style="width: 100px").m-auto
    .row.bg-c12
      .col-12
        .p-5
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src="@/assets/curso/tema4/img7.svg", alt="", style="width: 80px").m-auto
            .col-md
              p.mb-0 En caso necesario, el usuario puede deshacer la operación o repetirla con radios distintos, ajustando así el grado de redondeo según las necesidades del diseño. Finalice el comando y revise el resultado; si es necesario, puede deshacer o repetir con distintos radios. Este procedimiento es ideal para suavizar transiciones en diseños, mejorar la estética y evitar bordes afilados en curvas.
    Separador
    #t_4_5
    .titulo-segundo.color-acento-contenido
      h2 4.5 Descomponer
    p.mb-4 La herramienta Descomponer permite dividir un objeto complejo en sus elementos constitutivos más simples, lo que facilita su edición y manipulación individual. Al aplicarla, un bloque puede fragmentarse en curvas, superficies, mallas o textos independientes. Las curvas se dividen en segmentos básicos, mientras que las mallas se separan en caras o componentes. El procedimiento para utilizar esta herramienta es el siguiente:
    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-12
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Paso 1]
                  p Seleccionar el objeto a descomponer con clic izquierdo; el objeto se resaltará en amarillo como confirmación de la selección. 
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 32.] Selección curvas a descomponer
                  .row
                    .col-12
                      figure
                        img(src="@/assets/curso/tema4/img23.png", alt="Selección de curvas conectadas para aplicar el comando Descomponer y separarlas en segmentos independientes.", style="width: 900px").m-auto
    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-md-8.mb-3.mb-md-0
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Paso 2]
                  p.mb-0 Activar la herramienta desde el menú Edición → Descomponer o desde el ícono correspondiente en la barra de herramientas.
                .col-md-4
                  figure
                    img(src="@/assets/curso/tema4/img14.svg", alt="", style="width: 120px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-12
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Paso 3]
                  p Observar cómo el objeto se divide en sus partes básicas, las cuales pueden manipularse de manera independiente.
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 33.] Activaciones y ejecución comando descomponer
                  .row
                    .col-12
                      figure
                        img(src="@/assets/curso/tema4/img24.png", alt="Ejecución del comando Descomponer que divide una curva cerrada, como un rectángulo, en líneas individuales editables.", style="width: 900px").m-auto
    .row.bg-c12
      .col-12
        .p-5
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src="@/assets/curso/tema4/img7.svg", alt="", style="width: 80px").m-auto
            .col-md
              p.mb-0 Este comando resulta esencial cuando se requiere un nivel de control detallado en el diseño. Por ejemplo, al seleccionar un cuadrado, el programa lo reconoce inicialmente como una curva cerrada. Si se necesita editar cada lado por separado, basta con aplicar Descomponer, convirtiéndolo en cuatro segmentos individuales totalmente editables. En conclusión, esta herramienta es fundamental para optimizar la precisión en el modelado, ya que brinda flexibilidad y control al permitir trabajar directamente sobre los elementos básicos de cualquier objeto.
    Separador
    #t_4_6
    .titulo-segundo.color-acento-contenido
      h2 4.6 Unir
    p.mb-4 La herramienta Unir permite combinar dos o más curvas que comparten puntos extremos coincidentes, generando una curva continua a partir de los segmentos seleccionados. Su principal utilidad radica en consolidar geometría fragmentada en un solo objeto, lo que facilita posteriores procesos de edición, modelado o creación de superficies. El procedimiento de uso es el siguiente:
    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-md-8.mb-3.mb-md-0
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b a) Activar herramienta]
                  p.mb-0 Iniciar desde el ícono en la barra de herramientas o escribiendo el comando Unir en la línea de comandos.
                .col-md-4
                  figure
                    img(src="@/assets/curso/tema4/img15.svg", alt="", style="width: 120px").m-auto
    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-12
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b b) Selección de curvas]
                  p Se puede realizar de dos maneras:
                  ul.lista-ul--color
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 Seleccionando cada curva individualmente con clic izquierdo.
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 Realizando una selección por ventana, arrastrando el cursor con el botón izquierdo presionado. Si el arrastre es de abajo hacia arriba, solo se elegirán los objetos contenidos en el recuadro.
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 34.] Selección curvas a unir
                  .row
                    .col-12
                      figure
                        img(src="@/assets/curso/tema4/img25.png", alt="Selección de varias curvas contiguas que se van a unir usando el comando Unir en Rhinoceros.", style="width: 900px").m-auto
    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-md-8.mb-3.mb-md-0
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b c) Confirmar selección]
                  p.mb-0 Iniciar desde el ícono en la barra de herramientas o escribiendo el comando Unir en la línea de comandos.
                .col-md-4
                  figure
                    img(src="@/assets/curso/tema4/img16.svg", alt="", style="width: 120px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-12
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b d) Ejecutar comando]
                  p Confirmar con Enter o dar doble clic izquierdo sobre el ícono de la herramienta. El sistema unirá los segmentos en una única curva.
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 35.] Selección y ejecución comando unir
                  .row
                    .col-12
                      figure
                        img(src="@/assets/curso/tema4/img26.png", alt="Selección de varias curvas contiguas que se van a unir usando el comando Unir en Rhinoceros.", style="width: 900px").m-auto
    .row.bg-c12
      .col-12
        .p-5
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src="@/assets/curso/tema4/img7.svg", alt="", style="width: 80px").m-auto
            .col-md
              p.mb-0 Este comando es clave para mantener la geometría organizada y lista para operaciones más avanzadas de modelado o construcción de superficies.
    Separador
    #t_4_7
    .titulo-segundo.color-acento-contenido
      h2 4.7 Recortar
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p La herramienta Recortar se utiliza para eliminar partes de curvas, superficies o mallas, tomando como referencia otros objetos que actúan como límites de corte. Su función principal es depurar la geometría, ajustándola únicamente a las zonas necesarias para el modelado.
        .row.mb-3
          .col-12
            .p-4.bg-c16
              .row.align-items-center
                .col-md-auto.mb-3.mb-md-0
                  figure
                    img(src="@/assets/curso/tema4/img27.png", alt="", style="width: 260px").m-auto
                .col-md
                  .row.h-100
                    .col-12.bg-c5
                      .p-4
                        p #[b El comando puede activarse de dos formas:]
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Primero seleccionando la herramienta y luego los objetos a recortar.
                          li.d-flex.mb-0
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 O bien seleccionando los objetos y posteriormente activando la herramienta, de modo que el recorte se aplique inmediatamente.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/img28.png", alt="", style="width: 380px").m-auto
    .row.mb-5
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Ejemplo de aplicación
    p.mb-4 Si se desea conservar únicamente un arco de un círculo, basta con dibujar una línea que lo atraviese. Usando la herramienta Recortar, se selecciona la línea como límite y luego se elimina la parte del círculo no deseada, quedando únicamente el arco útil. En el caso práctico:
    .row.justify-content-center.mb-5
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row.align-items-center(titulo="Paso 1")
            .col-md.mb-3.mb-md-0
              p.mb-0 Dibujar un círculo de 50 mm de radio y trazar una línea que lo divida.
            .col-md-auto
              figure
                img(src="@/assets/curso/tema4/img17.svg", alt="", style="width: 100px").m-auto
          .row(titulo="Paso 2")
            .col-12
              p Seleccionarlo manteniendo presionado el clic izquierdo y arrastrando el cursor para abarcar las curvas (si se arrastra de abajo hacia arriba, solo se seleccionan los objetos contenidos en el recuadro).
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 36.] Selección curvas a recortar
              .row
                .col-12
                  figure
                    img(src="@/assets/curso/tema4/img29.png", alt="Selección de un círculo y una línea que lo atraviesa como preparación para aplicar el comando Recortar.", style="width: 900px").m-auto
          .row(titulo="Paso 3")
            .col-12
              p Activar la herramienta Recortar desde la barra de herramientas o escribiendo el comando.
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 37.] Selección comando recortar
              .row
                .col-12
                  figure
                    img(src="@/assets/curso/tema4/img30.png", alt="Selección del comando Recortar desde la barra de herramientas, utilizado para eliminar partes de curvas o superficies.", style="width: 900px").m-auto
          .row.align-items-center(titulo="Paso 4")
            .col-md.mb-3.mb-md-0
              p.mb-0 Hacer clic directamente sobre las líneas o curvas que se deseen eliminar o cortar.
            .col-md-auto
              figure
                img(src="@/assets/curso/tema4/img18.svg", alt="", style="width: 100px").m-auto
          .row(titulo="Paso 5")
            .col-12
              p Confirmar la acción con Enter o seguir las instrucciones de la línea de comandos para completar el recorte. 
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 38.] Ejecución comando recortar
              .row
                .col-12
                  figure
                    img(src="@/assets/curso/tema4/img31.png", alt="Resultado final del uso del comando Recortar, mostrando la parte conservada del círculo después del corte.", style="width: 900px").m-auto
    .row.bg-c12.mb-5
      .col-12
        .p-5
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src="@/assets/curso/tema4/img7.svg", alt="", style="width: 80px").m-auto
            .col-md
              p.mb-0 Este procedimiento permite depurar la geometría del modelo, quedando únicamente las partes útiles para el diseño.
    .row.mb-5
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Importancia técnica
    p.mb-4 El comando Recortar es indispensable en la preparación de geometrías, ya que permite:
    .row.justify-content-center
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .p-2.bg-c9.shadow-sm
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema4/img19.svg", alt="", style="width: 90px").m-auto
            .col
              p.mb-0 #[b 01]
              p.mb-0 Ajustar contornos de patrones o perfiles.
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .p-2.bg-c9.shadow-sm
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema4/img20.svg", alt="", style="width: 90px").m-auto
            .col
              p.mb-0 #[b 02]
              p.mb-0 Eliminar excedentes en intersecciones de curvas.
      .col-md-6.col-lg-4
        .p-2.bg-c9.shadow-sm
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema4/img21.svg", alt="", style="width: 90px").m-auto
            .col
              p.mb-0 #[b 03]
              p.mb-0 Generar formas más precisas a partir de geometrías básicas.
    Separador
    #t_4_8
    .titulo-segundo.color-acento-contenido
      h2 4.8 Partir
    p.mb-4 La herramienta Partir en Rhinoceros permite dividir objetos —curvas, superficies o sólidos— en partes separadas mediante uno o más objetos utilizados como planos o líneas de corte. Su uso es esencial cuando se requiere trabajar con segmentos individuales de una geometría previamente unificada. El procedimiento básico es el siguiente:
    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-md-8.mb-3.mb-md-0
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Paso 1]
                  p.mb-0 Seleccionar el objeto o los objetos que se desean dividir.
                .col-md-4
                  figure
                    img(src="@/assets/curso/tema4/img22.svg", alt="", style="width: 120px").m-auto
    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-12
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Paso 2]
                  p Activar el comando Partir desde la barra de herramientas, el menú o escribiendo el comando en la línea de comandos. 
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 39.] Selección comando Partir
                  .row
                    .col-12
                      figure
                        img(src="@/assets/curso/tema4/img32.png", alt="Selección del comando Partir desde la barra de herramientas de Rhinoceros 8, que permite dividir geometrías en partes separadas.", style="width: 900px").m-auto
    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-12
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Paso 3]
                  p Seleccionar los objetos que funcionarán como herramienta de corte (curvas, líneas, superficies u otras geometrías que atraviesen o delimiten la zona a dividir).
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 40.] Selección herramienta de corte
                  .row
                    .col-12
                      figure
                        img(src="@/assets/curso/tema4/img33.png", alt="Selección de la herramienta de corte (línea) que será utilizada para partir una curva u objeto.", style="width: 900px").m-auto
    .row.justify-content-center
      .col-lg-10
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-12
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Paso 4]
                  p Confirmar la acción para que Rhinoceros ejecute el corte, generando fragmentos separados según las intersecciones definidas.
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 41.] Ejecución comando corte
                  .row
                    .col-12
                      figure
                        img(src="@/assets/curso/tema4/img34.png", alt="Resultado del comando Partir, mostrando el objeto original dividido en dos o más partes independientes.", style="width: 900px").m-auto
    Separador
    #t_4_9
    .titulo-segundo.color-acento-contenido
      h2 4.9 Agrupar
    p.mb-4 La herramienta Agrupar permite combinar varios objetos seleccionados en una sola unidad lógica llamada grupo. Aunque los objetos mantienen su identidad individual, al estar agrupados se comportan como un único elemento para selección y transformación. Para aplicar este comando, se sigue una operativa básica:

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
