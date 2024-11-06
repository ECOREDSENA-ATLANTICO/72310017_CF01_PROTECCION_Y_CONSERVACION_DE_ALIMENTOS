<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Exploremos las BPM',
      introduccion:
        '<b> Objetivo:</b> Apropiar los conceptos de las buenas prácticas de manufactura (BPM) para su respectiva aplicación',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            'Estás preparando una ensalada. Debes lavar la lechuga y cortar las verduras. ¿Qué haces con la tabla de cortar?',
          imagen: require('@/assets/componentes/img_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La lavas con agua y jabón después de cortar las verduras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La limpias con un paño húmedo después de cortar las verduras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Usas la misma tabla para cortar las verduras y la carne.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Usas una tabla diferente para cortar las verduras y la carne.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Vas a preparar una torta y descubres que la leche se venció hace dos días. ¿Qué haces?',
          imagen: require('@/assets/componentes/img_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La usas de todas formas, ya que solo se venció un poco.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La hueles para ver si huele mal y si no la usas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La dejas a temperatura ambiente para ver si mejora.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La tiras a la basura y compras leche fresca.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Terminaste de preparar un pollo asado y necesitas guardar las sobras. ¿Cómo lo haces?',
          imagen: require('@/assets/componentes/img_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lo pones en un plato y lo tapas con papel film.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lo pones en el refrigerador a temperatura ambiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Lo pones en el refrigerador a una temperatura menor a 4°C.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Lo dejas en la encimera hasta que se enfríe.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Debes limpiar la cocina después de preparar un almuerzo. ¿Qué haces?',
          imagen: require('@/assets/componentes/img_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Limpias las superficies con un paño húmedo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Limpias las superficies con jabón y agua, luego las desinfectas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Limpias las superficies con jabón y agua, pero no las desinfectas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dejas la limpieza para después, ya que no hay tiempo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Estás en un restaurante y ves que un mesero está preparando una ensalada con las manos sin lavar. ¿Qué haces?',
          imagen: require('@/assets/componentes/img_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No dices nada, porque no es tu problema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Le comentas al mesero que debe lavarse las manos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Le comentas al gerente del restaurante.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Te vas a otro restaurante.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes materiales NO se recomienda para las paredes de una cocina?',
          imagen: require('@/assets/componentes/img_3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Azulejos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Láminas de acero inoxidable.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Madera.', esCorrecta: true },
            { id: 'd', texto: 'Mármol.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes elementos NO es un factor que influye en la distribución adecuada de una cocina?',
          imagen: require('@/assets/componentes/img_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de trabajadores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El tamaño de los utensilios.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'El volumen de producción.', esCorrecta: false },
            {
              id: 'd',
              texto: 'El tipo de alimentos que se procesan.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes métodos NO es una práctica adecuada para la prevención de contaminación cruzada?',
          imagen: require('@/assets/componentes/img_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utilizar diferentes utensilios para alimentos crudos y cocidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lavar las manos después de manipular alimentos crudos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Desinfectar las superficies de trabajo después de cada uso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Utilizar siempre el mismo cuchillo para cortar diferentes alimentos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de las siguientes afirmaciones es CORRECTA respecto a los techos de una cocina?',
          imagen: require('@/assets/componentes/img_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Deben construirse con materiales absorbentes como el yeso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La humedad condensada en los techos no representa un riesgo de contaminación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los techos deben estar diseñados para evitar el goteo de humedad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Los techos deben ser de color oscuro para una mejor iluminación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de las siguientes acciones NO es una medida de control de plagas en una cocina?',
          imagen: require('@/assets/componentes/img_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sellar todas las posibles entradas de roedores e insectos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Inspeccionar regularmente las instalaciones en busca de plagas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Utilizar productos químicos de fumigación sin control.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mantener la limpieza y el orden en la cocina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicidades! ¡Has demostrado un buen conocimiento sobre las Buenas Prácticas de Manufactura! Sigue practicando para asegurar la inocuidad de los alimentos.  ',
      mensaje_final_reprobado:
        '¡Buen trabajo! ¡Sigue aprendiendo sobre las Buenas Prácticas de Manufactura para mejorar tus conocimientos en seguridad alimentaria ',
    },
  }),
  computed: {},
  methods: {},
}
</script>
