<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 En el esquema a continuación se presentan desde los fundamentos de la higiene hasta las técnicas de preservación. Se explora las buenas prácticas de manufactura y las recomendaciones para el almacenamiento, el transporte, la manipulación y la limpieza. Este componente explora los contenidos para garantizar la inocuidad de los alimentos y proteger la salud de los consumidores.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente se detalla los conceptos básicos, los factores que influyen en la seguridad alimentaria, las buenas prácticas de manufactura y las técnicas de preservación de alimentos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
