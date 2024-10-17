export default {
  global: {
    componenteFormativo:
      'Seguridad alimentaria y buenas prácticas de manufactura',
    descripcionCurso:
      'La clasificación de los alimentos es clave para su uso adecuado, conservación y prevención de su deterioro o contaminación. Comprender los peligros que afectan la seguridad alimentaria, como los factores que causan su deterioro, permite identificar las mejores prácticas para un manejo adecuado de la cadena alimentaria, desde la producción hasta el consumo, asegurando la inocuidad y calidad de los alimentos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de la seguridad alimentaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Identificación del bien o servicio',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación de los alimentos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Factores que influyen en la calidad e inocuidad de los alimentos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Buenas prácticas de manipulación y preservación de alimentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Historia de las Buenas Prácticas de Manufactura (BPM)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Principios de las BPM',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Prevención y control del deterioro de los alimentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Buenas prácticas de preservación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Recomendaciones generales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Control de plagas',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fundamentos de la seguridad alimentaria.',
      referencia:
        'INVIMA. Dirección de alimentos y bebidas. (2015). Manual de Inspección, Vigilancia y Control Sanitario de Alimentos y Bebidas basado en riesgo para las entidades territoriales de Salud.',
      tipo: 'Manual.',
      link:
        'https://ibague.gov.co/portal/admin/archivos/publicaciones/2018/21857-DOC-20181009.pdf',
    },
    {
      tema: 'Buenas prácticas de manipulación y preservación de alimentos.',
      referencia:
        'Ministerio de salud, Colombia. (2013). Resolución 2674 de 2013.',
      tipo: 'Resolución oficial.',
      link: 'https://foman.com.co/wp-content/uploads/2016/01/2674.pdf',
    },
    {
      tema: 'Buenas prácticas de manipulación y preservación de alimentos.',
      referencia:
        'Rodríguez Gómez, J. M. (s.f.). Consecuencias higiénicas de alteración.',
      tipo: 'Capítulo de libro.',
      link:
        'http://www.aeemt.com/contenidos_socios/Recursos/Documentos_interes/Consecuencia_Higienica_Alteracion_Alimentos_2012.pdf',
    },
    {
      tema: 'Prevención y control del deterioro de los alimentos.',
      referencia:
        'In food quality. Education and culture. (s.f.). Microorganismos y alimentos.',
      tipo: 'Artículo.',
      link:
        'https://www.epralima.com/infoodquality/materiais_espanhol/Manuais/3.Microorganismos_y_alimentos.pdf',
    },

    // {
    //   tema: '',
    //   referencia: '',
    //   tipo: '',
    //   descarga: '/downloads/prueba.pdf',
    // },
  ],
  glosario: [
    {
      termino: 'Actividad acuosa (AW)',
      significado:
        'Es la cantidad de agua disponible en un alimento necesaria para el crecimiento y proliferación de microorganismos.',
    },
    {
      termino: 'Alimento',
      significado:
        'Todo producto natural o artificial, elaborado o no, que ingerido aporta al organismo humano los nutrientes y la energía necesaria para el desarrollo de los procesos biológicos. Se incluyen bebidas no alcohólicas y especias.',
    },
    {
      termino: 'Alimento adulterado',
      significado:
        'Alimento al cual se le ha sustraído parte de los elementos constituyentes, adicionado sustancias no autorizadas, o sometido a tratamientos que disimulan u ocultan sus condiciones originales.',
    },
    {
      termino: 'Alimento alterado',
      significado:
        'Alimento que sufre modificación o degradación de los constituyentes por agentes físicos, químicos o biológicos. Incluye alimentos fuera de su vida útil o almacenados en condiciones inadecuadas.',
    },
    {
      termino: 'Alimento contaminado',
      significado:
        'Alimento que presenta o contiene agentes y/o sustancias extrañas en cantidades superiores a las permitidas en las normas nacionales o internacionales.',
    },
    {
      termino: 'Alimento de mayor riesgo en salud pública',
      significado:
        'Alimentos que pueden contener microorganismos patógenos, toxinas o productos químicos nocivos que representan un mayor riesgo para la salud pública.',
    },
    {
      termino: 'Alimento de menor riesgo en salud pública',
      significado:
        'Alimentos con baja probabilidad de contener microorganismos patógenos y que no favorecen su crecimiento debido a sus características.',
    },
    {
      termino:
        'Alimento derivado de un organismo genéticamente modificado (OGM)',
      significado:
        'Alimento derivado en su totalidad o en una parte de un organismo genéticamente modificado.',
    },
    {
      termino: 'Alimento de riesgo medio en salud pública',
      significado:
        'Alimentos que pueden contener microorganismos patógenos, pero que normalmente no favorecen su crecimiento debido a las características del alimento o procesamiento.',
    },
    {
      termino: 'Alimento fraudulento',
      significado:
        'es aquel que: a) se le designe o expenda con nombre o calificativo distinto al que le corresponde; b) su envase, rótulo o etiqueta contenga diseño o declaración ambigua, falsa o que pueda inducir o producir engaño o confusión respecto de su composición intrínseca y uso; c) no proceda de sus verdaderos fabricantes o importadores declarados en el rótulo o que tenga la apariencia y caracteres generales de un producto legítimo, protegido o no por marca registrada y que se denomine como este, sin serlo; d) aquel producto que de acuerdo a su riesgo y a lo contemplado en la presente resolución, requiera de registro, permiso o notificación sanitaria y sea comercializado, publicitado o promocionado como un alimento, sin que cuente con el respectivo registro, permiso o notificación sanitaria.',
    },
    {
      termino: 'Alimento perecedero',
      significado:
        'Alimento que, debido a su composición, puede experimentar alteraciones en un tiempo determinado y requiere condiciones especiales de conservación, transporte y expendio.',
    },
    {
      termino: 'Desinfección - descontaminación',
      significado:
        'Tratamiento aplicado a las superficies en contacto con el alimento para destruir microorganismos patógenos y reducir el número de otros indeseables sin afectar la calidad del alimento.',
    },
    {
      termino: 'Higiene de los alimentos',
      significado:
        'Conjunto de medidas preventivas necesarias para garantizar la seguridad, limpieza y calidad de los alimentos en cualquier etapa de su manejo.',
    },
    {
      termino: 'Infestación',
      significado:
        'Presencia y multiplicación de plagas que pueden contaminar o deteriorar los alimentos y/o materias primas.',
    },
    {
      termino: 'Limpieza',
      significado:
        'Proceso u operación de eliminación de residuos de alimentos u otras materias extrañas o indeseables.',
    },
    {
      termino: 'Manipulador de alimentos',
      significado:
        'Persona que interviene directamente en actividades de fabricación, procesamiento, preparación, envase, almacenamiento, transporte y expendio de alimentos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bello Gutiérrez, J. (2000). Ciencia bromatológica (1ª ed.). Díaz de Santos.',
      link: '',
    },
    {
      referencia:
        'Consejería de Empleo y Desarrollo Tecnológico. (s.f.). Manipulación de alimentos (Manual común) [archivo PDF]. Junta de Andalucía.',
      link:
        'https://www.juntadeandalucia.es/export/drupaljda/1337165363Manipuladores_de_alimentos.pdf',
    },
    {
      referencia:
        'Education and Culture Lifelong Learning Programme, Leonardo Da Vinci. (s.f.). Microorganismos y alimentos [archivo PDF].',
      link:
        'http://www.epralima.com/infoodquality/materiais_espanhol/Manuais/3.Microorganismos_y_alimentos.pdf',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2015). Principios generales de higiene de los alimentos del Codex.',
      link:
        'https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B1-1969%252FCXC_001s.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Resolución 2674 de 2013. Por la cual se establecen los requisitos sanitarios. 22 de julio de 2013.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, J. M. (s.f.). Consecuencias higiénicas de alteración de los alimentos. Departamento de Nutrición, Bromatología y Tecnología de los Alimentos, Facultad de Veterinaria, Universidad Complutense de Madrid.',
      link:
        'http://www.aeemt.net/contenidos_socios/Recursos/Documentos_interes/Consecuencia_Higienica_Alteracion_Alimentos_2012.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
