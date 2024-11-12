<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Buenas prácticas de manipulación y preservación de alimentos

    figure
        img.mb-3(src='@/assets/curso/temas/tema2/img_1.png', alt='Texto que describa la imagen').mx-autoplay

    Separador

    #t_2_1.titulo-segundo
      .h2(data-aos="fade-right") 2.1 Historia de las Buenas Prácticas de Manufactura (BPM)

    p.mb-2 Las Buenas Prácticas de Manufactura (BPM) tienen sus raíces en una historia marcada por incidentes de salud pública relacionados con la seguridad de los alimentos y medicamentos.

    .bg_img_2
      .row.justify-content-center(data-aos="zoom-in-down")
        .col-xl-10.order_linea_tiempo
          PasosA.color-acento-contenido.mb-3()
            .row
              .col-lg-6.mb-4.mb-lg-0
                h3 Principios del siglo XX
                p La creciente industrialización de la producción de alimentos y medicamentos, especialmente en Estados Unidos, llevó a condiciones insalubres y prácticas poco higiénicas que ponían en riesgo la salud de los consumidores. 
              .col-lg-6
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema2/img_3.png', alt='').img125

            .row
              .col-lg-6.mb-4
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema2/img_4.png', alt='').img125
              .col-lg-6.mb-4.mb-lg-0
                h3 1906/ Publicación del libro "La Jungla"
                p La creciente industrialización de la producción de alimentos y medicamentos, especialmente en Estados Unidos, llevó a condiciones insalubres y prácticas poco higiénicas que ponían en riesgo la salud de los consumidores. 

            .row
              .col-lg-6.mb-4.mb-lg-0
                h3 1938/ Acta de Alimentos, Medicamentos y Cosméticos
                p Esta acta promulgada en Estados Unidos, fue una respuesta directa a la crisis generada por "La Jungla". Esta ley estableció requisitos de inocuidad para los alimentos y medicamentos, incluyendo la inspección de las instalaciones y los procesos de producción, la eliminación de prácticas peligrosas y la introducción de sistemas de control de calidad. 
              .col-lg-6
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema2/img_5.png', alt='').img125

            .row
              .col-lg-6.mb-4
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema2/img_6.png', alt='').img125
              .col-lg-6.mb-4.mb-lg-0
                h3 1962/ Concepto de BPM 
                p Tras un caso de graves efectos adversos de un medicamento: "Talidomida" se desencadenó un cambio de paradigma en la regulación de la industria farmacéutica. A partir de ese momento, se comenzó a implementar de manera más formalizada el concepto de buenas prácticas en la fabricación de medicamentos, estableciendo guías que posteriormente influyeron en la elaboración de regulaciones globales para todos los procesos relacionados con la alimentación y la salud.

            .row
              .col-lg-6.mb-4.mb-lg-0
                h3 1969. El <em>Codex Alimentarius</em>
                p Se concretó una recopilación de estándares internacionales para alimentos, que adoptó las BPM como un principio fundamental para la seguridad alimentaria, sentando las bases para la estandarización de prácticas de higiene y seguridad en todo el mundo.
              .col-lg-6
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema2/img_7.png', alt='').img125

    Separador
    #t_2_2.titulo-segundo
      .h2(data-aos="fade-right") 2.2 Principios de las BPM

    .bg_img_0
      .row.justify-content-center.mb-2
        .col-xl-8.mb-3.order-2.order-xl-1
          .cajon.bg-4.g_18.mb-5.mb-lg-0
            .row.mb-4
              .col-lg-12.p-4.ps-5 
                p Las Buenas Prácticas de Manufactura (BPM) o <em>Good manufacturing Practices</em> (GMP), son un conjunto de herramientas que se implementan en todas las actividades que involucren manipulación de alimentos. El objetivo central es la obtención de productos seguros para el consumo humano. Los ejes principales del BPM o GMP en inglés, <em>Good Manufacturing Pactices</em>, son las metodologías utilizadas para la manipulación de alimentos y la higiene y seguridad de éstos, evitando que sean un vehículo de las enfermedades transmitidas por alimentos (ETA).

          p.mb-3 Las Buenas Prácticas de Manufactura (BPM) se constituyen como regulaciones de carácter obligatorio en Colombia y en gran cantidad de países; buscan evitar la presencia de riesgos de índole físico, químico y biológico durante el proceso de manufactura de alimentos, que pudieran repercutir en afectaciones a la salud del consumidor.

          p.mb-3 Una guía de buenas prácticas de manufactura debe contemplar los siguientes temas, sin omitir ninguno de ellos:

        .col-md-8.col-xl-4.mb-3.order-1.order-xl-2
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema2/img_8.png', alt='')
    
    .row.align-items-center.justify-content-center.mb-3
      .col-md-9.mb-4
        .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 3. 
            span Temas que deben incluirse en las guías de BPM

        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img_9.png', alt='Texto que describa la imagen').mb-3.mx-auto
              figcaption Fuente: Elaboración Propia.

          .tarjeta.color-acento-botones.p-3(x="40%" y="17%" numero="A")
            .h5.mb-2.texto-color-acento-botones Personal
            p.text-dark.text-small La dirección debe establecer responsabilidades claras para los manipuladores y demás trabajadores de la cocina, enfocadas en la sanidad, higiene personal y capacitación. Esto implica exámenes médicos pre-ocupacionales y chequeos periódicos para detectar y prevenir enfermedades infecciosas. Se deben establecer normas estrictas para la higiene personal, incluyendo el lavado de manos frecuente, el uso de uniformes limpios, la prohibición de fumar o comer en áreas de trabajo y el manejo adecuado de utensilios y equipos.  El personal debe recibir capacitación constante sobre las normas de higiene, seguridad alimentaria y manipulación de alimentos.  Las BPM en personal buscan prevenir la transmisión de enfermedades a través de la mano de obra, asegurando la inocuidad de los alimentos.

          .tarjeta.color-acento-botones.p-3(x="60%" y="17%" numero="B")
            .h5.mb-2.texto-color-acento-botones Operaciones sanitarias
            p.text-dark.text-small Se deben implementar normas y principios básicos para el saneamiento e higiene del edificio, las dependencias, el equipamiento y los utensilios.  Esto incluye controlar la calidad y potabilidad del agua y del aire, asegurando su adecuada ventilación y circulación. Se deben establecer procedimientos eficientes para la gestión de desperdicios y desechos, incluyendo su recolección, almacenamiento y eliminación, para evitar la proliferación de plagas y la contaminación ambiental.  Se deben implementar medidas para controlar la presencia de plagas, como insectos y roedores, asegurando la limpieza y desinfección de las instalaciones para evitar la contaminación. 

          .tarjeta.color-acento-botones.p-3(x="68%" y="46%" numero="C")
            .h5.mb-2.texto-color-acento-botones Edificio y terreno
            p.text-dark.text-small Se deben implementar normas y principios básicos para el saneamiento e higiene del edificio, las dependencias, el equipamiento y los utensilios.  Esto incluye controlar la calidad y potabilidad del agua y del aire, asegurando su adecuada ventilación y circulación. Se deben establecer procedimientos eficientes para la gestión de desperdicios y desechos, incluyendo su recolección, almacenamiento y eliminación, para evitar la proliferación de plagas y la contaminación ambiental.  Se deben implementar medidas para controlar la presencia de plagas, como insectos y roedores, asegurando la limpieza y desinfección de las instalaciones para evitar la contaminación. 

          .tarjeta.color-acento-botones.p-3(x="60%" y="72%" numero="D")
            .h5.mb-2.texto-color-acento-botones Equipamiento y utensilios
            p.text-dark.text-small El diseño de los equipos y utensilios empleados en la cocina debe facilitar su limpieza y mantenimiento, previniendo la contaminación de los alimentos.  Los materiales de los equipos y utensilios deben ser no porosos, resistentes a la corrosión, al calor y fáciles de limpiar. Se deben establecer reglas para el manejo higiénico de los equipos y utensilios, incluyendo su limpieza y desinfección regular. 

          .tarjeta.color-acento-botones.p-3(x="40%" y="72%" numero="E")
            .h5.mb-2.texto-color-acento-botones Procesos y controles
            p.text-dark.text-small El diseño de los equipos y utensilios empleados en la cocina debe facilitar su limpieza y mantenimiento, previniendo la contaminación de los alimentos.  Los materiales de los equipos y utensilios deben ser no porosos, resistentes a la corrosión, al calor y fáciles de limpiar. Se deben establecer reglas para el manejo higiénico de los equipos y utensilios, incluyendo su limpieza y desinfección regular. 

          .tarjeta.color-acento-botones.p-3(x="31%" y="46%" numero="F")
            .h5.mb-2.texto-color-acento-botones Registros
            p.text-dark.text-small Los registros son un elemento fundamental para el control de las buenas prácticas.  Se deben llevar registros de: limpieza y desinfección de las instalaciones, equipos y personal, inspección de la materia prima, productos y preparaciones, temperatura y condiciones de transporte de los alimentos y cualquier otra información relevante para la gestión de la seguridad alimentaria.


    .bg_img_4
      .row.align-items-center.justify-content-star.mb-0.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Campos de aplicación
            img.pst(src='@/assets/curso/temas/titulos/img_5.svg', alt='')  

      .row.justify-content-center.align-items-center.mb-3
        .col-xl-8.mb-4    
          ul.lista-ul--color.lista-ul--separador
            li 
              i.fas.fa-check-circle
              | A todas las fábricas y establecimientos donde se procesan los alimentos; los equipos, utensilios y el personal manipulador de alimentos.
            li 
              i.fas.fa-check-circle
              | A todas las actividades de fabricación, procesamiento, preparación, envase, almacenamiento, transporte, distribución y comercialización de alimentos en el territorio nacional.
            li 
              i.fas.fa-check-circle
              | A los alimentos y materias primas para alimentos que se fabriquen, envasen, expendan, exporten o importen, para el consumo humano.
            li 
              i.fas.fa-check-circle
              | A las actividades de vigilancia y control que ejerzan las autoridades sanitarias sobre la fabricación, procesamiento, preparación, envase, almacenamiento, transporte, distribución, importación, exportación y comercialización de alimentos, sobre los alimentos y materias primas para alimentos.
        .col-md-8.col-xl-4.mb-4
          figure
            img(src='@/assets/curso/temas/tema2/img_10.png', alt='Texto que describa la imagen') 
    
    .bg_img_6.fondo_2_1_3
      .row.align-items-center.justify-content-star.mb-0.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Disposiciones del personal
            img.pst(src='@/assets/curso/temas/titulos/img_6.svg', alt='')  
            
      .row.align-items-center.justify-content-center.mb-3
        .col-lg-12.mb-5
          .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img_11.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Las disposiciones referentes al personal son la base para garantizar la seguridad alimentaria, asegurando que los manipuladores de alimentos trabajen con higiene y responsabilidad, protegiendo a los consumidores de posibles enfermedades. Estas normas cubren aspectos cruciales como los exámenes médicos, la higiene personal y el uso adecuado de ropa reglamentaria.

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Exámenes médicos
          img.pst(src='@/assets/curso/temas/titulos/img_7.svg', alt='')  

    p.mb-5 La dirección debe garantizar que los manipuladores de alimentos se sometan a un examen médico pre-ocupacional y a chequeos periódicos regulares. Estos exámenes buscan identificar y prevenir la presencia de enfermedades infecciosas como diarrea, vómitos, faringitis o fiebre, así como la portación sana de enfermedades, heridas o llagas infectadas. En caso de detectar alguna afección, la actividad del manipulador podría suspenderse hasta la recuperación o, en su defecto, continuar con el trabajo bajo medidas de higiene reforzadas.

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Higiene
          img.pst(src='@/assets/curso/temas/titulos/img_8.svg', alt='')  

    p.mb-4 La higiene del personal es crucial para la seguridad alimentaria. La dirección debe promover y supervisar la aplicación de normas básicas de higiene para los cocineros:
  
    .row.justify-content-center.mb-3.align-items-center
      .col-xl-9.mb-3    
          ul.lista-ul--color.lista-ul--separador
            li 
              i.fas.fa-check-circle
              | Presentación personal: los cocineros deben presentarse a trabajar con higiene personal impecable, incluyendo una ducha y lavado periódico del cabello, afeitado o barba recortada, cabello recogido, uñas limpias y cortadas sin esmalte, entre otros.
            li 
              i.fas.fa-check-circle
              | Prácticas prohibidas: se deben prohibir las conductas no sanitarias como el uso de joyas, maquillaje, fumar, comer, masticar chicle, escupir, tocarse la nariz o la boca, estornudar o toser sobre los alimentos, arrojar sobras o dejar papeles en el piso.
            li 
              i.fas.fa-check-circle
              | Orden y limpieza: los cocineros son responsables del orden y la limpieza dentro de su área de trabajo. Es importante mantener el área limpia, libre de restos de comida, papeles o utensilios sucios.
            li 
              i.fas.fa-check-circle
              | Lavado de manos: el lavado de manos debe ser una práctica constante y realizarse antes de manipular alimentos, después de usar el baño, de tocar productos contaminados o desechos, al ingresar a trabajar y al cambiar de tarea. Se debe usar jabón y agua limpia para un lavado efectivo.
      .col-md-8.col-xl-3
        figure
          img(src='@/assets/curso/temas/tema2/img_12.png', alt='Texto que describa la imagen').mb-3 
             
    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Ropa reglamentaria
          img.pst(src='@/assets/curso/temas/titulos/img_9.svg', alt='')  
          
    p.mb-4 Lla ropa de trabajo de los manipuladores debe ser limpia y estar en buen estado, y debe cambiarse al inicio de cada jornada por un uniforme reglamentario. Se debe evitar usar la ropa de trabajo fuera del área de trabajo para prevenir la contaminación de los alimentos. El uso de elementos de profilaxis como guantes, barbijos y cofias debe ser regulado para minimizar el riesgo de contaminación. Estos elementos deben ser de un solo uso, cambiarse cuando estén sucios o dañados, y utilizarse de manera correcta para evitar la contaminación. 
  
    .row.justify-content-center
      .col-md-12.mb-2
        .cajon.bg-4.g_18.mb-5.mb-lg-0
          .row.mb-4
            .col-lg-12.p-4.ps-5
              p.mb-0 Recuerda que las buenas prácticas de higiene del personal son vitales para garantizar la seguridad alimentaria. La dirección debe implementar políticas claras y promover la cultura de la higiene para asegurar la calidad e inocuidad de los alimentos.
      
    .bg_img_5
      .row.align-items-center.justify-content-star.mb-0.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Disposiciones referentes a las instalaciones y edificio 
            img.pst(src='@/assets/curso/temas/titulos/img_10.svg', alt='')  
            
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.mb-3
          .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img_13.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 El diseño y mantenimiento de las instalaciones de cocina son cruciales para asegurar un ambiente seguro e higiénico en el cual procesar alimentos. Tal y como estipula la normativa, estas instalaciones deben facilitar una limpieza efectiva y minimizar el riesgo de contaminación (Ministerio de Salud y Protección Social, 2013, Art. 7).
              
    h4.text-center.mb-4 Se deben tener en cuenta los siguientes elementos: 

    .row.justify-content-center.mb-5
      .col-lg-8.mb-3
        LineaTiempoD
          p(numero="1" titulo="Diseño higiénico") Las cocinas deben construirse para evitar la acumulación de suciedad y permitir operaciones de limpieza eficaces. Las superficies deben ser continuas y de fácil acceso para la limpieza y desinfección, evitando ángulos y grietas donde se pueda acumular suciedad.

          p(numero="2" titulo="Distribución interna") Una adecuada distribución de los espacios en la cocina es esencial para prevenir la contaminación cruzada y optimizar el flujo de trabajo. Esto incluye la correcta disposición de equipos y áreas de trabajo, asegurando que el movimiento de materiales y personas no comprometa la higiene (Ministerio de Salud y Protección Social, 2013, Art. 6).

          p(numero="3" titulo="Control de plagas") Es obligatorio construir las instalaciones de forma que se evite la entrada de plagas, como insectos y roedores. Todas las posibles entradas deben ser selladas adecuadamente para asegurar que estas no pueden acceder a las áreas de preparación de alimentos.
          
          p(numero="4" titulo="Materialidad de superficies") Las superficies deben ser antideslizantes para garantizar la seguridad de los trabajadores, pero también deben ser lisas para facilitar la limpieza. Los materiales como las resinas poliméricas son ideales por su durabilidad y facilidad de mantenimiento (Ministerio de Salud y Protección Social, 2013, Art. 8).
          
          p(numero="5" titulo="Revestimiento de paredes") Las superficies deben ser antideslizantes para garantizar la seguridad de los trabajadores, pero también deben ser lisas para facilitar la limpieza. Los materiales como las resinas poliméricas son ideales por su durabilidad y facilidad de mantenimiento (Ministerio de Salud y Protección Social, 2013, Art. 8).
          
          p(numero="6" titulo="Prevención de condensación") Los techos deben diseñarse para evitar la acumulación de humedad que pueda provocar condensación y goteo sobre áreas donde se manipulan alimentos. El control de la temperatura y la humedad es esencial para prevenir estos riesgos (Ministerio de Salud y Protección Social, 2013, Art. 9).

      .col-8.col-lg-4.mb-3
        figure
          img(src="@/assets/curso/temas/tema2/img_14.png", alt="alt")

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Disposiciones referentes a los utensilios, recipientes, envases y envolturas
          img.pst(src='@/assets/curso/temas/titulos/img_11.svg', alt='')  
          
    p.mb-3 Los utensilios, recipientes, envases y envolturas utilizados en la cocina deben cumplir con estrictos requisitos de higiene para asegurar la inocuidad de los alimentos. Según la Resolución 2674 de 2013 del Ministerio de Salud y Protección Social de Colombia, es imperativo que estos elementos se encuentren en perfecto estado de conservación e higiene para prevenir la contaminación cruzada (Ministerio de Salud y Protección Social, 2013, Art. 5).

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-xl-4
        figure
          img(src='@/assets/curso/temas/tema2/img_15.png', alt='Texto que describa la imagen').mx-auto.mb-4 
      .col-xl-8    
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-check-circle
            |	Diferenciación de utensilios: se debe diferenciar entre utensilios para alimentos dulces y salados, lo cual puede hacerse mediante un sistema de colores o etiquetas. Esta práctica ayuda a minimizar el riesgo de alteraciones en el sabor y potenciales contaminaciones.
          li 
            i.fas.fa-check-circle
            |	Uso y limpieza: es fundamental no utilizar recipientes que hayan contenido alimentos crudos para almacenar o manipular alimentos cocidos sin una limpieza meticulosa previa con detergente apropiado. Esto se alinea con las prácticas de higiene recomendadas en las BPM.
          li 
            i.fas.fa-check-circle
            |	Condiciones físicas: todos los utensilios deben estar libres de óxidos, completamente secos y libres de restos de agua. Los utensilios dañados, como aquellos con rajaduras, se deben descartar para evitar el riesgo de contaminación física (Ministerio de Salud y Protección Social, 2013, Art. 12).
          li 
            i.fas.fa-check-circle
            |	Materiales prohibidos: el uso de utensilios de madera no está permitido debido a la dificultad para limpiarlos adecuadamente y el riesgo potencial de albergar microorganismos.
          li 
            i.fas.fa-check-circle
            | Herramientas de limpieza: las esponjas de fibra natural o sintética se recomiendan para la limpieza de utensilios, mientras que las esponjas de virutas de acero deben evitarse, ya que pueden desprender partículas que contaminen los alimentos.
    
    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Disposiciones referentes a proveedores
          img.pst(src='@/assets/curso/temas/titulos/img_12.svg', alt='')  
          
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.mb-3
        .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img_16.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Se debe realizar una visita técnico-profesional al establecimiento del proveedor para evaluar las condiciones de la infraestructura, higiene y métodos de conservación que utiliza. El proveedor debe contar con el registro de su establecimiento como elaborador y/o distribuidor de alimentos, así como con la habilitación correspondiente del municipio o departamento.
          
    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Disposiciones referentes a las materias primas: asegurando la calidad e inocuidad
          img.pst(src='@/assets/curso/temas/titulos/img_13.svg', alt='')  
          
    .row.justify-content-center.align-items-center.mb-3
      .col-md-8.col-xl-3.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img_17.png', alt='Texto que describa la imagen').mx-auto
      .col-xl-9.mb-3
        p.mb-4 <b>Control de origen y procedencia:</b> es fundamental documentar el origen y procedencia de todos los productos y materias primas que se utilizan en la cocina. Cada producto debe contar con su etiqueta correspondiente, la cual debe incluir la fecha de elaboración, vencimiento, la descripción de los ingredientes, el registro del producto y del establecimiento. Mientras el producto se utiliza en la cocina, la etiqueta debe mantenerse visible. 
        .cajon.bg-3.g_18.mb-5.mb-lg-0
          .row.mb-4
            .col-lg-12.p-4.ps-5
              p.mb-0 <b>Prohibición de uso de productos en mal estado:</b> la presencia de materias primas o preparaciones culinarias con defectos de preparación o conservación indica su intención de uso. Por lo tanto, estas no pueden ser utilizadas y deben ser devueltas o descartadas dentro de las 48 horas siguientes. Los productos en mal estado deben ser almacenados en un lugar aislado, con una etiqueta visible que indique su inutilización. Está prohibido separar la porción en mal estado y vender el resto del alimento. Todo el producto se considera desperdicio.
      
    h4.text-center.mb-3 Evaluación de la materia prima: al adquirir una materia prima, se deben evaluar los siguientes factores:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-3
        LineaTiempoD
          p(numero="1" titulo="Calidad organoléptica") Los manipuladores deben tener conocimiento de la calidad organoléptica de los alimentos, es decir, su aspecto visual (color, textura), olor y sabor. Esta evaluación es parte de la ética profesional y comercial.

          p(numero="2" titulo="Calidad higiénica") La inspección de la materia prima, incluyendo su estado de conservación y manipulación, es fundamental para garantizar la seguridad alimentaria. Se debe comprobar que la materia prima esté libre de contaminantes y que se ha almacenado y manipulado correctamente.

          p(numero="3" titulo="Costo") El costo de las materias primas es un factor importante a considerar al momento de seleccionar proveedores y comprar productos. 
          
          p(numero="4" titulo="Control de recepción") Es crucial realizar una inspección y control de las materias primas al momento de su recepción. Esta inspección debe incluir:
            ul.lista-ul--color.lista-ul--separador
              li 
                i.fas.fa-check-circle
                |	Control cuantitativo: verificar que la cantidad recibida coincida con la cantidad indicada en la factura, la nota de remito o la entrega.
              li 
                i.fas.fa-check-circle
                |	Control cualitativo: evaluar el color, olor, sabor y textura de la materia prima, así como su estado general y el embalaje. Se debe medir la temperatura de la materia prima utilizando un termómetro higienizado.
              li 
                i.fas.fa-check-circle
                |	Documentación: verificar que la materia prima cuente con la rotulación correcta, incluyendo el origen, el registro del establecimiento y la fecha de elaboración y vencimiento.

      .col-md-8.col-lg-4.mb-3
        figure
          img(src="@/assets/curso/temas/tema2/img_18.png", alt="alt")
            
    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Disposiciones referentes al transporte: garantizando la seguridad de los alimentos en movimiento
          img.pst(src='@/assets/curso/temas/titulos/img_14.svg', alt='')  

    figure
      img(src='@/assets/curso/temas/tema2/img_19.png', alt='Texto que describa la imagen').mx-auto.mb-4

    p.mb-5 El transporte de alimentos es una parte crucial de la cadena alimentaria, y es crucial asegurar que se realiza de forma segura para preservar la calidad e inocuidad de los productos. Una de las mayores falencias en este ámbito es la falta de vehículos adecuados y la falta de higiene durante el transporte. Sin embargo, existen esfuerzos para mejorar la situación mediante la implementación de nuevos vehículos con sistemas de refrigeración adecuados. 

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Requisitos para el transporte
          img.pst(src='@/assets/curso/temas/titulos/img_15.svg', alt='')  

    .row.justify-content-center.align-items-center.mb-3
      .col-xl-8.mb-3.order-2.order-xl-1
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-check-circle
            |	Adecuación del vehículo: los medios de transporte que se utilizan para transportar alimentos deben ser adecuados para el tipo de producto que transportan, especialmente si se trata de productos frescos, procesados o semi-procesados. Los vehículos deben ser construidos con materiales que permitan una limpieza, desinfección y desinfestación efectiva. La higiene del vehículo, tanto interna como externa, debe ser extrema.
          li 
            i.fas.fa-check-circle
            |	Higiene del personal: el personal que se encarga del transporte de los alimentos debe mantener altos estándares de higiene, incluyendo la limpieza y desinfección personal.
    
      .col-xl-4.mb-3.order-1.order-xl-2
        figure
          img(src="@/assets/curso/temas/tema2/img_20.png", alt="alt")

    .row.justify-content-center.mb-5
      .col-lg-6.col-xl-6.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img_21.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center Transporte de alimentos no perecederos
            p.mb-0.text-small El transporte de alimentos no perecederos generalmente no presenta mayores dificultades. Sin embargo, cuando se trata de grandes volúmenes, es fundamental que los productos estén paletizados para optimizar el espacio y el tiempo, así como para reducir el riesgo de daños y roturas. 

      .col-lg-6.col-xl-6.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img_22.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center Transporte de alimentos perecederos
            p.mb-0.text-small El transporte de alimentos perecederos es un proceso que requiere un cuidado especial, especialmente en cuanto a la temperatura. Es fundamental controlar la temperatura del vehículo para evitar un corte de la cadena de frío, lo que podría afectar la vida útil del alimento y aumentar el riesgo de contaminación. Un corte en la cadena de frío puede provocar la multiplicación de microorganismos patógenos y en algunos casos, puede ocasionar una intoxicación alimentaria.

    .bg_img_5
      .row.justify-content-center.align-items-center.mb-2 
        h4.mb-5.text-center Recomendaciones para el transporte de alimentos perecederos:
        .row.justify-content-center.mb-5
          .col-md-6.col-lg-4.mb-4
            .tarjeta-numerada.bg-06.p-5.h-100
              .tarjeta-numerada__numero
                .h2 1
              p 
                b Control de temperatura
              p Utilizar sistemas de refrigeración adecuados para mantener la temperatura del vehículo dentro de los rangos establecidos para el tipo de producto que se transporta.

          .col-md-6.col-lg-4.mb-4
            .tarjeta-numerada.bg-07.p-5.h-100
              .tarjeta-numerada__numero
                .h2 2
              p 
                b Manejo cuidadoso
              p Manipular los productos con cuidado para evitar golpes o movimientos bruscos que puedan afectar su calidad.

          .col-md-6.col-lg-4.mb-4
            .tarjeta-numerada.bg-08.p-5.h-100
              .tarjeta-numerada__numero
                .h2 3
              p 
                b Limpieza y desinfección 
              p Limpiar y desinfectar el vehículo con frecuencia, especialmente después de cada transporte, para evitar la acumulación de contaminantes.

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Disposiciones referentes al almacenamiento en la cocina
          img.pst(src='@/assets/curso/temas/titulos/img_16.svg', alt='')  
    
    .row.justify-content-center.align-items-center.mb-3
      .col-md-8.col-xl-4.mb-4
        figure
          img(src="@/assets/curso/temas/tema2/img_23.png", alt="alt")
      .col-xl-8.mb-4
        .cajon.bg-3.g_18.mb-5.mb-lg-0
          .row.mb-4
            .col-lg-12.p-4.ps-5
              p.mb-0 Es vital que la cocina cuente con un sistema de almacenamiento adecuado que asegure la calidad, frescura e inocuidad de los alimentos, evitando su deterioro o contaminación.

        p.mb-3 <span class="azul">Recepción y traslado de la materia prima:</span> Si una vez recibida la materia prima, se debe trasladar a contenedores de plástico que pertenezcan a la cocina, evitando el contacto directo con el embalaje original (cajas de cartón, cajones, etc.) para prevenir una posible contaminación. Este traslado debe realizarse en un plazo máximo de 20 minutos.
        p.mb-3 <span class="azul">Categorías de almacenamiento:</span> es fundamental diferenciar el almacenamiento de alimentos perecederos (frutas, verduras, carnes, pescados, productos lácteos, etc.) de los alimentos no perecederos (harinas, legumbres, arroz, azúcar, etc.).

        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-check-circle
            |	Almacenamiento de alimentos no perecederos: los productos no perecederos deben almacenarse en un depósito a temperatura ambiente, con baja humedad relativa (ambiente fresco y seco), ventilado e iluminado.
          li 
            i.fas.fa-check-circle
            |	Almacenamiento de alimentos perecederos: los productos perecederos deben almacenarse inmediatamente en el sector correspondiente.
    
    .bg_img_5
      .row.justify-content-center.align-items-center.mb-5

        h4.mb-5.text-center  En una cocina podemos distinguir tres tipos de almacenamientos, a saber:

        .col-md-10
          .row.justify-content-center.mb-1
            .col-md-6.col-lg-4.mb-3
              .tarjeta.color-primario.p-4.h-100
                figure
                  img(src="@/assets/curso/temas/tema2/img_24.png", alt="alt").w-50.mx-auto.mb-3
                h4.mb-3 Refrigeración
                p La temperatura de refrigeración no debe superar los 4°C para asegurar una buena conservación de los productos.
            
            .col-md-6.col-lg-4.mb-3
              .tarjeta.color-primario.p-4.h-100
                figure
                  img(src="@/assets/curso/temas/tema2/img_25.png", alt="alt").w-50.mx-auto.mb-3
                h4.mb-3 Congelación
                p La temperatura de congelación no debe superar los -18°C para una conservación a largo plazo.
            
            .col-md-6.col-lg-4.mb-3
              .tarjeta.color-primario.p-4.h-100
                figure
                  img(src="@/assets/curso/temas/tema2/img_26.png", alt="alt").w-50.mx-auto.mb-3
                h4.mb-3 Temperatura ambiente
                p Para productos secos y vinos, la temperatura de almacenamiento no debe superar los 22°C. El ambiente debe ser seco y alejado de fuentes de calor. 

    .bg_img_4
      .row.justify-content-center.align-items-center.mb-2            
        .row.justify-content-center.align-items-center.mb-4
          .col-xl-8.mb-3
            ul.lista-ul--color.lista-ul--separador
              li 
                i.fas.fa-check-circle
                |	Dimensión del área de almacenamiento: el tamaño del área de almacenamiento debe ajustarse a la cantidad de alimentos perecederos que se manejan. En algunos casos, se requieren varias cámaras de refrigeración y congelación. En otros casos, una o dos cámaras deben ser sectorizadas para un mejor funcionamiento
              li 
                i.fas.fa-check-circle
                |	Ubicación de los productos: se debe tener especial cuidado al ubicar los diferentes productos para evitar la contaminación cruzada:
              li 
                i.fas.fa-check-circle
                |	Separación de productos: los productos para devolución deben estar correctamente identificados en cajas cerradas y ubicados por lotes con el nombre del proveedor para su devolución.
              li 
                i.fas.fa-check-circle
                |	Ubicación de productos de limpieza: los productos de limpieza deben almacenarse en un sector específico, alejado de los alimentos.
                
          .col-md-8.col-xl-4.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/img_27.png', alt='Texto que describa la imagen').mx-auto
        
        .row.justify-content-center.align-items-center.mb-2
          .col-md-8.col-xl-4.mb-3.order-2.order-xl-1 
            figure
              img(src='@/assets/curso/temas/tema2/img_28.png', alt='Texto que describa la imagen') 
          .col-xl-8.mb-3.order-1.order-xl-2
            h4 Reglas generales para un buen almacenamiento:    
            ul.lista-ul--color.lista-ul--separador
              li 
                i.fas.fa-check-circle
                |	Inspección: Se debe revisar el aislamiento de las puertas del almacén para asegurar su cierre hermético.
              li 
                i.fas.fa-check-circle
                |	Limpieza: Las estanterías y paredes deben lavarse de acuerdo al plan de limpieza.
              li 
                i.fas.fa-check-circle
                |	Manejo de envases: No se deben almacenar alimentos en latas o frascos con tapas abiertas. Al abrirlos, los alimentos deben protegerse en un contenedor plástico con tapa y se debe eliminar el embalaje original.
              li 
                i.fas.fa-check-circle
                |	Rotación de inventario: Las estanterías deben tener suficiente espacio para la rotación de los productos, evitando su vencimiento.
              li 
                i.fas.fa-check-circle
                |	Control de stock: Se debe realizar un control diario del estado de la mercadería, incluyendo la cantidad y la calidad.
                
    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Disposiciones referentes a la manipulación de alimentos
          img.pst(src='@/assets/curso/temas/titulos/img_17.svg', alt='') 

    .row.justify-content-center.mb-4    
      .col-lg-12
          .cajon.bg-3.g_18.mb-5.mb-lg-0
            .row.mb-4
              .col-lg-12.p-4.ps-5
                p.mb-0 La manipulación segura de alimentos es un pilar fundamental para garantizar su inocuidad y evitar la contaminación cruzada, un proceso que puede afectar negativamente la salud de los consumidores. La contaminación cruzada ocurre cuando microorganismos nocivos de alimentos crudos se transfieren a alimentos cocidos o listos para el consumo. Para prevenir esta situación, es crucial seguir las siguientes disposiciones, que abarcan diferentes aspectos del proceso de manipulación: 

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8.mb-4.order-2.order-lg-1
        LineaTiempoD
          p(numero="a" titulo="Prácticas culinarias") La limpieza y organización son claves para prevenir la contaminación cruzada. Mantener las mesadas, tablas de trabajo y utensilios limpios y separados para alimentos crudos y cocidos es fundamental. El lavado de manos frecuente, especialmente antes de manipular alimentos, así como el uso de guantes en situaciones que lo requieran, también son medidas cruciales. Evitar la acumulación de residuos, alimentos o utensilios sucios en el área de trabajo y respetar la cadena de frío son aspectos a tener en cuenta para mantener un entorno higiénico.

          p(numero="b" titulo="Cocción") La cocción es un proceso fundamental para eliminar los microorganismos presentes en los alimentos. Es esencial que la temperatura alcance los 75°C en el centro del alimento durante el tiempo adecuado para asegurar su inocuidad. Al cocinar, se debe tener cuidado con las temperaturas de cocción, el tiempo de cocción y la distribución uniforme del calor para garantizar que todos los puntos del alimento alcancen la temperatura segura. 

          p(numero="c" titulo="Enfriamiento") El enfriamiento rápido de los alimentos después de la cocción es crucial para evitar la proliferación bacteriana. Mantener los alimentos refrigerados a una temperatura de 4°C o menos previene el crecimiento de microorganismos. Se debe evitar el enfriamiento lento y la exposición a temperaturas ambiente, especialmente en zonas de riesgo.
          
          p(numero="d" titulo="Congelación") La congelación a -18°C o menos es una técnica eficiente para preservar alimentos por largos períodos. Es importante descongelar los alimentos de manera segura, evitando la recongelación, que puede afectar su calidad y seguridad. Es recomendable utilizar métodos de descongelación controlados, como la heladera o el microondas, evitando la descongelación a temperatura ambiente.
          
          p(numero="e" titulo="Cadena de frío") La cadena de frío debe mantenerse intacta durante todo el proceso de manipulación y transporte. Se debe evitar el corte de la cadena de frío, lo que podría generar la proliferación de microorganismos. Es crucial utilizar equipos de refrigeración y transporte adecuados que garanticen la temperatura adecuada durante todo el proceso. 
      .col-md-8.col-lg-4.mb-4.order-1.order-lg-2
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img_29.png', alt='')

    .row.justify-content-center.align-items-center.mb-0.fondo_2_3
      .col-md-8.col-lg-3.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img_30.png', alt='')
      .col-lg-9.mb-3
        h4 Sobre el manipulador de alimentos
        p La higiene personal del manipulador de alimentos es un aspecto fundamental para prevenir la contaminación. Es necesario lavarse las manos con frecuencia y seguir buenas prácticas de higiene, como el uso de guantes en situaciones que lo requieran. También se debe evitar tocarse la boca, la nariz o los ojos durante la manipulación de alimentos y mantener la ropa de trabajo limpia y adecuada. Los manipuladores deben recibir capacitación sobre las normas de seguridad alimentaria y buenas prácticas para garantizar que sus acciones contribuyen a la inocuidad de los alimentos.
        .cajon.bg-6.g_18.mb-5.mb-lg-0
          .row.mb-4
            .col-lg-12.p-4.ps-5
              p.mb-0 La aplicación de estas disposiciones garantiza la inocuidad alimentaria, prolonga la vida útil de los productos y preserva la calidad nutricional y sensorial de los alimentos, contribuyendo a la salud de los consumidores y a la sostenibilidad de la industria alimentaria.

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
