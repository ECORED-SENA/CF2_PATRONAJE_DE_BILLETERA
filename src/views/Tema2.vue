<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Interfaz de Rhinoceros
    .row.bg-c6
      .col-12
        .px-5
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p Rhinoceros (o Rhino) es un software de diseño 3D enfocado en el modelado NURBS. Su interfaz está diseñada para facilitar la creación, edición y visualización de modelos tanto en 2D como en 3D. Está compuesta por diversos elementos que permiten trabajar con precisión y flexibilidad, según las necesidades del proyecto. La interfaz de Rhinoceros  incluye:
              .row.mb-3
                .col-12
                  .p-4.bg-c7
                    .row.align-items-center
                      .col-md-auto.mb-3.mb-md-0
                        figure
                          img(src="@/assets/curso/tema2/img1.png", alt="", style="width: 296px").m-auto
                      .col-md
                        .row.h-100
                          .col-12.bg-c5
                            .p-4
                              ul.lista-ul--color.mb-0
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Barra de menús.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Herramientas gráficas.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Línea de comandos.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Ventanas de vista.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Panel de propiedades y capas.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Barra de estado.
                                li.d-flex.mb-0
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 #[i Gumball].
              p.mb-0 Todos estos elementos se organizan de forma personalizable, permitiendo adaptar el entorno de trabajo a distintos tipos de usuarios y tareas.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema2/img2.png", alt="", style="width: 360px").m-auto
          Separador
          #t_2_1
          .titulo-segundo.color-acento-contenido
            h2 2.1 Barra de menús
          p.mb-4(data-aos="fade-down") Cada uno de estos menús cuenta con submenús que se activan al posicionar el cursor sobre ellos y hacer clic izquierdo. Algunos submenús presentan una flecha lateral, indicando que contienen comandos adicionales. Estos comandos se habilitan automáticamente al pasar el cursor sobre dicha opción.
          .row.mb-5(data-aos="fade-left")
            .col-md-6.col-lg-3.mb-4
              .p-2.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/img1.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 Archivo
            .col-md-6.col-lg-3.mb-4
              .p-2.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/img2.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 Edición
            .col-md-6.col-lg-3.mb-4
              .p-2.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/img3.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 Vista
            .col-md-6.col-lg-3.mb-4
              .p-2.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/img4.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 Curvas
            .col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-2.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/img5.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 Superficies
            .col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-2.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/img6.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 Edición
            .col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-2.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/img7.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 Render
            .col-md-6.col-lg-3
              .p-2.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/img8.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 Ayuda
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
            p.mb-0 #[b Figura 1.] Barra de menús
          .row.mb-4(data-aos="fade-left")
            .col-12
              .p-4.bg-c10
                figure
                  img(src="@/assets/curso/tema2/img4.png", alt="Captura de pantalla de la barra de menús en la parte superior de la interfaz de Rhinoceros, que incluye menús desplegables como Archivo, Edición, Vista, Curvas, Superficies, Sólidos y otros comandos esenciales del software.", style="width: 1000px").m-auto
    p.mb-5(data-aos="fade-down") Cada uno de estos menús cuenta con submenús que se activan al posicionar el cursor sobre ellos y hacer clic izquierdo. Algunos submenús presentan una flecha lateral, indicando que contienen comandos adicionales. Estos comandos se habilitan automáticamente al pasar el cursor sobre dicha opción.
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 2.] Submenús
    .row(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema2/img5.png", alt="Imagen que muestra un submenú desplegable en Rhinoceros, con comandos adicionales organizados jerárquicamente e indicados por flechas a la derecha de cada opción.", style="width: 1000px").m-auto
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Barra de herramientas
    .row.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p(data-aos="fade-down") La barra de herramientas puede estar en estado flotante o acoplada a los bordes de la interfaz, según la preferencia del usuario. Contiene íconos gráficos que representan los comandos más utilizados en el entorno de modelado, como:
        .row.mb-3
          .col-12
            .p-4.bg-c11
              .row.align-items-center
                .col-md-auto.mb-3.mb-md-0
                  figure
                    img(src="@/assets/curso/tema2/img6.png", alt="", style="width: 180px").m-auto
                .col-md
                  .row.h-100
                    .col-12.bg-c5
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Crear líneas y curvas.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Generar superficies y sólidos.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Aplicar transformaciones.
                          li.d-flex.mb-0
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Utilizar herramientas de edición.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/img7.png", alt="", style="width: 420px").m-auto
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 3.] Barra de herramientas
    .row.mb-5(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema2/img8.png", alt="Captura de la barra de herramientas flotante o acoplada en Rhinoceros, con íconos gráficos que representan funciones frecuentes como líneas, curvas, superficies, sólidos y herramientas de transformación.", style="width: 1000px").m-auto
    .row.bg-c12.mb-5
      .col-12
        .p-5
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema2/img9.svg", alt="", style="width: 80px").m-auto
            .col-md(data-aos="fade-left")
              p.mb-0 En Rhino, esta barra es altamente personalizable, lo que permite al usuario configurar qué herramientas se muestran y cómo se organizan, optimizando así su flujo de trabajo. Algunas herramientas presentan una flecha negra en la esquina inferior derecha del ícono. Esto indica que contienen opciones adicionales agrupadas. Para acceder a ellas, se debe situar el cursor sobre la flecha y hacer clic izquierdo.
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 4.] Barra de herramientas ocultas
    .row(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema2/img9.png", alt="Vista ampliada de una barra de herramientas con íconos que contienen subherramientas, indicadas por una flecha negra en la esquina inferior derecha del botón.", style="width: 1000px").m-auto
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 Barra de comandos
    .row.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        .row.bg-c13
          .col-auto.px-0.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema2/img10.svg", alt="", style="width: 100px").m-auto
          .col
            .row.h-100.align-items-center
              .col-12
                .p-4.p-lg-0
                  p.mb-0 La barra de comandos se ubica, por defecto, en la parte superior del área de trabajo. Es el espacio destinado a escribir manualmente los comandos del programa, una opción especialmente útil para usuarios que ya dominan las herramientas y desean trabajar de forma más rápida y precisa. Además de permitir la escritura directa, esta barra muestra las opciones asociadas a cada comando, guiando al usuario paso a paso en la ejecución de la herramienta seleccionada.
      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/img10.png", alt="", style="width: 560px").m-auto
    .row.bg-c6
      .col-12
        .px-5
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
            p.mb-0 #[b Figura 5.] Barra de comandos
          .row.mb-5(data-aos="fade-left")
            .col-12
              .p-4.bg-c10
                figure
                  img(src="@/assets/curso/tema2/img11.png", alt="Imagen de la barra de comandos ubicada en la parte superior de la interfaz, donde se introducen manualmente los comandos y se muestran sus opciones disponibles.", style="width: 1000px").m-auto
          p.mb-5(data-aos="fade-down") Existen tres formas principales de acceder a los comandos o herramientas en Rhinoceros:
          .row.justify-content-center(data-aos="fade-right")
            .col-md-6.col-lg-4.mb-4.mb-lg-0
              .p-4.bg-c14
                figure.mb-3
                  img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 100px").m-auto
                p.text-center #[b Barra de menús]
                p.text-center.mb-0 A través de menús desplegables organizados por categorías.
            .col-md-6.col-lg-4.mb-4.mb-lg-0
              .p-4.bg-c14
                figure.mb-3
                  img(src="@/assets/curso/tema2/img12.svg", alt="", style="width: 100px").m-auto
                p.text-center #[b Barra de herramientas]
                p.text-center.mb-0 Mediante íconos gráficos personalizables.
            .col-md-6.col-lg-4
              .p-4.bg-c14
                figure.mb-3
                  img(src="@/assets/curso/tema2/img13.svg", alt="", style="width: 100px").m-auto
                p.text-center #[b Barra de comandos]
                p.text-center.mb-0 Escribiendo directamente el nombre del comando deseado.
          Separador
          #t_2_4
          .titulo-segundo.color-acento-contenido
            h2 2.4 Ventanas de vista
          .row.align-items-center.mb-5
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p Las ventanas de vista permiten observar y trabajar los modelos desde diferentes perspectivas, lo cual es esencial en el modelado 3D. Por defecto, la interfaz de Rhinoceros  se divide en cuatro vistas simultáneas:
              .row.mb-3
                .col-12
                  .p-4.bg-c7
                    .row.align-items-center
                      .col-md-auto.mb-3.mb-md-0
                        figure
                          img(src="@/assets/curso/tema2/img12.png", alt="", style="width: 296px").m-auto
                      .col-md
                        .row.h-100
                          .col-12.bg-c5
                            .p-4
                              ul.lista-ul--color.mb-0
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Top (Superior).
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Front (Frontal).
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Right (Derecha).
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Perspective (Perspectiva).
              p.mb-0 Cada una de estas vistas cuenta con controles de navegación, como zoom, pan (desplazamiento) y rotación, que permiten manipular los modelos de forma eficiente tanto en entornos 2D como 3D.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema2/img13.png", alt="", style="width: 360px").m-auto
    .row.bg-c6
      .col-12
        .px-5
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
            p.mb-0 #[b Figura 6.] Ventana de vistas
          .row.mb-5(data-aos="fade-left")
            .col-12
              .p-4.bg-c10
                figure
                  img(src="@/assets/curso/tema2/img14.png", alt="Captura de pantalla de las cuatro ventanas de vista predeterminadas de Rhinoceros 8: Top (superior), Front (frontal), Right (derecha) y Perspective (perspectiva), organizadas en una cuadrícula.", style="width: 1000px").m-auto
          p.mb-5(data-aos="fade-down") Cuando se requiere trabajar con mayor detalle en una sola vista, es posible maximizarla haciendo clic sobre el nombre de la vista, ubicado en la esquina superior izquierda del recuadro correspondiente. Esta función mejora la concentración en una sola perspectiva sin perder acceso al resto de la interfaz.
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
            p.mb-0 #[b Figura 7.] Vista superior
          .row(data-aos="fade-left")
            .col-12
              .p-4.bg-c10
                figure
                  img(src="@/assets/curso/tema2/img15.png", alt="Vista maximizada de la ventana Top (superior) en Rhinoceros, que ocupa toda el área de trabajo para facilitar la edición en dos dimensiones.", style="width: 1000px").m-auto
    Separador
    #t_2_5
    .titulo-segundo.color-acento-contenido
      h2 2.5 Capas y propiedades
    p.mb-5(data-aos="fade-down") El panel lateral de Capas y Propiedades es una herramienta esencial dentro de la interfaz de Rhinoceros, ya que permite organizar, controlar y personalizar los elementos del modelo de forma precisa. Este panel suele estar ubicado en el lateral derecho de la ventana principal y está dividido en dos secciones principales:
    .row.justify-content-center.mb-5
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Capas (Layers)")
            .col-12
              p Permiten organizar el modelo mediante la asignación de objetos a distintas capas. Cada capa puede tener un color específico y se puede bloquear, ocultar o mostrar según las necesidades del proyecto. Esta función resulta clave para mantener el orden en modelos complejos y facilitar su edición.
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 8.] Capas
              .row
                .col-12
                  .p-4.bg-c10
                    figure
                      img(src="@/assets/curso/tema2/img16.png", alt="Panel lateral de capas en Rhinoceros  con varias capas creadas, cada una con nombres, colores asignados y opciones de visibilidad, bloqueo y selección.", style="width: 1000px").m-auto
          .row(titulo="Propiedades del objeto")
            .col-12
              p Muestran y permiten modificar características como materiales asignados, grosor de línea, tipo de sombreado, nombre del objeto, entre otros. También es posible gestionar atributos personalizados y datos asociados a los elementos del modelo.
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 9.] Propiedades
              .row
                .col-12
                  .p-4.bg-c10
                    figure
                      img(src="@/assets/curso/tema2/img17.png", alt="Panel de propiedades de objetos en Rhinoceros  donde se visualizan atributos como color, material, tipo de línea y sombreado.", style="width: 1000px").m-auto
    .row.bg-c12
      .col-12
        .p-5
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema2/img14.svg", alt="", style="width: 80px").m-auto
            .col-md(data-aos="fade-left")
              p.mb-0 En Rhino, este panel es más dinámico y adaptable, lo que mejora el flujo de trabajo. El usuario puede reorganizar pestañas, acoplarlas o desacoplarlas según su método de trabajo preferido, favoreciendo una interfaz más flexible y centrada en el proyecto.
    Separador
    #t_2_6
    .titulo-segundo.color-acento-contenido
      h2 2.6 Barra de estado
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p La barra de estado se encuentra en la parte inferior de la interfaz de Rhinoceros. Su función principal es proporcionar información en tiempo real sobre la posición del cursor y el estado de herramientas clave que asisten en el modelado.
        .row.mb-3
          .col-12
            .p-4.bg-c15
              .row.align-items-center
                .col-md-auto.mb-3.mb-md-0
                  figure
                    img(src="@/assets/curso/tema2/img18.png", alt="", style="width: 196px").m-auto
                .col-md
                  .row.h-100
                    .col-12.bg-c5
                      .p-4
                        p En este espacio se indican:
                        ul.lista-ul--color
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Coordenadas del cursor (X, Y, Z).
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Ángulos y distancias durante la ejecución de comandos.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 El estado activo o inactivo de ayudas al dibujo como:
                        ul.lista-ul--color.mb-0.ms-4
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[i Ortho] (ortogonalidad).
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[i Snap] (ajuste).
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[i Gumball].
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[i Osnap] (ajuste a objetos).
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[i Grid Snap] (ajuste a la rejilla).
        p.mb-0 Cada una de estas vistas cuenta con controles de navegación, como zoom, pan (desplazamiento) y rotación, que permiten manipular los modelos de forma eficiente tanto en entornos 2D como 3D.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/img19.png", alt="", style="width: 380px").m-auto
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 10.] Barra de estado
    .row(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema2/img20.png", alt="Barra de estado ubicada en la parte inferior de la interfaz, que presenta información como coordenadas del cursor, estado de las ayudas de dibujo (Ortho, Snap, Osnap, Gumball) y botones de activación rápida.", style="width: 1000px").m-auto
    Separador
    #t_2_7
    .titulo-segundo.color-acento-contenido
      h2 2.7 #[i Gumball]
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p El Gumball es una herramienta de manipulación directa de objetos en Rhinoceros. Al activarse, permite al usuario mover, rotar y escalar elementos del modelo mediante un control visual interactivo que aparece directamente sobre el objeto seleccionado.
        .row.mb-3
          .col-12
            .p-4.bg-c16
              .row.align-items-center
                .col-md-auto.mb-3.mb-md-0
                  figure
                    img(src="@/assets/curso/tema2/img21.png", alt="", style="width: 260px").m-auto
                .col-md
                  .row.h-100
                    .col-12.bg-c5
                      .p-4
                        p Este control incluye:
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Flechas para mover en los ejes X, Y y Z.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Arcos para rotar alrededor de cada eje.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Cuadros o manijas para escalar de forma precisa.
        p.mb-0 El uso del Gumball agiliza muchas tareas de transformación al evitar la necesidad de ingresar comandos manuales, ofreciendo una alternativa más visual e intuitiva para editar objetos en el espacio 3D.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/img22.png", alt="", style="width: 360px").m-auto
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 11.] #[i Gumball]
    .row(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema2/img23.png", alt="Visualización del widget Gumball en el área de modelado, con flechas y círculos que permiten manipular objetos directamente mediante movimientos, escalado y rotaciones.", style="width: 1000px").m-auto
    Separador
    .row.bg-c17
      .col-12
        .px-5
          #t_2_8
          .titulo-segundo.color-acento-contenido
            h2 2.8 Barra de referencias de objetos
          .row.align-items-center.mb-5
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p La barra de referencias de objetos es una herramienta fundamental para lograr precisión durante el modelado en Rhinoceros. Su función es permitir al usuario activar diferentes tipos de referencias a puntos clave dentro de los objetos presentes en la escena, lo que facilita tanto la selección como la creación de geometría exacta. Entre las referencias disponibles se incluyen:
              .row.mb-3
                .col-12
                  .p-4.bg-c11
                    .row.align-items-center
                      .col-md-auto.mb-3.mb-md-0
                        figure
                          img(src="@/assets/curso/tema2/img25.png", alt="", style="width: 180px").m-auto
                      .col-md
                        .row.h-100
                          .col-12.bg-c5
                            .p-4
                              ul.lista-ul--color.mb-0
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Final de una curva.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Centro de un círculo.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Punto medio.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Nodo.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Intersección.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Punto de tangencia.
                                li.d-flex.mb-0
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Cuadrante, perpendicularidad, entre otras.
              p.mb-0 Cuando alguna de estas referencias está activa, el cursor se ancla automáticamente al punto correspondiente al acercarse, lo que ayuda a mantener la alineación y exactitud del modelado. Existen dos modos de referencia:
            .col-lg-4(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema2/img26.png", alt="", style="width: 360px").m-auto
          .row.mb-5
            .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c9
                .row.align-items-center
                  .col-md-auto.mb-3.mb-md-0
                    figure
                      img(src="@/assets/curso/tema2/img15.svg", alt="", style="width: 120px").m-auto
                  .col-md
                    p #[b Permanentes]
                    p.mb-0 Permanecen activas durante toda la sesión de trabajo.
            .col-lg-6(data-aos="fade-left")
              .p-4.bg-c9
                .row.align-items-center
                  .col-md-auto.mb-3.mb-md-0
                    figure
                      img(src="@/assets/curso/tema2/img15.svg", alt="", style="width: 120px").m-auto
                  .col-md
                    p #[b De una sola designación]
                    p.mb-0 Se activan solo para una acción específica.
          p.mb-5(data-aos="fade-down") Además, es posible configurar el radio de forzado (snap radius), es decir, la distancia a la que el cursor se "adhiere" al punto de referencia al aproximarse, lo que proporciona mayor control según las preferencias del usuario.
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
            p.mb-0 #[b Figura 12.] Referencia de objetos
          .row(data-aos="fade-left")
            .col-12
              .p-4.bg-c10
                figure
                  img(src="@/assets/curso/tema2/img27.png", alt="Imagen de la barra de referencias de objetos en Rhinoceros, con múltiples opciones de referencia como punto final, centro, intersección, punto medio, nodo y tangente.", style="width: 1000px").m-auto
    Separador
    .row.bg-c18.mb-5
      .col-12
        .px-5
          #t_2_9
          .titulo-segundo.color-acento-contenido
            h2 2.9 Filtros de selección
          .row.align-items-center.mb-5
            .col-md.order-2.order-md-1(data-aos="fade-right")
              p.mb-0 Los filtros de selección permiten controlar qué tipos de objetos pueden ser seleccionados dentro del modelo, lo cual resulta especialmente útil al trabajar en escenas complejas. Esta función ayuda a evitar selecciones accidentales y a enfocar las operaciones sobre tipos específicos de geometría. Los elementos filtrables incluyen:
            .col-md-auto.mb-3.mb-md-0.order-1.order-md-2(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema2/img16.svg", alt="", style="width: 120px").m-auto
          .row.mb-1.mb-lg-5(data-aos="fade-down")
            .col-md-6.col-lg-3.mb-4
              .p-4.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/img17.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 Puntos
            .col-md-6.col-lg-3.mb-4
              .p-4.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/img18.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 Curvas
            .col-md-6.col-lg-3.mb-4
              .p-4.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/img19.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 Superficies
            .col-md-6.col-lg-3.mb-4
              .p-4.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/img20.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 Sólidos
            .col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/img21.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 Polígonos
            .col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/img22.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 Mallas
            .col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/img23.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 Textos
            .col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/img24.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 Bloques
          p.mb-5(data-aos="fade-left") El usuario puede activar uno o varios filtros según las necesidades del momento, lo que optimiza la edición y agiliza el flujo de trabajo.
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
            p.mb-0 #[b Figura 13.] Filtros de selección
          .row(data-aos="fade-left")
            .col-12
              .p-4.bg-c10
                figure
                  img(src="@/assets/curso/tema2/img28.png", alt="Panel de filtros de selección que permite activar o desactivar la selección de diferentes tipos de geometría como puntos, curvas, superficies o sólidos.", style="width: 1000px").m-auto
    .row.bg-c12
      .col-12
        .p-5
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema2/img14.svg", alt="", style="width: 80px").m-auto
            .col-md(data-aos="fade-left")
              p.mb-0 En conjunto, la barra de referencias de objetos y los filtros de selección proporcionan un control más preciso y eficiente sobre el modelo. Estas herramientas mejoran notablemente la organización y exactitud del proceso de diseño en Rhinoceros, especialmente cuando se trabaja con geometrías complejas o de alta densidad.
    Separador
    #t_2_10
    .titulo-segundo.color-acento-contenido
      h2 2.10 Ayudas de modelado
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Las ayudas de modelado son modos que pueden activarse o desactivarse fácilmente para mejorar la precisión durante el diseño. Estas funciones se pueden controlar mediante atajos de teclado, la escritura de letras específicas o simplemente haciendo clic sobre los botones correspondientes. En la barra de estado, se encuentran los cuadros que permiten alternar las siguientes funciones:
        .row.mb-3
          .col-12
            .p-4.bg-c7
              .row.align-items-center
                .col-md-auto.mb-3.mb-md-0
                  figure
                    img(src="@/assets/curso/tema2/img30.png", alt="", style="width: 260px").m-auto
                .col-md
                  .row.h-100
                    .col-12.bg-c5
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Forzado a la rejilla (#[i Grid Snap]).
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Ortogonal (#[i Ortho]).
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Plano.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Referencia de objeto (#[i Osnap]).
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[i Smart Track].
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[i Gumball].
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Plano C (#[i Construction Plane]).
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Grabar historial (#[i Record History]).
        p.mb-0 Al hacer clic sobre estos cuadros, el usuario activa o desactiva cada ayuda, lo que permite restringir o guiar el movimiento del cursor y la ubicación de los elementos dentro del espacio de trabajo. Esto resulta útil para ajustar el comportamiento del cursor, por ejemplo, haciendo que se mueva en ángulos definidos, se mantenga dentro de un plano específico o registre automáticamente el historial de modificaciones. Estas ayudas configuran un entorno de trabajo más preciso, controlado y fluido, facilitando la creación y edición de modelos con mayor exactitud.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/img31.png", alt="", style="width: 360px").m-auto
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 14.] Ayudas de modelado
    .row(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema2/img32.png", alt="Sección de la barra de estado que agrupa ayudas de modelado como ortogonalidad, forzado a la rejilla, referencias de objeto, SmartTrack, Gumball y grabar historial.", style="width: 1000px").m-auto
    Separador
    #t_2_11
    .titulo-segundo.color-acento-contenido
      h2 2.11 Mouse
    p.mb-4(data-aos="fade-down") Aunque el ratón no forma parte directa de la interfaz gráfica de Rhinoceros, su uso es esencial para la navegación, edición y ejecución de comandos dentro del entorno de modelado. El ratón se integra de forma natural al flujo de trabajo del usuario, ofreciendo control directo e inmediato sobre los elementos del modelo. Las funciones principales del mouse son:
    .row(data-aos="fade-left")
      .col-12
        .px-5.pb-5.bg-c19
          ImagenInfografica.color-secundario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema2/img25.svg', alt='', style="width: 600px").m-auto
            .tarjeta.color-acento-botones1.p-3(x="25%" y="37%" numero="+")
              P #[B Botón izquierdo]
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.far.fa-arrow-alt-circle-right
                  |
                  p.mb-0 Selecciona objetos y posiciones en el modelo.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right
                  |
                  p.mb-0 Activa comandos y opciones en menús.
                li.d-flex.mb-0
                  i.far.fa-arrow-alt-circle-right
                  |
                  p.mb-0 Interactúa con botones de las barras de herramientas.
            .tarjeta.color-acento-botones1.p-3(x="58.3%" y="37%" numero="+")
              P #[B Botón derecho]
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.far.fa-arrow-alt-circle-right
                  |
                  p.mb-0 Equivale a la tecla Intro.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right
                  |
                  p.mb-0 Finaliza comandos o avanza en sus fases.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right
                  |
                  p.mb-0 Repite el comando anterior.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right
                  |
                  p.mb-0 Ejecuta comandos desde la barra de herramientas.
                li.d-flex.mb-0
                  i.far.fa-arrow-alt-circle-right
                  |
                  p.mb-0 Permite encuadrar y rotar vistas al arrastrarlo.
            .tarjeta.color-acento-botones1.p-3(x="63.8%" y="73.4%" numero="+")
              P #[B Controla el zoom sobre el modelo]
              ul.lista-ul--color.mb-0
                li.d-flex.mb-0
                  i.far.fa-arrow-alt-circle-right
                  |
                  p.mb-0 Controla el zoom sobre el modelo.
    .row(data-aos="fade-right")
      .col-12
        .p-4.bg-c2
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src="@/assets/curso/tema2/img26.svg", alt="", style="width: 100px").m-auto
            .col-md
              p.text-white Además, al mantener presionada la tecla Ctrl y arrastrar con el botón derecho, se puede ampliar o reducir la vista de manera controlada. Esta función mejora la navegación en escenas detalladas o con geometría compleja.
              p.text-white.mb-0 Gracias a estas funciones, Rhino  ofrece una interacción ágil, precisa e intuitiva, lo que potencia la productividad del usuario sin necesidad de interrumpir el flujo de trabajo.

</template>

<script>
export default {
  name: 'Tema2',
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
