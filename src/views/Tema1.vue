<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la seguridad alimentaria
      
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-3
        .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La seguridad alimentaria es un pilar fundamental para la salud pública y el bienestar de las personas. Se trata de garantizar que todos los individuos tengan acceso a alimentos seguros, nutritivos y suficientes para llevar una vida sana y activa. La seguridad alimentaria no solo implica la disponibilidad de alimentos, sino también su calidad e inocuidad, asegurando que estos no contengan sustancias nocivas o microorganismos que puedan causar enfermedades. 
    
    p Este módulo se enfocará en los fundamentos de la seguridad alimentaria, explorando los principales riesgos asociados a la producción y consumo de alimentos, así como las herramientas y estrategias que se utilizan para prevenir la contaminación y garantizar la inocuidad. Aprenderemos sobre los diferentes tipos de peligros que pueden afectar la seguridad alimentaria, como los biológicos, químicos y físicos, y cómo identificarlos, controlarlos y minimizar su impacto. 

    Separador

    #t_1_1.titulo-segundo
      .h2(data-aos="fade-right") 1.1. Conceptos básicos de higiene y seguridad alimentaria

    p La higiene y seguridad alimentaria son pilares fundamentales en la preservación de la salud pública y en la prevención de enfermedades transmitidas por alimentos. Estos conceptos aseguran que los alimentos que consumimos sean seguros, nutritivos y aptos para el consumo humano. A continuación, se detallan los conceptos básicos que todo manipulador de alimentos debe conocer y aplicar.

    .tarjeta.tarjeta.fondo_1_2.p-4.slyder_1.bg-01
      SlyderA(tipo="b")
        .tarjeta.bg-01.p-2
          .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3
            .col-md-12.col-xl-7.mb-4
              h3.mb-2 Definición de higiene alimentaria

              p La higiene alimentaria comprende un conjunto de condiciones y medidas necesarias para garantizar la seguridad e inocuidad de los alimentos en todas las etapas de la cadena alimentaria. Esto incluye desde la producción, procesamiento, y almacenamiento, hasta la distribución y consumo final.

            .col-md-8.col-xl-5
              figure
              img(src='@/assets/curso/temas/tema1/img_2.png', alt='Texto que describa la imagen')

        .tarjeta.bg-01.p-2
          .row.justify-content-center.align-items-center.my-lg-4.p-3
            .col-md-12.col-xl-7.mb-4
      
              h3.mb-2 Importancia de la Higiene y Seguridad Alimentaria.

              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | <b>Prevención de Enfermedades</b>: La aplicación de prácticas adecuadas de higiene reduce significativamente el riesgo de brotes de enfermedades transmitidas por alimentos.
                li 
                  i.lista-ul__vineta
                  | <b>Confianza del Consumidor</b>: La seguridad alimentaria fomenta la confianza de los consumidores en los productos que compran, siendo crucial para el éxito de cualquier negocio alimentario.
                li 
                  i.lista-ul__vineta
                  | <b>Cumplimiento Legal</b>: Adherirse a las normas y regulaciones alimentarias es obligatorio para evitar sanciones legales y mantener licencias operativas.

            .col-md-8.col-xl-5
              figure
                img(src='@/assets/curso/temas/tema1/img_5.png', alt='Texto que describa la imagen')

        .tarjeta.bg-01.p-2
          .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3
            .col-md-12.col-xl-7.mb-4
              h3.mb-2 Principios Básicos.

              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | <b>Limpieza</b>: Mantener altos estándares de limpieza es esencial para prevenir la contaminación cruzada. Esto incluye la limpieza de instalaciones, utensilios, y manos.
                li 
                  i.lista-ul__vineta
                  | <b>Separación</b>: Evitar la contaminación cruzada almacenando y manejando alimentos crudos y cocidos por separado.
                li 
                  i.lista-ul__vineta
                  | <b>Cocción</b>: Cocinar los alimentos a temperaturas adecuadas mata la mayoría de los patógenos dañinos. El uso de termómetros puede asegurar que los alimentos alcancen la temperatura interna necesaria.
                li 
                  i.lista-ul__vineta
                  | <b>Enfriamiento</b>: Enfriar los alimentos de manera adecuada es esencial para evitar la proliferación de bacterias. Los alimentos perecederos deben mantenerse fuera de la zona de peligro de temperatura (entre 5°C y 60°C).

            .col-md-8.col-xl-5
              figure
                img(src='@/assets/curso/temas/tema1/img_6.png', alt='Texto que describa la imagen')

    Separador
    #t_1_2.titulo-segundo
      .h2(data-aos="fade-right") 1.2 Clasificación de los alimentos

    p.mb-5 La clasificación de los alimentos es fundamental para comprender su comportamiento y asegurar su calidad. Este apartado aborda la categorización de los alimentos desde diferentes perspectivas: composición química, tiempo de vida útil, función nutritiva y origen. El conocimiento de estos criterios permite un análisis más profundo de las características de los alimentos y su impacto en la salud y la alimentación:

    .bg_img_2
      .row.align-items-center.justify-content-center.mb-0
        .col-md-12.mb-4
          .titulo-sexto.color-acento-contenido.mb-0
              h5 Figura 1. 
              span Clasificación de alimentos  

          figure
            img.mb-3(src='@/assets/curso/temas/tema1/img_4.svg', alt='La clasificación de los alimentos se detallan a continuación.').mx-auto
            figcaption Fuente: Sena 2024

    Separador
    #t_1_3.titulo-segundo
      .h2(data-aos="fade-right") 1.3  Factores que influyen en la calidad e inocuidad de los alimentos

    p.mb-5 Por diferentes factores que llegan a causar su deterioro y en algunos casos generar contaminación, dichos factores se dividen en agentes físicos, químicos, biológicos y prácticas indeseables; conozcamos a que hace referencia cada uno de estos:

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Agentes físicos
          img.pst(src='@/assets/curso/temas/titulos/img_0.svg', alt='')
          
    p Los agentes físicos <b>suelen actuar durante los procesos de cosecha y los tratamientos posteriores</b>. En general, por sí mismos, no suelen alterar las características nutricionales de los alimentos, pero sí su palatabilidad. El hecho más importante es que <b>pueden significar una vía de entrada a las otras alteraciones</b>. Se destacan:

    .row.mb-5
      .col-md-6.col-lg-4.mb-3
        .tarjeta.bg-5.p-4.h-100.fondo_3
          img.w-25.mx-auto(src="@/assets/curso/temas/tema1/img_9.png")
          h5 Mecánicos
          p Como golpes, cortes, en general sin alteraciones graves, pero que suponen una disminución de la vida útil del alimento.
      .col-md-6.col-lg-4.mb-3
        .tarjeta.bg-6.fondo_2.p-4.h-100
          img.w-25.mx-auto(src="@/assets/curso/temas/tema1/img_10.png")
          h5 Temperatura 
          p Las actividades químicas y enzimáticas doblan su velocidad cada 10°C  y por lo tanto aceleran los procesos de descomposición. Asimismo, se encuentran nutrientes especialmente sensibles al calor (algunas vitaminas), el cual propicia los cambios de estado de emulsiones o mezclas que contengan agua, al facilitar su desecación.
      .col-md-6.col-lg-4.mb-3
        .tarjeta.bg-5.fondo_3.p-4.h-100
          img.w-25.mx-auto(src="@/assets/curso/temas/tema1/img_12.png")
          h5 Humedad
          p Facilita el desarrollo de microorganismos debido a que proporciona las condiciones propicias para su crecimiento y multiplicación.
      .col-md-6.col-lg-4.mb-3
        .tarjeta.bg-6.fondo_2.p-4.h-100
          img.w-25.mx-auto(src="@/assets/curso/temas/tema1/img_13.png")
          h5 El aire 
          p Por contener oxígeno puede alterar algunas proteínas produciendo cambios de color, facilitando la oxidación, etc.
      .col-md-6.col-lg-4.mb-3
        .tarjeta.bg-5.fondo_3.p-4.h-100
          img.w-25.mx-auto(src="@/assets/curso/temas/tema1/img_14.png")
          h5 La luz 
          p Afecta el color y altera algunas vitaminas.
      .col-md-6.col-lg-4.mb-3
        .tarjeta.bg-6.fondo_2.p-4.h-100
          img.w-25.mx-auto(src="@/assets/curso/temas/tema1/img_15.png")
          h5 Presencia de sustancias extrañas 
          p Debido a una inadecuada manipulación sin la aplicación de las buenas prácticas de manufactura que permite la presencia de materiales no deseables en los alimentos como cabellos, plásticos, tierra, etc.
    
    .bg_img.mb-3
      .row.align-items-center.justify-content-star.mb-0.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Agentes químicos
            img.pst(src='@/assets/curso/temas/titulos/img_1.svg', alt='')          

        p.mb-4 Los agentes químicos se manifiestan especialmente durante los procesos de almacenamiento de los alimentos. <b>Su efecto puede afectar de forma notable la comestibilidad del alimento</b>: pardeamiento, enranciamiento, presencia de químicos no autorizados, etc.

      .row.justify-content-center.mb-3

        .col-md-6.col-xl-4.mb-4.mb-xl-2
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img_16.png", alt="alt")
            .crd_hover_txt--body.pt-3
              h4.mb-3.text-center Pardeamiento no enzimático o reacción de Maillard
              p.mb-0.text-small Se incluyen una serie de reacciones complejas entre azúcares y compuestos nitrogenados (proteínas), las cuales generan pigmentos marrones.  <br>En algunos casos se producen de manera tecnológica (fritos y tostados), pero en otras es espontáneo. El calor y la desecación lo favorecen.

        .col-md-6.col-xl-4.mb-4.mb-xl-2
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img_17.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3.text-center Enranciamiento
              p.mb-0.text-small Proceso por el cual un alimento con alto contenido en grasas o aceites se altera con el tiempo adquiriendo un sabor desagradable.

        .col-md-6.col-xl-4.mb-4.mb-xl-2
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img_18.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3.text-center Presencia de químicos no autorizados 
              p.mb-0.text-small Los cuales se presentan en los alimentos al realizar el proceso de limpieza y desinfección sin seguir correctamente los protocolos. <br>Este proceso deja residuos de detergentes y/o desinfectantes, al cosechar las frutas, verduras y hortalizas en tiempos no apropiados con residuos de fungicidas, herbicidas o químicos utilizados durante la producción primaria, al ordeñar o sacrificar los animales sin dejar los tiempos de retiro necesarios en caso de ser vacunados, obteniendo la leche y carne con residuos de antibióticos o medicamentos.

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Agentes biológicos
          img.pst(src='@/assets/curso/temas/titulos/img_2.svg', alt='')          

    p Son considerados, los agentes más relevantes en la alteración de los alimentos siendo de origen biológico, entre los que se pueden diferenciar, los intrínsecos, como las enzimas y los extrínsecos, como microorganismos o parásitos.

    .row.justify-content-center.mb-5
      .col-lg-8.mb-4
        LineaTiempoD
          p(numero="1" titulo="Enzimáticos") Algunas enzimas sobreviven a los propios organismos, pudiendo aumentar su actividad. Pueden cambiar la textura de los alimentos (maduración de frutos o reblandecimiento de carne) y en algunos casos provocar su descomposición. El <em>rigor mortis</em> de los animales, por ejemplo, es debido a cambios enzimáticos ocurridos al faltar la circulación sanguínea y por lo tanto la oxigenación necesaria para el metabolismo aerobio. 

          p(numero="2" titulo="Competidores naturales") Como insectos, roedores y pájaros, que compiten directamente por la obtención de alimento.

          p(numero="3" titulo="Microorganismos") Son sin duda los que producen las transformaciones más indeseadas y abundantes. En algunos casos pueden suponer riesgos para la salud de las personas, siendo las infecciones microbianas el problema más grave de la alimentación humana, después del hambre y la sobrealimentación.

      .col-md-8.col-lg-4.mb-4
        figure
          img(src="@/assets/curso/temas/tema1/img_19.png", alt="alt")

    .row.justify-content-center.mb-3(data-aos="zoom-in-down")
      .col-md-12
        .cajon.bg-3.g_18.mb-5
          .row.mb-4
            .col-lg-12.p-4.ps-5 
              p Cabe destacar que, sin embargo, no todos los efectos son negativos, pues diversos alimentos son producidos total o parcialmente por ellos: como los alimentos fermentados. En algunas ocasiones, los microorganismos ya se encuentran en el alimento, en otras, son oportunistas que se encuentran de diversas maneras en el medio que nos rodea (aire, agua, etc.) Entre los más perjudiciales están las bacterias, tanto por su abundancia como por su elevada tasa de reproducción. Pueden producir toxinas (<em>Clostridium</em>) o ser infecciosas por ellas mismas (Salmonella, <em>Listeria</em>).

    p.mb-3 Otro grupo son los mohos, importantes por la producción de toxinas y por su resistencia a las condiciones más extremas; finalmente, las levaduras, con las transformaciones rápidas más relevantes desde el punto de vista fermentativo.
    
    .bg_img_2
      .row.align-items-center.justify-content-center.mb-5.tarjeta_figura
        .col-md-6.mb-4
          .titulo-sexto.color-acento-contenido.mb-0
              h5 Figura 2. 
              span Rangos de temperatura para la proliferación bacteriana  

          figure
            img.w-75.mb-3(src='@/assets/curso/temas/tema1/img_21.png', alt='La temperatura para la proliferación bacteriana se divide así: - Las bacterias se mueren en una temperatura entre 100ºC y 60ºC. - Las bacterias sobreviven y crecen entre 60ºC y 4ºC. - Las bacterias crecen muy lento o no se multiplican a menos de 4ºC. ').mx-auto
            figcaption Fuente: tomado de https://0grados.com/factores-de-cuidado-en-camaras-de-refrigeracion-y-congelacion/

        .col-md-6
          p La temperatura juega un papel fundamental en la proliferación de los microorganismos, para el crecimiento de la mayoría de los microorganismos la temperatura ideal oscila entre 36 - 37ºC, aunque el margen de crecimiento de los mismos está entre 5º y 65ºC (también conocido como zona de riesgo). A pesar de esto cuanto más cerca estamos de los 37ºC, mayor es la multiplicación de los mismos.
          p Las bacterias se multiplican rápidamente entre 5ºC y 65ºC. Para mantener los alimentos fuera de esta <b>“zona de riesgo”</b>, es recomendable mantener los alimentos fríos y calientes a las temperaturas respectivas. Mantener los alimentos fríos en el refrigerador, en neveras o sobre hielo en la línea de servicio. Mantener los alimentos calientes en el horno, en platos calentados o en mesas de vapor precalentadas, bandejas calientes u ollas eléctricas de cocción lenta.
          p No deje nunca los alimentos en la <b>“zona de peligro”</b> durante más de 2 horas. A medida que la temperatura aumenta el crecimiento disminuye, de forma que al superar los 65ºC los microorganismos comienzan a alterarse y a partir de 100ºC (temperatura de ebullición del agua) son destruidos.
          p Por debajo de los 5ºC el crecimiento microbiano es muy lento (la temperatura normal de un refrigerador familiar es entre 1 y 4ºC) y por debajo de la temperatura de congelación (-18ºC) no existe desarrollo, aunque muchos sobrevivirán y volverán a multiplicarse en el momento de descongelación del alimento.

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Factores que favorecen la proliferación microbiana
          img.pst(src='@/assets/curso/temas/titulos/img_3.svg', alt='')          

    p.mb-5 La presencia de microorganismos en los alimentos es un factor crucial que determina su seguridad y calidad. Estos microorganismos necesitan ciertas condiciones para crecer y multiplicarse, lo que puede llevar al deterioro del alimento y generar riesgos para la salud. Algunos de los factores más importantes que favorecen la proliferación microbiana son la humedad, la disponibilidad de oxígeno y la presencia de nutrientes.    
    
    .row.justify-content-center.mb-5
      .col-lg-12.position-relative
        .avatar
          figure
            img.d-lg-none.d-xl-flex(src="@/assets/curso/temas/tema1/img_22.png", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/img_23.svg", alt="alt").img100
            .col.col-xl-7
              h5 Humedad o disponibilidad de agua
              p Los microorganismos necesitan de agua para crecer y llevar a cabo sus funciones metabólicas y los medios húmedos favorecen su desarrollo, como es el caso de las carnes, pescados que se alteran rápidamente, sin embargo, alimentos desecados tardan más tiempo en deteriorarse.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/img_24.svg", alt="alt").img100
            .col.col-xl-7
              h5 Oxígeno
              p Las necesidades de los microorganismos varían en cuanto al oxígeno, encontrándonos en la naturaleza distintos tipos:
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | <b>Aerobios:</b> microorganismos que necesitan oxígeno para desarrollarse
                li 
                  i.lista-ul__vineta
                  | <b>Anaerobios</b>: microorganismos que necesitan la ausencia de oxígeno en su desarrollo.
                li 
                  i.lista-ul__vineta
                  | <b>Anaerobios facultativos</b>: microorganismos que se adaptan a las dos condiciones.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/img_25.svg", alt="alt").img100
            .col.col-xl-7
              h5 Nutrientes
              p Todos los microorganismos necesitan además de agua: proteínas, minerales, hidratos de carbono y lípidos. Estos nutrientes se encuentran en la mayoría de los alimentos, aunque debido al componente principal de cada uno de ellos, será más propicio para el desarrollo de unos u otros microorganismos.



    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Prácticas indeseables
          img.pst(src='@/assets/curso/temas/titulos/img_4.svg', alt='')          

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-3
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_26.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las prácticas indeseables para la seguridad alimentaria son acciones o comportamientos que pueden aumentar el riesgo de contaminación o deterioro de los alimentos, poniendo en peligro la salud de los consumidores. Es fundamental que todos los involucrados en la cadena alimentaria, desde los productores hasta los consumidores, sean conscientes de estas prácticas que se presentan a continuación y se comprometan a evitarlas para garantizar la seguridad alimentaria. 
    
    .row.align-items-center.justify-content-center.mb-0
      .col-md-12.mb-0
        .titulo-sexto.color-acento-contenido.mb-5
            h5 Tabla 1. 
            span Practicas indeseables para la seguridad alimentaria
        
        .tabla-b.color-acento-contenido.mb-5 
          table
            caption Fuente: Sena 2024.
            thead.encabezado-tabla
              tr
                th Categoría
                th Práctica indeseable
                th Consecuencias
            
            tbody
              tr
                td.text-bold Higiene personal
                td No lavarse las manos correctamente, manipular alimentos con las manos sucias, tocar alimentos con heridas abiertas, no usar guantes.
                td Contaminación de alimentos con microorganismos patógenos.
            
              tr
                td.text-bold Manipulación incorrecta
                td No respetar la cadena de frío, descongelar a temperatura ambiente, cocinar a temperaturas inadecuadas, mezclar alimentos crudos y cocidos, no lavar las frutas y verduras correctamente.
                td Crecimiento de microorganismos, formación de toxinas, enfermedades transmitidas por alimentos.
            
              tr
                td.text-bold Almacenamiento inadecuado
                td Guardar alimentos en envases o recipientes sucios, no rotular correctamente los alimentos, no respetar la cadena de frío, almacenar alimentos en zonas húmedas o con plagas.
                td Contaminación de alimentos, proliferación de microorganismos, deterioro de alimentos.
            
              tr
                td.text-bold Preparación inadecuada
                td Utilizar utensilios sucios, no limpiar correctamente las superficies de trabajo, utilizar ingredientes en mal estado o vencidos, no lavar los alimentos antes de usarlos.
                td Contaminación de alimentos, riesgo de intoxicación alimentaria.
            
              tr
                td.text-bold Control de plagas
                td No controlar la presencia de insectos, roedores y otros animales en las zonas de producción, almacenamiento o manipulación de alimentos.
                td Contaminación de alimentos, enfermedades transmitidas por alimentos.
            
              tr
                td.text-bold Uso inadecuado de productos químicos
                td No utilizar productos autorizados para la limpieza o desinfección de alimentos, no respetar las dosis recomendadas, no enjuagar correctamente los productos antes de usarlos.
                td Contaminación de alimentos, riesgo de intoxicación alimentaria, daños a la salud.
            
              tr
                td.text-bold Falta de capacitación del personal
                td No capacitar al personal en buenas prácticas de manipulación de alimentos, no realizar controles de calidad, no informar al personal sobre los riesgos de contaminación.
                td Falta de conocimiento sobre los riesgos de contaminación, prácticas inadecuadas, errores en la manipulación de alimentos.
          

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
