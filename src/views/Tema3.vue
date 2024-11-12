<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Prevención y control del deterioro de los alimentos

    figure
        img.mb-3(src='@/assets/curso/temas/tema3/img_1.png', alt='Texto que describa la imagen').mx-autoplay

    p.mb-2 Para garantizar la seguridad alimentaria y asegurar la calidad de los alimentos, es fundamental implementar estrategias para prevenir y controlar su deterioro. A continuación, se presentan los principales elementos que contribuyen a la conservación de la calidad e inocuidad de los alimentos, desde las buenas prácticas de conservación hasta la aplicación del sistema HACCP.

    Separador
    #t_3_1.titulo-segundo
      .h2(data-aos="fade-right") 3.1 Buenas prácticas de preservación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.mb-3
        .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img_2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La preservación de alimentos es un proceso fundamental que atraviesa todos los eslabones de la cadena alimentaria, desde la producción hasta el consumo. Su importancia radica en la capacidad de extender la vida útil de los productos, protegiéndolos del deterioro y asegurando su inocuidad, lo cual garantiza un acceso seguro y confiable a alimentos frescos y saludables para todos. Este proceso no solo busca evitar el desperdicio, sino que también permite distribuir los alimentos de manera eficiente a nivel nacional e internacional, abriendo posibilidades de acceso a productos frescos y saludables en diferentes regiones.

    .bg_img_6.fondo_3_1
      .row.align-items-center.justify-content-star.mb-0.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Técnicas de preservación de alimentos
            img.pst(src='@/assets/curso/temas/titulos/img_18.svg', alt='') 

        p.mb-4 Las técnicas de preservación de alimentos se basan en la aplicación de métodos que ralentizan o detienen el crecimiento de microorganismos y enzimas que provocan el deterioro de los alimentos. A continuación se describen las técnicas más comunes:
                
        .row.align-items-center.justify-content-center.mb-0
          .col-md-10.mb-4
            ImagenInfografica.color-acento-botones
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/tema3/img_3.png', alt='Texto que describa la imagen').mb-3.mx-auto
                  //- figcaption Fuente: Elaboración Propia.

              .tarjeta.color-acento-botones.p-3(x="43%" y="15%" numero="1")
                .h5.mb-2.texto-color-acento-botones 1. Refrigeración
                p.text-dark.text-small Mantener los alimentos a una temperatura baja (entre 0 y 4°C) para ralentizar el crecimiento de microorganismos. Ideal para productos perecederos como carnes, pescados, frutas, verduras y lácteos.
                img(src='@/assets/curso/temas/tema3/img_22.png', alt='Texto que describa la imagen').mx-auto

              .tarjeta.color-acento-botones.p-3(x="57%" y="15%" numero="2")
                .h5.mb-2.texto-color-acento-botones 2. Congelación
                p.text-dark.text-small Reducir la temperatura a -18°C o menos, deteniendo el desarrollo bacteriano. Excelente para conservar frutas, verduras, carnes y pescados por largos períodos, manteniendo su sabor y textura.
                img(src='@/assets/curso/temas/tema3/img_23.png', alt='Texto que describa la imagen').mx-auto

              .tarjeta.color-acento-botones.p-3(x="66%" y="34%" numero="3")
                .h5.mb-2.texto-color-acento-botones 3. Pasteurización
                p.text-dark.text-small Utiliza calor para destruir los microorganismos patógenos presentes en alimentos líquidos como la leche y los jugos. Se aplica a temperaturas específicas durante un tiempo determinado, garantizando la inocuidad del producto sin alterar su sabor y nutrientes.
                img(src='@/assets/curso/temas/tema3/img_24.png', alt='Texto que describa la imagen').mx-auto

              .tarjeta.color-acento-botones.p-3(x="66%" y="58%" numero="4")
                .h5.mb-2.texto-color-acento-botones 4. Enlatado
                p.text-dark.text-small Consiste en sellar herméticamente los alimentos en envases y someterlos a un tratamiento térmico (calor) para destruir microorganismos y enzimas. El enlatado se emplea para productos como frutas, verduras, carnes y pescados, extendiendo su vida útil a largos períodos. Es esencial asegurar el correcto sellado y tratamiento térmico para evitar el crecimiento de bacterias anaerobias como el <em class="text-dark">Clostridium botulinumem</em>.
                img(src='@/assets/curso/temas/tema3/img_25.png', alt='Texto que describa la imagen').mx-auto

              .tarjeta.color-acento-botones.p-3(x="57%" y="77%" numero="5")
                .h5.mb-2.texto-color-acento-botones 5. Deshidratación
                p.text-dark.text-small Elimina el agua del alimento para inhibir el crecimiento microbiano. Útil para frutas, verduras, carnes y pescados, disminuyendo su peso y volumen, facilitando su almacenamiento y transporte. Se debe controlar la uniformidad del proceso de deshidratación para evitar zonas húmedas que puedan comprometer la seguridad del producto.
                img(src='@/assets/curso/temas/tema3/img_26.png', alt='Texto que describa la imagen').mx-auto

              .tarjeta.color-acento-botones.p-3(x="43%" y="76%" numero="6")
                .h5.mb-2.texto-color-acento-botones 6. Salado y Curado
                p.text-dark.text-small Utilizan sal y otros agentes curativos para deshidratar y preservar alimentos, especialmente productos cárnicos. La sal inhibe el crecimiento microbiano y proporciona un sabor característico. Es importante medir cuidadosamente las concentraciones de sal para asegurar una adecuada conservación sin afectar negativamente el sabor.
                img(src='@/assets/curso/temas/tema3/img_27.png', alt='Texto que describa la imagen').mx-auto

              .tarjeta.color-acento-botones.p-3(x="34%" y="58%" numero="7")
                .h5.mb-2.texto-color-acento-botones 7. Fermentación
                p.text-dark.text-small Es un proceso biológico en el cual microorganismos como bacterias, levaduras o mohos transforman componentes del alimento, mejorando su conservación. La fermentación se utiliza para productos como el yogur, el queso, la cerveza, el vino y algunos vegetales, aportando sabores específicos y beneficios probióticos. Se requiere un control estricto del ambiente de fermentación, incluyendo temperatura, pH y tiempo.
                img(src='@/assets/curso/temas/tema3/img_28.png', alt='Texto que describa la imagen').mx-auto

              .tarjeta.color-acento-botones.p-3(x="33%" y="34%" numero="8")
                .h5.mb-2.texto-color-acento-botones 8. Otros metodos
                ul.lista-ul
                  li.text-dark.text-small 
                    i.lista-ul__vineta.text-dark
                    | <b class="text-dark">Ahumado:</b> Utilizar humo de madera para dar sabor y conservarlo.

                  li.text-dark.text-small 
                    i.lista-ul__vineta.text-dark
                    | <b class="text-dark">Embutido:</b> Envolver carnes en tripas o envoltorios para su conservación.
                  li.text-dark.text-small 
                    i.lista-ul__vineta.text-dark
                    | <b class="text-dark">Acidez:</b> El uso de vinagre o ácido cítrico para inhibir el crecimiento bacteriano.

                  li.text-dark.text-small 
                    i.lista-ul__vineta.text-dark
                    | <b class="text-dark">Conservación en Aceite:</b> Sumergir alimentos en aceite para preservarlos.
                
                img(src='@/assets/curso/temas/tema3/img_29.png', alt='Texto que describa la imagen').mx-auto


    Separador
    #t_3_2.titulo-segundo
      .h2(data-aos="fade-right") 3.2  Recomendaciones generales

    .bg_img_5.mb-3
      .row.align-items-center.justify-content-center.mb-3(data-aos="zoom-in-down")
        .col-xl-8.mb-3.order-2.order-xl-1
          p.mb-3 Para asegurar la prevención y control del deterioro de los alimentos, la <b>Resolución 2674 de 2013</b> y las Buenas Prácticas de Manufactura (BPM) proporcionan lineamientos claros sobre almacenamiento, transporte, manipulación, limpieza y desinfección en el contexto colombiano.
          
          p.mb-3 Las BPM y la resolución enfatizan la necesidad de mantener una higiene rigurosa en todas las etapas del manejo de alimentos. Esto implica un control sistemático de los factores que puedan influir en la calidad e inocuidad alimentaria, incluyendo temperatura, humedad, y la prevención de la contaminación cruzada durante toda la cadena de producción (Ministerio de Salud y Protección Social, 2013).

          .tarjeta.color-terciario.p-3
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/tema3/img_12.png").img65
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Normativa
                    p.text-small.mb-0 Para conocer más acerca de la normativa que rige las buenas prácticas de manufactura consultar el siguiente link.
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/2674.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download

        .col-md-8.col-xl-4.mb-3.order-1.order-xl-2
          figure
            img(src='@/assets/curso/temas/tema3/img_13.png', alt='Texto que describa la imagen').img125

    .row.justify-content-center.align-items-center.mb-3
      .col-md-8.col-lg-4.mb-3
        figure
          img(src="@/assets/curso/temas/tema3/img_14.png", alt="alt").mx-auto
      .col-lg-8
        LineaTiempoD
          p(numero="1" titulo="Almacenamiento") 
            ul.lista-ul--color.lista-ul--separador
              li 
                i.fas.fa-check-circle
                | Condiciones adecuadas: los alimentos deben almacenarse en condiciones que eviten su deterioro, lo cual incluye mantener una temperatura y humedad apropiadas según el tipo de producto. Los alimentos perecederos deben conservarse a temperaturas de refrigeración adecuadas (≤4°C) o congelación (≤-18°C).
              li 
                i.fas.fa-check-circle
                | Organización y rotación: implementar el sistema PEPS (Primero en Entrar, Primero en Salir) es crucial. Los productos deben estar bien etiquetados con fechas de recepción y expiración para asegurar su consumo antes de que se deterioren.
              li 
                i.fas.fa-check-circle
                | Separación de productos: para evitar la contaminación cruzada, los alimentos crudos deben almacenarse separados de los cocidos o listos para el consumo, preferiblemente en recipientes herméticos.

          p(numero="2" titulo="Transporte") 
            
            ul.lista-ul--color.lista-ul--separador
                li 
                  i.fas.fa-check-circle
                  | Vehículos adecuados: los vehículos utilizados para el transporte de alimentos deben estar designados exclusivamente para este propósito, mantenidos en condiciones higiénicas y equipados para mantener las temperaturas requeridas durante el transporte.
                li 
                  i.fas.fa-check-circle
                  | Manipulación segura: durante el transporte, los alimentos deben estar debidamente protegidos contra daños físicos, contaminación, y condiciones climáticas adversas.

          p(numero="3" titulo="Manipulación") 
            
            ul.lista-ul--color.lista-ul--separador
                li 
                  i.fas.fa-check-circle
                  | Buenas prácticas de higiene: todo el personal involucrado en la manipulación de alimentos debe seguir prácticas estrictas de higiene personal, incluyendo el uso adecuado de ropa protectora y lavado frecuente de manos.
                li 
                  i.fas.fa-check-circle
                  | Evitar la contaminación cruzada: utilizar utensilios y tablas de cortar diferentes para alimentos crudos y cocidos. Asegurarse de que todas las superficies que entren en contacto con alimentos estén limpias y desinfectadas.

          p(numero="4" titulo="Limpieza") 
            
            ul.lista-ul--color.lista-ul--separador
                li 
                  i.fas.fa-check-circle
                  | Procedimientos regulares: implementar un cronograma de limpieza que garantice que todas las áreas y equipos en contacto con alimentos se limpien regularmente para prevenir la acumulación de suciedad y la multiplicación de microorganismos.
                li 
                  i.fas.fa-check-circle
                  | Uso de productos adecuados: utilizar detergentes y productos de limpieza que sean aptos para uso alimentario y seguir las instrucciones del fabricante para su utilización.

          p(numero="5" titulo="Desinfección") 
            
            ul.lista-ul--color.lista-ul--separador
                li 
                  i.fas.fa-check-circle
                  | Soluciones desinfectantes efectivas: aplicar una solución de hipoclorito de sodio a 250 ppm o alcohol al 70 % como desinfectantes estándar después de la limpieza para reducir al mínimo la carga microbiana residual (Ministerio de Salud y Protección Social, 2013).
                li 
                  i.fas.fa-check-circle
                  | Frecuencia y control: la desinfección debe realizarse después de cada limpieza en las áreas críticas, especialmente en las zonas de manipulación de alimentos listos para el consumo.

    Separador
    #t_3_3.titulo-segundo
      .h2(data-aos="fade-right") 3.3 Control de plagas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.mb-4
        .bloque-texto-g.bloque-texto-g--inverso.color-negro.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img_15.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para asegurar la inocuidad alimentaria y prevenir la proliferación de microorganismos en la cocina, es crucial establecer medidas rigurosas de limpieza y desinfección, así como un manejo efectivo de desechos y un control de plagas, todo ello conforme a la <b>Resolución 2674 de 2013</b> del Ministerio de Salud y Protección Social de Colombia. A continuación, se exponen las disposiciones en un lenguaje técnico accesible y formativo:

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Disposiciones referentes a la limpieza y la desinfección para evitar la proliferación de plagas
          img.pst(src='@/assets/curso/temas/titulos/img_19.svg', alt='') 

    p.mb-4.mt-2 La limpieza y desinfección en la cocina son procesos planeados y esenciales para mantener la inocuidad. Esto debe considerarse desde el diseño de las instalaciones, aunque muchas cocinas existentes no fueron diseñadas con este enfoque preventivo. La clave está en la pulcritud durante las preparaciones, asegurando que los cocineros mantengan orden y limpieza en sus áreas de trabajo, como estanterías y mesadas, mientras el personal de limpieza se encarga de áreas generales como paredes, pisos y equipos (Ministerio de Salud y Protección Social, 2013).
        
    .row.justify-content-center.mb-5
      .col-lg-6.mb-3.responsive_tarjeta
        .tarjeta.color-rosa.p-4.h-100
          figure
            img(src="@/assets/curso/temas/tema3/img_16.png", alt="alt").w-25.mx-auto.mb-3
          h4.mb-3.text-center Limpieza
          p La limpieza tiene como objetivo eliminar residuos alimenticios que podrían servir como nutrientes para microorganismos. Para ser efectiva, la limpieza debe evitar que haya suciedad visible, detectable al tacto o al olfato. Se debe seguir un proceso metódico:
                    
          ul.lista-ul--color.lista-ul--separador
            li 
              i.fas.fa-check-circle
              | Remoción de suciedad visible: se eliminan restos visibles de alimentos y otros desechos.
            li 
              i.fas.fa-check-circle
              | Enjabonado: se aplica un detergente adecuado para eliminar suciedad adherida.
            li 
              i.fas.fa-check-circle
              | Enjuagado: se utiliza agua tibia para enjuagar y quitar el detergente y suciedad restante.

      .col-lg-6.mb-3.responsive_tarjeta
        .tarjeta.color-rosa-claro.p-4.h-100
          figure
            img(src="@/assets/curso/temas/tema3/img_17.png", alt="alt").w-25.mx-auto.mb-3
          h4.mb-3.text-center Desinfección
          p La desinfección reduce aún más los microorganismos residuales tras la limpieza. Se recomienda el uso de soluciones como una dilución de hipoclorito de sodio de 250 ppm, preparada diariamente. Alternativamente, el alcohol al 70% puede ser utilizado, ya que es más efectivo que el alcohol puro. (Ministerio de Salud y Protección Social, 2013).

          ul.lista-ul--color.lista-ul--separador
            li 
              i.fas.fa-check-circle
              | Enjuague final: dependiendo del desinfectante empleado, puede ser necesario un último enjuague.
            li 
              i.fas.fa-check-circle
              | Secado: es crucial dejar las superficies lo más secas posible para prevenir la multiplicación de microorganismos.

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Secuencia y frecuencia
          img.pst(src='@/assets/curso/temas/titulos/img_20.svg', alt='') 

    .row.justify-content-center.align-items-center.mb-3
      .col-xl-8.mb-3.order-2.order-xl-1
        p.mb-3 La limpieza debe seguir una secuencia lógica, comenzando de arriba hacia abajo, y debe realizarse con la frecuencia adecuada:
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-check-circle
            | Superficies en contacto directo con alimentos, como mesadas, deben limpiarse frecuentemente durante su uso.
          li 
            i.fas.fa-check-circle
            | Una limpieza exhaustiva debe llevarse a cabo al final de cada jornada.
          li 
            i.fas.fa-check-circle
            | Áreas de menor contacto deben recibir atención al menos mensualmente.

      .col-md-8.col-xl-4.mb-3.order-1.order-xl-2
        figure
          img(src="@/assets/curso/temas/tema3/img_18.png", alt="alt").mx-auto
          
    .bg_img_5
      .row.justify-content-center.mb-3(data-aos="zoom-in-down")
        .col-md-6.col-xl-4.mb-3
          .tarjeta.color-primario.p-4.h-100
            figure
              img(src="@/assets/curso/temas/tema3/img_19.png", alt="alt").w-50.mx-auto.mb-3
            h4.mb-3 Utensilios y Materiales de Limpieza
            p Los utensilios de limpieza deben mantenerse ordenados, limpios y almacenados en un área separada de la cocina. Las esponjas y trapos requieren desinfección diaria para prevenir la contaminación. (Ministerio de Salud y Protección Social, 2013).

        .col-md-6.col-xl-4.mb-3
          .tarjeta.color-primario.p-4.h-100
            figure
              img(src="@/assets/curso/temas/tema3/img_20.png", alt="alt").w-50.mx-auto.mb-3
            h4.mb-3 Desinfestación
            p El control de plagas es fundamental para prevenir la entrada y la proliferación de roedores, insectos y otros animales en la cocina. Se deben establecer barreras físicas, como rejillas y mosquiteros. La fumigación periódica por empresas especializadas es recomendable, asegurando la protección de alimentos y superficies de contacto directo durante el proceso.

        .col-md-6.col-xl-4.mb-3
          .tarjeta.color-primario.p-4.h-100
            figure
              img(src="@/assets/curso/temas/tema3/img_21.png", alt="alt").w-50.mx-auto.mb-3
            h4.mb-3 Manejo de Desechos
            p Un manejo adecuado de desechos es vital para evitar la contaminación y la atracción de plagas. Los cocineros deben recolectar desechos en recipientes con tapa y el personal de limpieza encargado de su evacuación. Estos tachos nunca deben dejarse llenos de un día para otro, cumpliendo así con una estrategia efectiva de eliminación de basura. (Ministerio de Salud y Protección Social, 2013).


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
