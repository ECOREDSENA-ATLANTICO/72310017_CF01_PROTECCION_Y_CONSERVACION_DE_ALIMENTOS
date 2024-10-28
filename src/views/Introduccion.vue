<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-justify.align-items-justify.fondo.mb-3
      
      p.mb-4 Estimado aprendiz bienvenido al componente formativo “Seguridad alimentaria y buenas prácticas de manufactura” le invitamos a explorar el siguiente video:
      
      .row.justify-content-justify.align-items-justify.fondo.mb-3
        figure.mb-3(data-aos="fade-right")
          img.img-t.m-auto(src='@/assets/curso/images/introduccion/img_1.png', alt='Imagen Decorativa')

          //- .video
          //- <iframe width="560" height="315" src="https://www.youtube.com/embed/fYBTaOYlEvE" title="Producción pecuaria agroecológica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      p La protección y conservación de los alimentos tienen como objetivo estudiar los métodos de manipulación higiénica de alimentos, bebidas, utensilios y equipos utilizados en su preparación, asegurando su calidad. Conocer la clasificación de los alimentos es crucial para determinar su uso, aprovechar sus propiedades completamente y conservarlos adecuadamente, evitando su deterioro o contaminación. Comprender los factores y tipos de peligros que afectan la seguridad alimentaria permite identificar las maneras adecuadas de prevenir su deterioro.

      .row.justify-content-center.align-items-center.mb-4
        .col-md-8 
          p Este recurso busca proporcionar información sobre la clasificación de los alimentos y los diferentes tipos de peligros que los afectan, permitiendo al aprendiz contextualizar la manera adecuada de manipular los alimentos según sus características. Asimismo, se ofrecerá conocimiento sobre los factores y peligros que pueden deteriorar y/o contaminar los alimentos, de modo que el aprendiz pueda identificar las causas potenciales de deterioro y cómo prevenirlas.

          .cajon.color-acento-contenido.g_18.mb-4.mb-lg-0
            .row
              .col-lg-12.p-4.ps-5 
                p Desde la antigüedad, las enfermedades transmitidas por alimentos han sido reconocidas, como se refleja en escrituras antiguas y leyes dictadas por figuras históricas como Moisés. Estas regulaciones no solo establecían qué alimentos eran seguros para el consumo, sino también la importancia de prácticas higiénicas, como el lavado de manos. A pesar de que antiguamente se atribuían las intoxicaciones alimentarias a productos químicos venenosos, a veces deliberadamente incorporados, en el siglo XIX se descubrieron enfermedades alimentarias causadas por microorganismos. Actualmente, sabemos que los alimentos contaminados pueden parecer normales en aspecto, olor y sabor, lo que subraya la necesidad de métodos de conservación efectivos.

        .col-md-4
          figure
            img.img-t.m-auto(src='@/assets/curso/images/introduccion/img_2.png', alt='Imagen Decorativa')

      p 

      p Las Buenas Prácticas de Manufactura (BPM) son vitales en la elaboración y manipulación de alimentos, ya que constituyen una herramienta fundamental para garantizar la inocuidad de los productos. Este recurso tiene como objetivo dar a conocer cada BPM, su correcta aplicación e importancia para asegurar la inocuidad alimentaria. También se estudiará la Resolución 2674 de 2013, que establece los requisitos sanitarios en toda la cadena de producción de alimentos. Todo esto no solo es esencial para quienes manipulan los alimentos, sino también para cualquiera interesado en aprender a manejar y preservar adecuadamente sus características. Así, se ofrece una presentación clara y sustancial para asegurar su comprensión y aplicación en distintos contextos.

            
  
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
