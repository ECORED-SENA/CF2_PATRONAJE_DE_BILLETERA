<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Modelado
    .row
      .col-lg-auto.mb-3.mb-lg-0.pe-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/img1.png", alt="", style="width: 370px").m-auto
      .col-lg.bg-c2(data-aos="fade-left")
        .row.h-100.align-items-center
          .col-12
            .p-4
              p.text-white.mb-0 Para iniciar el proceso de modelado de billeteras, se emplearán únicamente las herramientas necesarias. Aunque Rhinoceros es un software muy completo, en este proyecto el trabajo se enfocará en lo esencial, aplicando los comandos básicos mediante ejercicios prácticos.
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1 Selección vista
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p El primer paso consiste en seleccionar la vista superior, ya que el producto a diseñar es bidimensional (2D) y el trabajo se realizará exclusivamente en este plano. Para ello:
        .row.mb-3
          .col-12
            .p-4.bg-c11
              .row.align-items-center
                .col-md-auto.mb-3.mb-md-0
                  figure
                    img(src="@/assets/curso/tema3/img2.png", alt="", style="width: 260px").m-auto
                .col-md
                  .row.h-100
                    .col-12.bg-c5
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Hacer doble clic con el botón izquierdo del mouse sobre la vista superior (#[i Top]).
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Presionar la tecla F7 para desactivar la rejilla del plano cartesiano, eliminando la malla de la pantalla.
                          li.d-flex.mb-0
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Para volver a activarla, basta con presionar nuevamente F7.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/img3.png", alt="", style="width: 360px").m-auto
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 15.] Selección de vista
    .row(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema3/img4.png", alt="Vista superior seleccionada en el espacio de trabajo de Rhinoceros, con la rejilla del plano cartesiano desactivada para facilitar el enfoque en el diseño plano.", style="width: 1000px").m-auto
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 Unidades de medida
    .row.align-items-center.mb-4
      .col-md.order-2.order-md-1(data-aos="fade-right")
        p.mb-0 El siguiente paso es definir las unidades de medida para el diseño. Al abrir el programa, este solicita seleccionar la unidad a utilizar. Para objetos pequeños, como las billeteras, se recomienda trabajar en milímetros, aunque también es posible hacerlo en centímetros. Para ello, al iniciar, seleccionamos “Nuevo” y elegimos la opción “Objeto pequeño - milímetros”.
      .col-md-auto.mb-3.mb-md-0.order-1.order-md-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/img1.svg", alt="", style="width: 160px").m-auto
    .row.justify-content-center.mb-4
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Opción 1. Al abrir el programa")
            .col-12
              p Al iniciar Rhinoceros, se debe seleccionar la unidad de medida. Para este proyecto, escoger la plantilla “Objeto pequeño - milímetros”.
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 16.] Unidades de medida
              .row
                .col-12
                  .p-4.bg-c10
                    figure
                      img(src="@/assets/curso/tema3/img5.png", alt="Pantalla de selección de plantilla de proyecto en Rhinoceros, con la opción resaltada de “Objeto pequeño - milímetros” para definir las unidades de trabajo.", style="width: 1000px").m-auto
          .row(titulo="Opción 2. Con el programa ya abierto")
            .col-12
              ul.lista-ul--color
                li.d-flex
                  i.far.fa-arrow-alt-circle-right
                  |
                  p.mb-0 Ir a la barra de menú.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right
                  |
                  p.mb-0 Seleccionar Archivo > Nuevo.
                li.d-flex.mb-0
                  i.far.fa-arrow-alt-circle-right
                  |
                  p.mb-0 En la ventana emergente, escoger nuevamente la opción “Objeto pequeño - milímetros”.
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 17.] Selección unidades de medida
              .row
                .col-12
                  .p-4.bg-c10
                    figure
                      img(src="@/assets/curso/tema3/img6.png", alt="Ventana emergente del comando “Nuevo” donde se muestra la lista de plantillas disponibles con unidades de medida predefinidas.", style="width: 1000px").m-auto
    p.mb-5(data-aos="fade-down") Tras seleccionar la unidad, es fundamental verificar que el espacio de trabajo esté correctamente configurado. Para confirmarlo, se revisa la barra inferior de la pantalla, donde se indica la unidad establecida.
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 18.] Verificación unidades de medida
    .row(data-aos="fade-left")
      .col-12
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema3/img7.png", alt="Detalle de la barra inferior de la interfaz donde se indica que la unidad activa del documento es milímetros, confirmando la configuración inicial.", style="width: 1000px").m-auto
    Separador
    #t_3_3
    .titulo-segundo.color-acento-contenido
      h2 3.3 Métodos de activación de herramientas
    .row.bg-c20
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema3/img9.png", alt="", style="width: 360px").m-auto
            .col-lg-8(data-aos="fade-left")
              p En Rhinoceros  existen tres formas principales de activar herramientas o comandos, lo que brinda flexibilidad al usuario según su estilo de trabajo y preferencias:
              .row.mb-3
                .col-12
                  .p-4.bg-c7
                    .row.align-items-center
                      .col-md-auto.mb-3.mb-md-0
                        figure
                          img(src="@/assets/curso/tema3/img8.png", alt="", style="width: 296px").m-auto
                      .col-md
                        .row.h-100
                          .col-12.bg-c5
                            .p-4
                              ul.lista-ul--color.mb-0
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Barra de menús: navegación por categorías para seleccionar el comando deseado.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Barra de herramientas: acceso directo mediante íconos gráficos.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Línea de comandos: escritura manual del nombre de la herramienta, con función de autocompletado.
              p.mb-0 Esta variedad de métodos facilita un acceso ágil y adaptado a diferentes situaciones de trabajo.
          .row.mb-5(data-aos="fade-right")
            .col-auto
              .px-3.py-2.bg-c16
                h3.mb-0 Subherramientas
          .row.align-items-center.mb-5
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p Muchos íconos en la barra de herramientas de Rhinoceros  contienen subherramientas adicionales que se despliegan al hacer clic en la flecha negra ubicada en la esquina inferior derecha de cada ícono. Este sistema permite:
              .row.mb-3
                .col-12
                  .p-4.bg-c16
                    .row.align-items-center
                      .col-md-auto.mb-3.mb-md-0
                        figure
                          img(src="@/assets/curso/tema3/img10.png", alt="", style="width: 260px").m-auto
                      .col-md
                        .row.h-100
                          .col-12.bg-c5
                            .p-4
                              ul.lista-ul--color.mb-0
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Acceder a múltiples variantes de una misma herramienta sin ocupar espacio adicional en la interfaz.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Mantener una barra de herramientas compacta y organizada, evitando la saturación visual.
                                li.d-flex
                                  i.far.fa-arrow-alt-circle-right
                                  |
                                  p.mb-0 Optimizar el flujo de trabajo al tener funciones relacionadas agrupadas bajo un mismo ícono.
              p.mb-0 Por ejemplo, el ícono de la herramienta de creación de círculos puede contener varias variantes:
            .col-lg-4(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema3/img11.png", alt="", style="width: 360px").m-auto
          .row.justify-content-center.mb-2(data-aos="fade-down")
            .col-md-6.col-lg-4.mb-4
              .p-2.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema3/img2.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 #[b 01]
                    p.mb-0 Círculo mediante centro y radio.
            .col-md-6.col-lg-4.mb-4
              .p-2.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema3/img3.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 #[b 02]
                    p.mb-0 Círculo definido por tres puntos.
            .col-md-6.col-lg-4.mb-4
              .p-2.bg-c9.shadow-sm
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema3/img4.svg", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 #[b 03]
                    p.mb-0 Círculo tangente a objetos.
          p.mb-5(data-aos="fade-left") La flecha negra en los íconos de la barra de herramientas indica la presencia de comandos agrupados o relacionados, que pueden desplegarse y seleccionarse según la necesidad, mejorando la experiencia y eficiencia en el modelado dentro de Rhinoceros.
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
            p.mb-0 #[b Figura 19.] Subherramientas
          .row.mb-5(data-aos="fade-left")
            .col-12
              .p-4.bg-c10
                figure
                  img(src="@/assets/curso/tema3/img13.png", alt="Panel flotante de herramientas en Rhinoceros  con un ícono expandido para mostrar subherramientas agrupadas relacionadas con una función principal.", style="width: 1000px").m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
