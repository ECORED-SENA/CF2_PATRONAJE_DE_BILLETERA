<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5.pb-5
          .row.align-items-center
            .col-lg-3
              figure
                img(src="@/assets/curso/intro/img1.png", alt="", style="width: 300px").m-auto
            .col-lg-9
              p El presente componente tiene como finalidad acercar al aprendiz al entorno de trabajo de Rhinoceros, un software de modelado 3D ampliamente utilizado en diseño digital. A través de este espacio de formación se busca que el estudiante reconozca la importancia de comprender la interfaz antes de iniciar procesos complejos de creación, garantizando así una base sólida en el manejo de herramientas digitales para el patronaje de marroquinería.
              .row
                .col-lg.pe-0
                  .bg-c2.h-100
                    .row
                      .col-12
                        .p-4
                          p.text-white.mb-0 El contenido ofrece una ruta clara que inicia con la instalación y validación técnica del programa, para luego adentrarse en la exploración de la interfaz. Se abordan elementos como la barra de menús, las herramientas gráficas, la línea de comandos, las vistas, el administrador de capas y el Gumball, entre otros. Estos recursos permiten al aprendiz organizar, visualizar y manipular objetos con mayor precisión, logrando un flujo de trabajo más ordenado y coherente con las exigencias del diseño digital.
                .col-lg-auto.ps-0.d-none.d-xxl-block
                  figure
                    img(src="@/assets/curso/intro/img2.png", alt="", style="width: 450px").m-auto
    .row.bg-c3
      .col-12
        .p-5
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/intro/img1.svg", alt="", style="width: 120px").m-auto
            .col-md
              p.mb-0 Finalmente, el componente se caracteriza por su enfoque práctico. A través de ejercicios guiados y de la repetición sistemática de acciones clave, el estudiante desarrolla la capacidad de configurar y personalizar la interfaz de acuerdo con sus necesidades. De esta manera, no solo adquiere competencias técnicas, sino que también fortalece habilidades transferibles a proyectos de mayor complejidad, consolidando un aprendizaje aplicable al ámbito laboral y profesional.

</template>

<script>
export default {
  name: 'Introduccion',
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
