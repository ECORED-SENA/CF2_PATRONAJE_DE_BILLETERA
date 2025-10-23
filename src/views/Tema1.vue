<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 #[i Software] Rhinoceros
    .row.align-items-center
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Rhinoceros (también conocido como Rhino) es un software de diseño asistido por computador (CAD) enfocado en el modelado 3D. Su principal ventaja es la precisión y la facilidad para crear, editar, analizar y traducir curvas, superficies y sólidos. Es ampliamente utilizado en campos como:
        .row.mb-3
          .col-12
            .p-4.bg-c4
              .row
                .col-md-auto.mb-3.mb-md-0
                  figure
                    img(src="@/assets/curso/tema1/img2.png", alt="", style="width: 296px").m-auto
                .col-md
                  .row.h-100
                    .col-12.bg-c5
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Arquitectura.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Diseño industrial.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Ingeniería.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Joyería.
                          li.d-flex.mb-0
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Calzado y marroquinería.
        p.mb-0 Su versatilidad permite combinar la creatividad con la exactitud técnica, y su compatibilidad con múltiples formatos de archivo lo hace especialmente útil. Además, cuenta con una gran variedad de complementos (plugins) que amplían sus funcionalidades. A continuación, se detalla el proceso de instalación y activación de la versión de prueba, junto con los requisitos técnicos del sistema.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img1.png", alt="", style="width: 360px").m-auto
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 Instalación y activación de la versión de prueba
    .row.bg-c6
      .col-12
        .px-5
          p(data-aos="fade-down") A continuación, se detallan los pasos necesarios para descargar, instalar y activar la versión de evaluación gratuita de Rhinoceros, válida por 90 días. Este proceso requiere conexión a internet y una cuenta de usuario en Rhino.
          .row.align-items-center
            .col-xl-3.d-none.d-xl-block(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema1/img4.png", alt="", style="width: 290px").m-auto
            .col-xl-9(data-aos="fade-left")
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
                .row(titulo="a) Acceso al sitio oficial")
                  .col-12
                    p Ir a https://www.rhino3d.com/download/, donde se encuentra la versión de evaluación por 90 días.
                    .row
                      .col-auto
                        a.anexo.mb-4.mb-lg-0(href="//www.rhino3d.com/download/ " target="_blank")
                          .anexo__icono
                            img(src="@/assets/template/icono-link.svg")
                          .anexo__texto
                            p #[b Enlace web.] //www.rhino3d.com/download/
                .row(titulo="b) Selección de versión")
                  .col-12
                    p.mb-0 Elegir la opción de evaluación. Esta versión permite usar todas las funciones del software durante 90 días. Posteriormente, solo se podrá visualizar archivos.
                .row(titulo="c) Descarga del instalador")
                  .col-12
                    p.mb-0 Descargar el archivo según el sistema operativo (Windows o macOS).
                .row(titulo="d) Instalación")
                  .col-12
                    p.mb-0 Ejecutar el instalador y seguir las instrucciones. Se recomienda iniciar sesión con una cuenta de Gmail.
                .row(titulo="e) Activación de licencia")
                  .col-12
                    p.mb-0 La validación se realiza por internet. Rhino usa un sistema en la nube como Cloud Zoo para gestionar el estado de la licencia.
                .row(titulo="f) Limitaciones tras 90 días")
                  .col-12
                    p.mb-0 Finalizado el periodo de prueba, no se podrán guardar archivos ni utilizar plugins. Solo funcionará como visor.
          Separador
          #t_1_2
          .titulo-segundo.color-acento-contenido
            h2 1.2Requisitos técnicos para Rhino
          .row.align-items-center.mb-4
            .col-md(data-aos="fade-right")
              p.mb-0 Para garantizar un funcionamiento óptimo del software, es importante verificar que el equipo cumpla con los requisitos mínimos y recomendados, tanto para Windows como para macOS. Estos se presentan a continuación:
            .col-md-auto(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema1/img1.svg", alt="", style="width: 120px").m-auto
          TabsB.color-acento-contenido(data-aos="fade-left")
            .p-4.p-md-5(titulo="Windows" :icono="require('@/assets/curso/tema1/img2.svg')")
              .row.justify-content-center
                .col-lg-6
                  p #[b Windows]
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 Procesador: Intel o AMD de 64 bits (no compatible con ARM).
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 RAM: mínimo 8 GB recomendados.
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 Espacio en disco: 5 GB o más.
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 Tarjeta gráfica: compatible con OpenGL 4.5, con 4 GB de VRAM recomendados.
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 Periféricos: ratón con varios botones y rueda; opcionalmente, SpaceNavigator (3D mouse).
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 Sistema operativo: Windows 10 o Windows 11.
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 Conexión a internet: necesaria para descarga, activación y validación.
                .col-lg-4
                  .row.align-items-center.h-100
                    .col-12
                      figure
                        img(src="@/assets/curso/tema1/img5.png", alt="", style="width: 200px").m-auto
            .p-4.p-md-5(titulo="MacOS" :icono="require('@/assets/curso/tema1/img2.svg')")
              .row.justify-content-center
                .col-lg-6
                  p #[b macOS]
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 Procesador: Apple Silicon o Intel de 64 bits.
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 RAM: mínimo 8 GB recomendados.
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 Espacio en disco: 5 GB o más.
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 Tarjeta gráfica: compatible con Metal (API gráfica de Apple).
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 Sistema operativo: macOS 12.4 o posterior.
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 Conexión a internet: necesaria para descarga, activación y validación.
                .col-lg-4
                  .row.align-items-center.h-100
                    .col-12
                      figure
                        img(src="@/assets/curso/tema1/img6.png", alt="", style="width: 200px").m-auto
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
