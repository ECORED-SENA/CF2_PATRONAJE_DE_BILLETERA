<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Ejemplos de operaciones básicas
    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/img1.png", alt="", style="width: 285px").m-auto
      .col-lg(data-aos="fade-left")
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
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema4/img1.svg", alt="", style="width: 80px").m-auto
            .col-md(data-aos="fade-left")
              p.mb-0 #[b Nota técnica.] La elección del orden no altera el resultado, pero puede optimizar el flujo de trabajo según la complejidad del modelo o la cantidad de objetos a manipular. En Rhinoceros, todas las líneas son consideradas curvas, ya sean rectas o curvas, siendo la base de la mayoría de las herramientas de dibujo y edición.
    Separador
    #t_4_1
    .titulo-segundo.color-acento-contenido
      h2 4.1 Líneas y polilíneas
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
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
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/img3.png", alt="", style="width: 360px").m-auto
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 20.] Selección comando polilínea
    .row.mb-5(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img4.png", alt="Imagen de la selección del comando Polilínea desde la barra de herramientas en Rhinoceros, como primer paso para dibujar formas básicas en 2D.", style="width: 1000px").m-auto
    p.mb-5(data-aos="fade-down") El procedimiento para dibujar una polilínea es el siguiente:
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .row
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-md-8.mb-3.mb-md-0(data-aos="fade-right")
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 90px").m-auto
                    .col
                      p.mb-0 #[b Paso 1]
                  p.mb-0 Definir el primer punto con clic izquierdo.
                .col-md-4(data-aos="fade-left")
                  figure
                    img(src="@/assets/curso/tema4/img2.svg", alt="", style="width: 120px").m-auto
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-left")
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
      .col-lg-10(data-aos="fade-right")
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
      .col-lg-10(data-aos="fade-left")
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
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 22.] Polilínea dibujada
    .row(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img6.png", alt="Vista del resultado final tras trazar una polilínea con varios segmentos conectados mediante clics sucesivos.", style="width: 1000px").m-auto
    Separador
    #t_4_2
    .titulo-segundo.color-acento-contenido
      h2 4.2 Cuadrados y rectángulos
    .row.mb-5
      .col-lg-auto.mb-3.mb-lg-0.pe-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/img7.png", alt="", style="width: 370px").m-auto
      .col-lg.bg-c2(data-aos="fade-left")
        .row.h-100.align-items-center
          .col-12
            .p-4
              p.text-white.mb-0 En Rhinoceros  se pueden crear cuadrados o rectángulos de diferentes maneras, según las necesidades del diseño. Los dos métodos más comunes son los siguientes:
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Con polilínea
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
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
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/img8.png", alt="", style="width: 350px").m-auto
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 23.] Construcción cuadrado a partir de Polilíneas
    .row.mb-5(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img9.png", alt="Dibujo de un cuadrado construido a partir de líneas individuales con la herramienta Polilínea, siguiendo restricciones ortogonales para mantener la geometría precisa.", style="width: 1000px").m-auto
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Con la herramienta rectángulo
    p.mb-5(data-aos="fade-down") Este método es más rápido y preciso, ya que permite definir esquinas y dimensiones directamente:
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
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
      .col-lg-10(data-aos="fade-left")
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
      .col-lg-10(data-aos="fade-right")
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
      .col-lg-10(data-aos="fade-left")
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
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema4/img7.svg", alt="", style="width: 80px").m-auto
            .col-md(data-aos="fade-left")
              p.mb-0 Al finalizar, el objeto se genera como una polilínea cerrada, editable como una sola unidad.
    Separador
    #t_4_3
    .titulo-segundo.color-acento-contenido
      h2 4.3 Círculos
    .row.mb-5
      .col-lg-auto.mb-3.mb-lg-0.pe-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/img13.png", alt="", style="width: 370px").m-auto
      .col-lg.bg-c22(data-aos="fade-left")
        .row.h-100.align-items-center
          .col-12
            .p-4
              p.text-white.mb-0 Los círculos son una de las formas básicas más utilizadas en el modelado de Rhinoceros 8. El software ofrece varias maneras de crearlos, desde las más simples hasta opciones avanzadas para un control más preciso.
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Cómo acceder a la herramienta
    .row.align-items-center.mb-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
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
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/img14.png", alt="", style="width: 330px").m-auto
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 27.] Selección comando círculo
    .row.mb-5(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img16.png", alt="Selección del comando Círculo desde la barra de herramientas, representado por un ícono de forma circular en Rhinoceros.", style="width: 1000px").m-auto
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Métodos principales para crear círculos
    p.mb-5(data-aos="fade-down") Existen diversos métodos según el tipo de definición geométrica que se requiera:
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
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
      .col-lg-10(data-aos="fade-left")
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
      .col-lg-10(data-aos="fade-right")
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
      .col-lg-10(data-aos="fade-left")
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
      .col-lg-10(data-aos="fade-right")
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
    .row.mb-5(data-aos="fade-up")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Funcionalidades adicionales
    .row.align-items-center
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
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
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/img18.png", alt="", style="width: 350px").m-auto
    Separador
    #t_4_4
    .titulo-segundo.color-acento-contenido
      h2 4.4 Empalmar curvas
    p(data-aos="fade-down") La herramienta Empalmar permite crear una transición suave mediante un arco entre dos curvas o bordes. Es muy útil para suavizar esquinas, mejorar la estética y evitar aristas pronunciadas en los diseños.
    p.mb-5(data-aos="fade-down") #[b El procedimiento para aplicar un empalme es el siguiente:]
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
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema4/img7.svg", alt="", style="width: 80px").m-auto
            .col-md(data-aos="fade-left")
              p.mb-0 En caso necesario, el usuario puede deshacer la operación o repetirla con radios distintos, ajustando así el grado de redondeo según las necesidades del diseño. Finalice el comando y revise el resultado; si es necesario, puede deshacer o repetir con distintos radios. Este procedimiento es ideal para suavizar transiciones en diseños, mejorar la estética y evitar bordes afilados en curvas.
    Separador
    #t_4_5
    .titulo-segundo.color-acento-contenido
      h2 4.5 Descomponer
    p.mb-4(data-aos="fade-down") La herramienta Descomponer permite dividir un objeto complejo en sus elementos constitutivos más simples, lo que facilita su edición y manipulación individual. Al aplicarla, un bloque puede fragmentarse en curvas, superficies, mallas o textos independientes. Las curvas se dividen en segmentos básicos, mientras que las mallas se separan en caras o componentes. El procedimiento para utilizar esta herramienta es el siguiente:
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
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
      .col-lg-10(data-aos="fade-left")
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
      .col-lg-10(data-aos="fade-right")
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
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema4/img7.svg", alt="", style="width: 80px").m-auto
            .col-md(data-aos="fade-left")
              p.mb-0 Este comando resulta esencial cuando se requiere un nivel de control detallado en el diseño. Por ejemplo, al seleccionar un cuadrado, el programa lo reconoce inicialmente como una curva cerrada. Si se necesita editar cada lado por separado, basta con aplicar Descomponer, convirtiéndolo en cuatro segmentos individuales totalmente editables. En conclusión, esta herramienta es fundamental para optimizar la precisión en el modelado, ya que brinda flexibilidad y control al permitir trabajar directamente sobre los elementos básicos de cualquier objeto.
    Separador
    #t_4_6
    .titulo-segundo.color-acento-contenido
      h2 4.6 Unir
    p.mb-4(data-aos="fade-down") La herramienta Unir permite combinar dos o más curvas que comparten puntos extremos coincidentes, generando una curva continua a partir de los segmentos seleccionados. Su principal utilidad radica en consolidar geometría fragmentada en un solo objeto, lo que facilita posteriores procesos de edición, modelado o creación de superficies. El procedimiento de uso es el siguiente:
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
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
      .col-lg-10(data-aos="fade-left")
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
      .col-lg-10(data-aos="fade-right")
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
      .col-lg-10(data-aos="fade-left")
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
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema4/img7.svg", alt="", style="width: 80px").m-auto
            .col-md(data-aos="fade-left")
              p.mb-0 Este comando es clave para mantener la geometría organizada y lista para operaciones más avanzadas de modelado o construcción de superficies.
    Separador
    #t_4_7
    .titulo-segundo.color-acento-contenido
      h2 4.7 Recortar
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
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
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/img28.png", alt="", style="width: 380px").m-auto
    .row.mb-5(data-aos="fade-left")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Ejemplo de aplicación
    p.mb-4(data-aos="fade-down") Si se desea conservar únicamente un arco de un círculo, basta con dibujar una línea que lo atraviese. Usando la herramienta Recortar, se selecciona la línea como límite y luego se elimina la parte del círculo no deseada, quedando únicamente el arco útil. En el caso práctico:
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
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema4/img7.svg", alt="", style="width: 80px").m-auto
            .col-md(data-aos="fade-left")
              p.mb-0 Este procedimiento permite depurar la geometría del modelo, quedando únicamente las partes útiles para el diseño.
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Importancia técnica
    p.mb-4(data-aos="fade-down") El comando Recortar es indispensable en la preparación de geometrías, ya que permite:
    .row.justify-content-center(data-aos="fade-up")
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
    p.mb-4(data-aos="fade-down") La herramienta Partir en Rhinoceros permite dividir objetos —curvas, superficies o sólidos— en partes separadas mediante uno o más objetos utilizados como planos o líneas de corte. Su uso es esencial cuando se requiere trabajar con segmentos individuales de una geometría previamente unificada. El procedimiento básico es el siguiente:
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
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
      .col-lg-10(data-aos="fade-left")
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
      .col-lg-10(data-aos="fade-right")
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
      .col-lg-10(data-aos="fade-left")
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
    p.mb-4(data-aos="fade-down") La herramienta Agrupar permite combinar varios objetos seleccionados en una sola unidad lógica llamada grupo. Aunque los objetos mantienen su identidad individual, al estar agrupados se comportan como un único elemento para selección y transformación. Para aplicar este comando, se sigue una operativa básica:
    .row.justify-content-center.mb-5
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Paso 1")
            .col-12
              p Seleccionar los objetos independientes que se desean asociar en un grupo.
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 42.] Selección curvas a agrupar
              .row
                .col-12
                  figure
                    img(src="@/assets/curso/tema4/img35.png", alt="Selección de múltiples curvas para agruparlas en una sola unidad lógica utilizando el comando Agrupar.", style="width: 900px").m-auto
          .row(titulo="Paso 2")
            .col-12
              p Ejecutar el comando Agrupar desde el menú Edición, desde la barra de herramientas o escribiendo Agrupar en la línea de comandos.
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 43.] Ejecución comando agrupar
              .row
                .col-12
                  figure
                    img(src="@/assets/curso/tema4/img36.png", alt="Ejecución del comando Agrupar desde la barra de herramientas, donde las curvas se comportan como un único objeto.", style="width: 900px").m-auto
          .row.align-items-center(titulo="Paso 3")
            .col-md.mb-3.mb-md-0
              p.mb-0 Una vez agrupados, al hacer clic sobre cualquiera de los objetos, se selecciona automáticamente todo el grupo.
            .col-md-auto
              figure
                img(src="@/assets/curso/tema4/img23.svg", alt="", style="width: 100px").m-auto
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Ventajas principales
    .row.mb-5
      .col-lg-auto.mb-3.mb-lg-0.pe-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/img37.png", alt="", style="width: 370px").m-auto
      .col-lg.bg-c2(data-aos="fade-left")
        .row.h-100.align-items-center
          .col-12
            .p-4
              p.text-white.mb-0 Este comando facilita el manejo de conjuntos complejos de objetos, evitando la necesidad de seleccionar cada elemento de forma individual. Es ideal para manipular componentes relacionados, como piezas de un ensamble o elementos gráficos que deban moverse o transformarse en conjunto.
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Consideraciones técnicas
    .row.align-items-center
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Al utilizar esta herramienta, es importante tener en cuenta lo siguiente:
        .row.mb-3
          .col-12
            .p-4.bg-c15
              .row.align-items-center
                .col-md-auto.mb-3.mb-md-0
                  figure
                    img(src="@/assets/curso/tema4/img38.png", alt="", style="width: 196px").m-auto
                .col-md
                  .row.h-100
                    .col-12.bg-c5
                      .p-4
                        ul.lista-ul--color
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Agrupar no une físicamente los objetos: cada uno conserva su identidad y propiedades originales, tratándose de una asociación lógica.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Algunas operaciones como cortar, partir o modificar pueden afectar el estado del grupo o deshacerlo.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Es posible agrupar objetos de diferentes tipos (curvas, sólidos, superficies, mallas) en un mismo grupo.
                        ul.lista-ul--color.mb-0.ms-4
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Se pueden añadir o eliminar objetos de un grupo existente mediante comandos específicos (Añadir a grupo y Eliminar de grupo).
        p.mb-0 Este enfoque ofrece orden y eficiencia en la manipulación de modelos complejos, permitiendo trabajar de manera estructurada sin perder la posibilidad de editar cada objeto por separado cuando sea necesario.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/img39.png", alt="", style="width: 380px").m-auto
    Separador
    #t_4_10
    .titulo-segundo.color-acento-contenido
      h2 4.10 Desagrupar
    .row.align-items-center.mb-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p La herramienta Desagrupar revierte la acción de agrupar, separando un grupo en sus componentes originales independientes. De esta manera, cada objeto recupera su autonomía para ser editado o manipulado de forma individual. El procedimiento para usar esta herramienta es sencillo:
        .row.mb-3
          .col-12
            .p-4.bg-c7
              .row.align-items-center
                .col-md-auto.mb-3.mb-md-0
                  figure
                    img(src="@/assets/curso/tema4/img40.png", alt="", style="width: 296px").m-auto
                .col-md
                  .row.h-100
                    .col-12.bg-c5
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Seleccionar el grupo que se desea desagrupar.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Ejecutar el comando Desagrupar desde el menú o escribiéndolo directamente en la línea de comandos.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/img41.png", alt="", style="width: 390px").m-auto
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 44.] Selección y ejecución comando desagrupar
    .row.mb-5(data-aos="fade-right")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img42.png", alt="Aplicación del comando Desagrupar para devolver a los objetos agrupados su estado independiente y editable.", style="width: 1000px").m-auto
    .row.bg-c12
      .col-12
        .p-5
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema4/img7.svg", alt="", style="width: 80px").m-auto
            .col-md(data-aos="fade-left")
              p.mb-0 Tras completar la acción, los objetos dejan de comportarse como una sola unidad y pueden volver a seleccionarse, modificarse o reorganizarse de manera individual.
    Separador
    #t_4_11
    .titulo-segundo.color-acento-contenido
      h2 4.11 Mover
    .row.bg-c23.mb-5
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p El comando Mover en Rhinoceros  es una herramienta fundamental que permite trasladar uno o varios objetos seleccionados de una posición a otra dentro del espacio de trabajo con gran precisión. Puede aplicarse a cualquier tipo de geometría: curvas, superficies, sólidos o mallas. El procedimiento de uso se desarrolla en varias etapas:
              .row.mb-3
                .col-12
                  .p-4.bg-c11
                    .row.align-items-center
                      .col-md-auto.mb-3.mb-md-0
                        figure
                          img(src="@/assets/curso/tema4/img44.png", alt="", style="width: 180px").m-auto
                      .col-md
                        .row.h-100
                          .col-12.bg-c5
                            .p-4
                              ul.lista-ul--color.mb-0
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Selección de objetos: elegir los elementos que se desea desplazar.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Definición del punto base: marcar un punto de referencia en la geometría seleccionada desde el cual se realizará el movimiento, ya sea con un clic en la vista o ingresando coordenadas exactas.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Destino del movimiento: especificar el punto final hacia el cual se trasladarán los objetos, definido también con un clic o con valores numéricos en la línea de comandos.
              p.mb-0 Al aplicar este comando, el usuario puede elegir entre distintas opciones de movimiento:
            .col-lg-4(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema4/img45.png", alt="", style="width: 360px").m-auto
          .row.justify-content-center.mb-5(data-aos="fade-down")
            .col-md-6.col-lg-4.mb-4.mb-lg-0
              .p-4.bg-c14
                figure.mb-3
                  img(src="@/assets/curso/tema4/img24.svg", alt="", style="width: 100px").m-auto
                p.text-center #[b Mover normal]
                p.text-center.mb-0 Desplaza el objeto en dirección normal respecto a otra geometría.
            .col-md-6.col-lg-4.mb-4.mb-lg-0
              .p-4.bg-c14
                figure.mb-3
                  img(src="@/assets/curso/tema4/img25.svg", alt="", style="width: 100px").m-auto
                p.text-center #[b Mover vertical]
                p.text-center.mb-0 Traslada los objetos de forma perpendicular al plano de construcción activo.
            .col-md-6.col-lg-4
              .p-4.bg-c14
                figure.mb-3
                  img(src="@/assets/curso/tema4/img26.svg", alt="", style="width: 100px").m-auto
                p.text-center #[b Mover por curva o subcurva]
                p.text-center.mb-0 Permite mover únicamente un segmento específico de la curva seleccionada.
          .row.mb-5(data-aos="fade-right")
            .col-auto
              .px-3.py-2.bg-c16
                h3.mb-0 Herramientas complementarias
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p Además de la ejecución básica, el comando puede apoyarse en recursos adicionales:
              .row.mb-3
                .col-12
                  .p-4.bg-c7
                    .row.align-items-center
                      .col-md-auto.mb-3.mb-md-0
                        figure
                          img(src="@/assets/curso/tema4/img46.png", alt="", style="width: 296px").m-auto
                      .col-md
                        .row.h-100
                          .col-12.bg-c5
                            .p-4
                              ul.lista-ul--color.mb-0
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Arrastrar objetos con el ratón de manera gráfica.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Introducir valores numéricos durante el arrastre para asegurar precisión.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Usar referencias a objetos (puntos, centros, intersecciones) para alinear movimientos.
                                li.d-flex.mb-0
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Emplear atajos de teclado que restringen el movimiento a ejes específicos.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema4/img47.png", alt="", style="width: 380px").m-auto
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Uso del Gumball para mover
    .row.mb-5
      .col-lg-auto.mb-3.mb-lg-0.pe-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/img48.png", alt="", style="width: 370px").m-auto
      .col-lg.bg-c24(data-aos="fade-left")
        .row.h-100.align-items-center
          .col-12
            .p-4
              p.mb-0 El widget Gumball ofrece una interfaz visual para mover objetos mediante manipuladores gráficos. Con él, es posible desplazar, rotar y escalar elementos directamente sobre la geometría seleccionada, lo que agiliza el control y la edición.
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Ejemplo práctico
    p.mb-5(data-aos="fade-down") Para trasladar una esfera desde su centro al origen de coordenadas (0,0,0):
    .row.justify-content-center.mb-5
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row.align-items-center(titulo="a) Seleccionar objeto")
            .col-md.mb-3.mb-md-0
              p.mb-0 Seleccionar la esfera.
            .col-md-auto
              figure
                img(src="@/assets/curso/tema4/img27.svg", alt="", style="width: 100px").m-auto
          .row(titulo="b) Activar comando")
            .col-12
              p Iniciar el comando Mover desde la barra de herramientas o la línea de comandos.
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 45.] Selección comando mover
              .row
                .col-12
                  figure
                    img(src="@/assets/curso/tema4/img49.png", alt="Selección del comando Mover desde la barra de herramientas para desplazar objetos a una nueva ubicación.", style="width: 900px").m-auto
          .row(titulo="c) Definir punto base")
            .col-12
              p Indicar el centro de la esfera como punto base utilizando referencias a objetos.
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 46.] Punto base para mover las curvas
              .row
                .col-12
                  figure
                    img(src="@/assets/curso/tema4/img50.png", alt="Designación del punto base desde donde se iniciará el movimiento del objeto, utilizando referencias de objeto para precisión.", style="width: 900px").m-auto
          .row(titulo="d) Establecer destino")
            .col-12
              p Ingresar las coordenadas 0,0,0 como destino y confirmar el movimiento.
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 47.] Selección punto al que se van amover las curvas
              .row
                .col-12
                  figure
                    img(src="@/assets/curso/tema4/img51.png", alt="Especificación del punto de destino donde se ubicará el objeto movido, con coordenadas (0, 0, 0).", style="width: 900px").m-auto
    .row.bg-c12
      .col-12
        .p-5
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema4/img7.svg", alt="", style="width: 80px").m-auto
            .col-md(data-aos="fade-left")
              p.mb-0 El resultado es la traslación exacta de la esfera al origen del sistema. Este comando resulta esencial para posicionar piezas, ajustar modelos y preparar geometrías para fases posteriores de diseño o fabricación, combinando precisión y flexibilidad dentro de Rhinoceros.
    Separador
    #t_4_12
    .titulo-segundo.color-acento-contenido
      h2 4.12 Copiar
    p.mb-4(data-aos="fade-down") El comando Copiar en Rhinoceros permite crear duplicados idénticos de uno o varios objetos seleccionados. La geometría original permanece intacta y las copias pueden colocarse en diferentes posiciones dentro del espacio de trabajo, lo que resulta útil para generar patrones, repeticiones o ensambles. El funcionamiento del comando puede describirse en varias etapas:
    .row.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/img52.png", alt="", style="width: 300px").m-auto
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row.align-items-center(titulo="a) Selección de objetos")
            .col-12
              p.mb-0 Elegir los elementos que se desean copiar (curvas, superficies, sólidos, mallas, etc.).
          .row.align-items-center(titulo="b) Definición del punto base")
            .col-12
              p.mb-0 Establecer un punto de referencia en el objeto o en el espacio desde el cual se generará la copia. Puede seleccionarse con clic o introduciendo coordenadas exactas.
          .row.align-items-center(titulo="c) Ubicación de la copia")
            .col-12
              p.mb-0 Indicar la posición de destino de la copia con un clic, movimiento libre del ratón o ingresando valores numéricos para mayor precisión.
          .row.align-items-center(titulo="d) Múltiples copias")
            .col-12
              p.mb-0 Repetir el desplazamiento las veces necesarias para crear varias copias consecutivas.
          .row.align-items-center(titulo="e) Uso de ayudas de modelado")
            .col-12
              p.mb-0 Apoyarse en referencias a objetos, rejillas o restricciones en ejes para garantizar un posicionamiento controlado.
    .row.bg-c12.mb-5
      .col-12
        .p-5
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema4/img7.svg", alt="", style="width: 80px").m-auto
            .col-md(data-aos="fade-left")
              p.mb-0 Al aplicar este comando, conviene tener presente lo siguiente:
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Diferencias con el comando Mover
    .row.mb-5
      .col-lg-auto.mb-3.mb-lg-0.pe-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/img53.png", alt="", style="width: 370px").m-auto
      .col-lg.bg-c2(data-aos="fade-left")
        .row.h-100.align-items-center
          .col-12
            .p-4
              p.text-white.mb-0 El comando Copiar se distingue de Mover porque genera duplicados, mientras que Mover traslada el objeto original sin crear copias adicionales.
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Uso del Gumball para copiar
    p.mb-5(data-aos="fade-down") El widget Gumball también permite realizar copias, ofreciendo una interfaz visual con manipuladores interactivos. A través de él, se pueden definir con rapidez la cantidad de copias y la distancia entre ellas.
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 48.] Copia con Gumball
    .row.mb-5(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img54.png", alt="Uso del widget Gumball para realizar una copia visual del objeto mediante manipulación directa en la vista 3D.", style="width: 1000px").m-auto
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Ejemplo práctico
    .row.mb-5
      .col-12
        .p-4.bg-c25
          .row
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema4/img55.png", alt="", style="width: 170px").m-auto
            .col-md(data-aos="fade-left")
              .p-3.bg-c5.h-100
                .row
                  .col-12
                    p Para copiar una parte de un círculo:
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.far.fa-arrow-alt-circle-right
                        |
                        p.mb-0 Seleccionar el segmento a copiar.
                      li.d-flex.mb-0
                        i.far.fa-arrow-alt-circle-right
                        |
                        p.mb-0 Activar el comando Copiar.
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 49.] Selección comando Copiar
    .row.mb-5(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img56.png", alt="Selección del comando Copiar desde la barra de herramientas para duplicar objetos en el espacio de trabajo.", style="width: 1000px").m-auto
    .row.mb-5
      .col-12
        .p-4.bg-c25
          .row
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema4/img57.png", alt="", style="width: 170px").m-auto
            .col-md(data-aos="fade-left")
              .p-3.bg-c5.h-100
                .row
                  .col-12
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.far.fa-arrow-alt-circle-right
                        |
                        p.mb-0 Definir un punto base (por ejemplo, una esquina de la media luna).
                      li.d-flex
                        i.far.fa-arrow-alt-circle-right
                        |
                        p.mb-0 Indicar la nueva ubicación de la copia mediante clic o introducción de coordenadas.
                      li.d-flex.mb-0
                        i.far.fa-arrow-alt-circle-right
                        |
                        p.mb-0 Repetir el proceso si se desean copias adicionales consecutivas. (Figura 50)
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 50.] Copiado de curvas
    .row(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img58.png", alt="Resultado de la acción de copiar, con la curva duplicada ubicada en una nueva posición dentro del plano.", style="width: 1000px").m-auto
    Separador
    #t_4_13
    .titulo-segundo.color-acento-contenido
      h2 4.13 Rotar
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Este método consiste en construir el cuadro a partir de segmentos consecutivos:
        .row.mb-3
          .col-12
            .p-4.bg-c15
              .row
                .col-12
                  .p-4.bg-c5
                    p El comando Rotar en Rhinoceros  permite girar uno o varios objetos seleccionados alrededor de un eje definido, modificando su orientación en el espacio sin alterar su forma ni su tamaño. Es una herramienta esencial para ajustar posiciones, crear simetrías y organizar piezas en ensambles. El procedimiento de uso puede dividirse en varios pasos:
                    ol.lista-ol--cuadro.lista-ol
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span a
                        |
                        p.mb-0 Selección de objetos: elegir los elementos a rotar (curvas, superficies, sólidos, mallas).
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span b
                        |
                        p.mb-0 Definición del punto base o centro de rotación: establecer el punto de pivote mediante un clic o introduciendo coordenadas exactas.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span c
                        |
                        p.mb-0 Definición del primer punto del eje: seleccionar un segundo punto que defina la orientación del eje de rotación y determine el plano de giro.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span d
                        |
                        p.mb-0 Ángulo de rotación: especificar un valor numérico (en grados) o indicar gráficamente el punto final de la rotación.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span e
                        |
                        p.mb-0 Confirmación: validar la operación para que los objetos roten según los parámetros definidos.
        p.mb-0 Al ejecutar este comando, conviene tener en cuenta ciertas características:
      .col-lg-4.orer-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/img59.png", alt="", style="width: 350px").m-auto
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Características y opciones
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/img61.png", alt="", style="width: 360px").m-auto
      .col-lg-8(data-aos="fade-left")
        p La herramienta de rotación ofrece gran flexibilidad:
        .row
          .col-12
            .p-4.bg-c7
              .row.align-items-center
                .col-md-auto.mb-3.mb-md-0
                  figure
                    img(src="@/assets/curso/tema4/img60.png", alt="", style="width: 280px").m-auto
                .col-md
                  .row.h-100
                    .col-12.bg-c5
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Puede realizarse en cualquier plano definido por el usuario, no solo en los planos cartesianos estándar.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Es posible aplicar rotaciones absolutas o relativas, según la referencia seleccionada.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Se admiten ángulos positivos y negativos para giros en sentido horario o antihorario.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Se recomienda activar la opción Orto para obtener giros rectos.
                          li.d-flex.mb-0
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Se pueden usar referencias de objeto para un pivote exacto en vértices, centros o intersecciones.
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Uso del Gumball para rotar
    .row.mb-5
      .col-lg.bg-c26.order-2.order-lg-1(data-aos="fade-right")
        .row.h-100.align-items-center
          .col-12
            .p-4
              p.text-white.mb-0 Además del comando tradicional, el Gumball ofrece manipuladores visuales en forma de aros interactivos, que permiten girar objetos de manera rápida y precisa con retroalimentación en tiempo real.
      .col-lg-auto.mb-3.mb-lg-0.ps-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/img62.png", alt="", style="width: 370px").m-auto
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Ejemplo práctico
    .row.mb-5
      .col-12
        .p-4.bg-c25
          .row
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema4/img63.png", alt="", style="width: 170px").m-auto
            .col-md(data-aos="fade-left")
              .p-3.bg-c5.h-100
                .row
                  .col-12
                    p Para rotar un rectángulo:
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.far.fa-arrow-alt-circle-right
                        |
                        p.mb-0 Seleccionarlo.
                      li.d-flex.mb-0
                        i.far.fa-arrow-alt-circle-right
                        |
                        p.mb-0 Activar el comando Rotar.
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 51.] Selección comando Rotar
    .row.mb-5(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img64.png", alt="Selección del comando Rotar desde la barra de herramientas, utilizado para girar objetos alrededor de un punto definido.", style="width: 1000px").m-auto
    .row.mb-5
      .col-12
        .p-4.bg-c25
          .row
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema4/img65.png", alt="", style="width: 190px").m-auto
            .col-md(data-aos="fade-left")
              .p-3.bg-c5.h-100
                .row
                  .col-12
                    p Para rotar un rectángulo:
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.far.fa-arrow-alt-circle-right
                        |
                        p.mb-0 Definir un vértice como centro o punto base.
                      li.d-flex.mb-0
                        i.far.fa-arrow-alt-circle-right
                        |
                        p.mb-0 Establecer el eje de rotación, normalmente perpendicular al plano del rectángulo.
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 52.] Selección curvas a rotar
    .row.mb-5(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img66.png", alt="Selección de curvas (un rectángulo) que serán rotadas desde un vértice como punto de pivote.", style="width: 1000px").m-auto
    .row.mb-5
      .col-12
        .p-4.bg-c25
          .row
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema4/img67.png", alt="", style="width: 160px").m-auto
            .col-md(data-aos="fade-left")
              .p-3.bg-c5.h-100
                .row
                  .col-12
                    p Para rotar un rectángulo:
                    ul.lista-ul--color.mb-0
                      li.d-flex.mb-0
                        i.far.fa-arrow-alt-circle-right
                        |
                        p.mb-0 Girar el objeto en la dirección deseada.
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 53.] Objeto rotado
    .row.mb-5(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img68.png", alt="Resultado del comando Rotar, mostrando el objeto girado respecto al eje definido.", style="width: 1000px").m-auto
    .row.bg-c12
      .col-12
        .p-5
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema4/img7.svg", alt="", style="width: 80px").m-auto
            .col-md(data-aos="fade-left")
              p.mb-0 El comando Rotar es vital para el posicionamiento y alineación precisa de componentes, además de ser una herramienta clave en la creación de patrones, ensambles y configuraciones complejas dentro de Rhinoceros.
    Separador
    #t_4_14
    .titulo-segundo.color-acento-contenido
      h2 4.14 Desfasar
    .row.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        .row.bg-c27
          .col-auto.px-0.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema4/img70.png", alt="", style="width: 100px").m-auto
          .col
            .row.h-100.align-items-center
              .col-12
                .p-4.p-lg-0
                  p.mb-0 El comando Desfasar en Rhinoceros  permite crear una copia de una curva, superficie o malla a una distancia constante del original, generando así una geometría paralela desplazada. Es una herramienta muy utilizada para crear bordes, contornos interiores o exteriores y espesores definidos en diseños de piezas. Este comando se encuentra ubicado como un subcomando dentro de Empalmar en la barra de herramientas. Para acceder, es necesario hacer clic en la pequeña flecha negra situada en la esquina inferior derecha del ícono de Empalmar, lo que desplegará opciones adicionales, incluyendo Desfasar.
      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/img71.png", alt="", style="width: 560px").m-auto
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 54.] Acceso icono del comando desfasar
    .row.mb-5(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img69.png", alt="Acceso al comando Desfasar como subherramienta dentro del grupo del comando Empalmar, mediante el ícono de flecha desplegable.", style="width: 1000px").m-auto
    .row.bg-c12.mb-5
      .col-12
        .p-5
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema4/img7.svg", alt="", style="width: 80px").m-auto
            .col-md(data-aos="fade-left")
              p.mb-0 Además, cualquier subcomando puede fijarse en el área de trabajo para un acceso más rápido. Para ello, basta con hacer clic y mantener presionado el botón izquierdo sobre el subcomando desplegado, arrastrándolo hasta la zona deseada. Esto permite crear barras de herramientas flotantes o accesos directos permanentes, optimizando la organización del entorno de trabajo.
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 55.] Fijar barra de subcomandos
    .row.mb-5(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img72.png", alt="Anclaje del subcomando Desfasar como barra flotante dentro del espacio de trabajo para facilitar su acceso.", style="width: 1000px").m-auto
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Funcionamiento básico del comando Desfasar
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/img73.png", alt="", style="width: 350px").m-auto
      .col-lg-8(data-aos="fade-left")
        p Este método consiste en construir el cuadro a partir de segmentos consecutivos:
        .row
          .col-12
            .p-4.bg-c15
              .row
                .col-12
                  .row.h-100
                    .col-12
                      .p-4.bg-c5
                        ol.lista-ol--cuadro.lista-ol
                          li.d-flex
                            .lista-ol--cuadro__vineta.v--green
                              span a
                            |
                            p.mb-0 Seleccionar la herramienta Desfasar.
                          li.d-flex
                            .lista-ol--cuadro__vineta.v--green
                              span b
                            |
                            p.mb-0 Indicar la curva, borde o superficie que se desea desfasar.
                          li.d-flex
                            .lista-ol--cuadro__vineta.v--green
                              span c
                            |
                            p.mb-0 Especificar la distancia de desfase, que define la separación con respecto al objeto original (positiva hacia afuera o negativa hacia adentro).
                          li.d-flex
                            .lista-ol--cuadro__vineta.v--green
                              span d
                            |
                            p.mb-0 Determinar la dirección del desfase con un clic en la pantalla o introduciendo un valor numérico.
                          li.d-flex
                            .lista-ol--cuadro__vineta.v--green
                              span e
                            |
                            p.mb-0 Generar la curva o superficie paralela, que puede cerrarse automáticamente uniendo los extremos según las opciones seleccionadas.
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c16
          h3.mb-0 Ejemplo práctico
    .row.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Para aplicar un desfase interno en una curva:
        .row
          .col-12
            .p-4.bg-c25
              .row
                .col-12
                  .p-4.bg-c5
                    ol.lista-ol--cuadro.lista-ol.mb-0
                      li.d-flex.mb-0
                        .lista-ol--cuadro__vineta.v--green
                          span a
                        |
                        p.mb-0 Activar el comando Desfasar.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/img74.png", alt="", style="width: 320px").m-auto
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 56.] Selección comando Desfasar
    .row.mb-5(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img75.png", alt="Selección del comando Desfasar desde la barra de herramientas, con el objetivo de crear una curva paralela.", style="width: 1000px").m-auto
    .row.mb-5
      .col-lg
        .p-4.bg-c25
          .row
            .col-lg.order-2.order-lg-1(data-aos="fade-right")
              .p-4.bg-c5
                ol.lista-ol--cuadro.lista-ol.mb-0
                  li.d-flex
                    .lista-ol--cuadro__vineta.v--green
                      span b
                    |
                    p.mb-0 Definir la distancia del desfase, por ejemplo 3 mm, y seleccionar la dirección interna.
                  li.d-flex.mb-0
                    .lista-ol--cuadro__vineta.v--green
                      span c
                    |
                    p.mb-0 Escoger la curva que se desea modificar.
            .col-lg-auto.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema4/img76.png", alt="", style="width: 160px").m-auto
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 57.] Selección y parámetros de curva a desfasar
    .row.mb-5(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img77.png", alt="Parámetros de distancia e indicación de la curva a desfase, especificando dirección y separación de 3 mm.", style="width: 1000px").m-auto
    .row.mb-5
      .col-lg
        .p-4.bg-c25
          .row
            .col-lg.order-2.order-lg-1(data-aos="fade-right")
              .p-4.bg-c5.h-100
                .row.align-items-center.h-100
                  .col-12
                    ol.lista-ol--cuadro.lista-ol.mb-0
                      li.d-flex.mb-0
                        .lista-ol--cuadro__vineta.v--green
                          span d
                        |
                        p.mb-0 Observar el resultado: una curva paralela al objeto original.
            .col-lg-auto.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema4/img78.png", alt="", style="width: 190px").m-auto
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 58.] Curva desfasada
    .row(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema4/img79.png", alt="Resultado del comando Desfasar con una curva paralela creada a 3 mm del contorno original.", style="width: 1000px").m-auto
    Separador
    #t_4_15
    .titulo-segundo.color-acento-contenido
      h2 4.15 Reflejar
    .row.mb-5
      .col-lg-auto.mb-3.mb-lg-0.pe-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/img80.png", alt="", style="width: 370px").m-auto
      .col-lg.bg-c22(data-aos="fade-left")
        .row.h-100.align-items-center
          .col-12
            .p-4
              p.text-white.mb-0 El comando Reflejar en Rhinoceros permite generar una copia simétrica de un objeto o curva respecto a un eje de referencia. Es una herramienta clave en procesos de patronaje y modelado, ya que garantiza la simetría de las piezas y optimiza el tiempo de diseño al evitar duplicar manualmente elementos.
    .row.bg-c28
      .col-12
        .px-5
          .row.mb-5(data-aos="fade-right")
            .col-auto
              .px-3.py-2.bg-c16
                h3.mb-0 Funcionamiento del comando Reflejar
          .row.align-items-center.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p Este método consiste en construir el cuadro a partir de segmentos consecutivos:
              .row.mb-3
                .col-12
                  .p-4.bg-c15
                    .row
                      .col-12
                        .p-4.bg-c5
                          p El uso de esta herramienta sigue una secuencia sencilla:
                          ol.lista-ol--cuadro.lista-ol
                            li.d-flex
                              .lista-ol--cuadro__vineta.v--green
                                span a
                              |
                              p.mb-0 Seleccionar el objeto o curva que se desea reflejar.
                            li.d-flex
                              .lista-ol--cuadro__vineta.v--green
                                span b
                              |
                              p.mb-0 Activar la herramienta Reflejar desde la barra de herramientas, el menú de edición o escribiendo el comando en la línea de comandos.
                            li.d-flex
                              .lista-ol--cuadro__vineta.v--green
                                span c
                              |
                              p.mb-0 Definir el primer punto de referencia, que establece la línea de simetría (generalmente el punto medio del objeto o curva). Se recomienda tener activada la opción Orto para generar un eje recto y preciso.
                            li.d-flex
                              .lista-ol--cuadro__vineta.v--green
                                span d
                              |
                              p.mb-0 Indicar el segundo punto de referencia, que determina la dirección del eje de reflexión.
                            li.d-flex
                              .lista-ol--cuadro__vineta.v--green
                                span e
                              |
                              p.mb-0 El programa genera automáticamente una copia simétrica del objeto.
            .col-lg-4.orer-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema4/img82.png", alt="", style="width: 370px").m-auto
          .row.mb-5(data-aos="fade-right")
            .col-auto
              .px-3.py-2.bg-c16
                h3.mb-0 Opciones adicionales
          .row.mb-5(data-aos="fade-down")
            .col-lg-6.mb-4.mb-lg-0
              .p-4.bg-c9.shadow-sm
                .row.align-items-center
                  .col-md-auto.mb-3.mb-md-0
                    figure
                      img(src="@/assets/curso/tema4/img28.svg", alt="", style="width: 120px").m-auto
                  .col-md
                    p.mb-0 #[b Copiar activado (por defecto)]
                    p.mb-0 Se conserva el objeto original y se genera el reflejado.
            .col-lg-6
              .p-4.bg-c9.shadow-sm
                .row.align-items-center
                  .col-md-auto.mb-3.mb-md-0
                    figure
                      img(src="@/assets/curso/tema4/img29.svg", alt="", style="width: 120px").m-auto
                  .col-md
                    p.mb-0 #[b Copiar desactivado]
                    p.mb-0 Desaparece el objeto original y solo queda la versión reflejada.
          .row.mb-5(data-aos="fade-right")
            .col-auto
              .px-3.py-2.bg-c16
                h3.mb-0 Aplicación en patronaje
          .row.align-items-center.mb-5
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p En la construcción de patrones, el comando Reflejar resulta especialmente útil para:
              .row.mb-3
                .col-12
                  .p-4.bg-c16
                    .row.align-items-center
                      .col-md-auto.mb-3.mb-md-0
                        figure
                          img(src="@/assets/curso/tema4/img83.png", alt="", style="width: 260px").m-auto
                      .col-md
                        .row.h-100
                          .col-12.bg-c5
                            .p-4
                              ul.lista-ul--color.mb-0
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Generar simetría en diagonales, puntos o curvas.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Duplicar elementos de tarjeteros o piezas complementarias.
                                li.d-flex.mb-0
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Optimizar la elaboración de moldes evitando dibujar ambos lados de manera manual.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema4/img84.png", alt="", style="width: 350px").m-auto
          .row.mb-5(data-aos="fade-right")
            .col-auto
              .px-3.py-2.bg-c16
                h3.mb-0 Ejemplo práctico
          p.mb-4(data-aos="fade-down") A continuación, se describe un caso sencillo que ilustra el uso del comando Reflejar:
          .row.justify-content-center
            .col-lg-10
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
                .row(titulo="Paso 1")
                  .col-12
                    p Seleccionar las piezas que se van a reflejar.
                    .titulo-sexto.color-acento-contenido.mb-3
                      p.mb-0 #[b Figura 59.] Selección piezas a reflejar
                    .row
                      .col-12
                        figure
                          img(src="@/assets/curso/tema4/img85.png", alt="Selección de piezas curvas que serán reflejadas en torno a un eje central para lograr simetría.", style="width: 900px").m-auto
                .row(titulo="Paso 2")
                  .col-12
                    p Escoger la herramienta Reflejar, disponible en el grupo de comandos asociados a Mover en la barra de herramientas.
                    .titulo-sexto.color-acento-contenido.mb-3
                      p.mb-0 #[b Figura 60.] Selección comando Reflejar
                    .row
                      .col-12
                        figure
                          img(src="@/assets/curso/tema4/img86.png", alt="Selección del comando Reflejar dentro del grupo de comandos de movimiento en la barra de herramientas.", style="width: 900px").m-auto
                .row(titulo="Paso 3")
                  .col-12
                    p Definir como referencia el punto medio del rectángulo para garantizar simetría.
                    .titulo-sexto.color-acento-contenido.mb-3
                      p.mb-0 #[b Figura 61.] Curvas reflejadas
                    .row
                      .col-12
                        figure
                          img(src="@/assets/curso/tema4/img87.png", alt="Resultado final del comando Reflejar, con curvas duplicadas simétricamente respecto al punto medio del rectángulo.", style="width: 900px").m-auto

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
