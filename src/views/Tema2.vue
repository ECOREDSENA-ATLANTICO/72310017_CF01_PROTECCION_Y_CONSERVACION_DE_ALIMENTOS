<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Buenas prácticas de manipulación y preservación de alimentos

    figure
        img.mb-3(src='@/assets/curso/images/tema2/img_1.png', alt='Texto que describa la imagen').mx-autoplay

    Separador
    #t_2_1.titulo-segundo
      .h2(data-aos="fade-right") 2.1 Historia de las Buenas Prácticas de Manufactura (BPM)

    p.mb-5 Las Buenas Prácticas de Manufactura (BPM) tienen sus raíces en una historia marcada por incidentes de salud pública relacionados con la seguridad de los alimentos y medicamentos.

    .row.justify-content-center.fondo_5
      .col-lg-10
        PasosA.color-acento-contenido.mb-5()
          .row
            .col-lg
              h3 Principios del siglo XX
              p La creciente industrialización de la producción de alimentos y medicamentos, especialmente en Estados Unidos, llevó a condiciones insalubres y prácticas poco higiénicas que ponían en riesgo la salud de los consumidores. 
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/images/tema2/img_3.png', alt='').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/images/tema2/img_4.png', alt='').img125
            .col-lg
              h3 1906/ Publicación del libro "La Jungla"
              p La creciente industrialización de la producción de alimentos y medicamentos, especialmente en Estados Unidos, llevó a condiciones insalubres y prácticas poco higiénicas que ponían en riesgo la salud de los consumidores. 

          .row
            .col-lg
              h3 1938/ Acta de Alimentos, Medicamentos y Cosméticos
              p Esta acta promulgada en Estados Unidos, fue una respuesta directa a la crisis generada por "La Jungla". Esta ley estableció requisitos de inocuidad para los alimentos y medicamentos, incluyendo la inspección de las instalaciones y los procesos de producción, la eliminación de prácticas peligrosas y la introducción de sistemas de control de calidad. 
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/images/tema2/img_5.png', alt='').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/images/tema2/img_6.png', alt='').img125
            .col-lg
              h3 1962/ Concepto de BPM 
              p Tras un caso de graves efectos adversos de un medicamento: "Talidomida" se desencadenó un cambio de paradigma en la regulación de la industria farmacéutica. A partir de ese momento, se comenzó a implementar de manera más formalizada el concepto de buenas prácticas en la fabricación de medicamentos, estableciendo guías que posteriormente influyeron en la elaboración de regulaciones globales para todos los procesos relacionados con la alimentación y la salud.

          .row
            .col-lg
              h3 1969. El <em>Codex Alimentarius</em>
              p Se concretó una recopilación de estándares internacionales para alimentos, que adoptó las BPM como un principio fundamental para la seguridad alimentaria, sentando las bases para la estandarización de prácticas de higiene y seguridad en todo el mundo.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/images/tema2/img_7.png', alt='').img125

    Separador
    #t_2_2.titulo-segundo
      .h2(data-aos="fade-right") 2.2 Principios de las BPM

    .row.justify-content-center.fondo_6.mb-5
      .col-md-8
        .cajon.bg-4.g_18.mb-5.mb-lg-0
          .row.mb-4
            .col-lg-12.p-4.ps-5 
              p.m-0.mt-4 Las Buenas Prácticas de Manufactura (BPM) o <em>Good manufacturing Practices</em> (GMP), son un conjunto de herramientas que se implementan en todas las actividades que involucren manipulación de alimentos. El objetivo central es la obtención de productos seguros para el consumo humano. Los ejes principales del BPM o GMP en inglés, <em>Good Manufacturing Pactices</em>, son las metodologías utilizadas para la manipulación de alimentos y la higiene y seguridad de éstos, evitando que sean un vehículo de las enfermedades transmitidas por alimentos (ETA).

        p.mb-3 Las Buenas Prácticas de Manufactura (BPM) se constituyen como regulaciones de carácter obligatorio en Colombia y en gran cantidad de países; buscan evitar la presencia de riesgos de índole físico, químico y biológico durante el proceso de manufactura de alimentos, que pudieran repercutir en afectaciones a la salud del consumidor.

        p.mb-3 Una guía de buenas prácticas de manufactura debe contemplar los siguientes temas, sin omitir ninguno de ellos:

      .col-md-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/images/tema2/img_8.png', alt='')
    
    .row.align-items-center.justify-content-center.mb-3
      .col-md-9.mb-4
        .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 3. 
            span Temas que deben incluirse en las guías de BPM
        figure
          img.mb-3(src='@/assets/curso/images/tema2/img_9.svg', alt='Texto que describa la imagen').mx-auto
          figcaption Fuente: Elaboración Propia.



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
