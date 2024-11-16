export default {
  global: {
    componenteFormativo:
      'Seguridad alimentaria y buenas prácticas de manufactura',
    descripcionCurso:
      'La clasificación de los alimentos es clave para su uso adecuado, conservación y prevención de su deterioro o contaminación. Comprender los peligros que afectan la seguridad alimentaria, como los factores que causan su deterioro, permite identificar las mejores prácticas para un manejo adecuado de la cadena alimentaria, desde la producción hasta el consumo, asegurando la inocuidad y calidad de los alimentos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-8.svg'),
      },
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
            titulo: 'Conceptos básicos de higiene y seguridad alimentaria',
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
        download: 'downloads/72310017_CF001_DU.pdf',
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
      descarga: '/downloads/21857-DOC-20181009.pdf',
    },
    {
      tema: 'Buenas prácticas de manipulación y preservación de alimentos.',
      referencia:
        'Ministerio de salud, Colombia. (2013). Resolución 2674 de 2013.',
      tipo: 'Resolución oficial.',
      descarga: '/downloads/2674.pdf',
    },
    {
      tema: 'Buenas prácticas de manipulación y preservación de alimentos.',
      referencia:
        'Rodríguez Gómez, J. M. (s.f.). Consecuencias higiénicas de alteración.',
      tipo: 'Capítulo de libro.',
      descarga:
        '/downloads/Consecuencia_Higienica_Alteracion_Alimentos_2012.pdf',
    },
    {
      tema: 'Prevención y control del deterioro de los alimentos.',
      referencia:
        'In food quality. Education and culture. (s.f.). Microorganismos y alimentos.',
      tipo: 'Artículo.',
      descarga: '/downloads/3.Microorganismos_y_alimentos.pdf',
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
        'todo producto natural o artificial, elaborado o no, que ingerido aporta al organismo humano los nutrientes y la energía necesaria para el desarrollo de los procesos biológicos. Se entienden incluidas en la presente definición las bebidas no alcohólicas y aquellas sustancias con que se sazonan algunos comestibles, y que se conocen con el nombre genérico de especias.',
    },
    {
      termino: 'Alimento adulterado',
      significado:
        'es aquel: a) al cual se le ha sustraído parte de los elementos constituyentes, reemplazándolos o no por otras sustancias; b) que haya sido adicionado con sustancias no autorizadas; c) que haya sido sometido a tratamientos que disimulen u oculten sus condiciones originales; y d) que por deficiencias en su calidad normal hayan sido disimuladas u ocultadas en forma fraudulenta, sus condiciones originales.',
    },
    {
      termino: 'Alimento alterado',
      significado:
        'alimento que sufre modificación o degradación, parcial o total, de los constituyentes que le son propios, por agentes físicos, químicos o biológicos. Se incluye, pero no se limita a: a) el cual se encuentre por fuera de su vida útil; b) no esté siendo almacenado bajo las condiciones necesarias para evitar su alteración.',
    },
    {
      termino: 'Alimento contaminado',
      significado:
        'alimento que presenta o contiene agentes y/o sustancias extrañas de cualquier naturaleza en cantidades superiores a las permitidas en las normas nacionales, o en su defecto en normas reconocidas internacionalmente.',
    },
    {
      termino: 'Alimento de mayor riesgo en salud pública',
      significado:
        'los alimentos que pueden contener microorganismos patógenos y favorecer la formación de toxinas o el crecimiento de microorganismos patógenos, y alimentos que pueden contener productos químicos nocivos.',
    },
    {
      termino: 'Alimento de menor riesgo en salud pública',
      significado:
        'los alimentos que tienen poca probabilidad de contener microorganismos patógenos y normalmente no favorecen su crecimiento debido a las características de los alimentos y los alimentos que probablemente no contienen productos químicos nocivos.',
    },
    {
      termino:
        'Alimento derivado de un organismo genéticamente modificado (OGM)',
      significado:
        'alimento derivado en su totalidad o en una parte de un organismo genéticamente modificado.',
    },
    {
      termino: 'Alimento de riesgo medio en salud pública',
      significado:
        'los alimentos que pueden contener microorganismos patógenos, pero normalmente no favorecen su crecimiento debido a las características del alimento o alimentos que es poco probable que contengan microorganismos patógenos debido al tipo de alimento o procesamiento del mismo, pero que pueden apoyar la formación de toxinas o el crecimiento de microorganismos patógenos.',
    },
    {
      termino: 'Alimento fraudulento',
      significado:
        'es aquel que: a) se le designe o expenda con nombre o calificativo distinto al que le corresponde; b) su envase, rótulo o etiqueta contenga diseño o declaración ambigua, falsa o que pueda inducir o producir engaño o confusión respecto de su composición intrínseca y uso; c) no proceda de sus verdaderos fabricantes o importadores declarados en el rótulo o que tenga la apariencia y caracteres generales de un producto legítimo, protegido o no por marca registrada y que se denomine como este, sin serlo; d) aquel producto que de acuerdo a su riesgo y a lo contemplado en la presente resolución, requiera de registro, permiso o notificación sanitaria y sea comercializado, publicitado o promocionado como un alimento, sin que cuente con el respectivo registro, permiso o notificación sanitaria.',
    },
    {
      termino: 'Alimento perecedero',
      significado:
        'el alimento que, en razón de su composición, características fisicoquímicas y biológicas, pueda experimentar alteración de diversa naturaleza en un tiempo determinado y que, por lo tanto, exige condiciones especiales de proceso, conservación, almacenamiento, transporte y expendio.',
    },
    {
      termino: 'Desinfección - descontaminación',
      significado:
        'es el tratamiento físico-químico o biológico aplicado a las superficies limpias en contacto con el alimento con el fin de destruir las células vegetativas de los microorganismos que pueden ocasionar riesgos para la salud pública y reducir substancialmente el número de otros microorganismos indeseables, sin que dicho tratamiento afecte adversamente la calidad e inocuidad del alimento.',
    },
    {
      termino: 'Higiene de los alimentos',
      significado:
        'son el conjunto de medidas preventivas necesarias para garantizar la seguridad, limpieza y calidad de los alimentos en cualquier etapa de su manejo.',
    },
    {
      termino: 'Infestación',
      significado:
        'es la presencia y multiplicación de plagas que pueden contaminar o deteriorar los alimentos y/o materias primas.',
    },
    {
      termino: 'Limpieza',
      significado:
        'es el proceso o la operación de eliminación de residuos de alimentos u otras materias extrañas o indeseables.',
    },
    {
      termino: 'Manipulador de alimentos',
      significado:
        'es toda persona que interviene directamente, aunque sea en forma ocasional, en actividades de fabricación, procesamiento, preparación, envase, almacenamiento, transporte y expendio de alimentos.',
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
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Rocío Báez León',
          cargo: 'Experta temática ',
          centro: 'N/A',
        },
        {
          nombre: 'Yuri Alexandra Báez Roldán',
          cargo: 'Asesora pedagógica',
          centro: 'N/A',
        },
        {
          nombre: 'Janet Lucía Villalba Triana',
          cargo: 'Asesora pedagógica',
          centro: 'N/A',
        },
        {
          nombre: 'Jairo Valencia Ebratt',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amezquita',
          cargo: 'Diseñador <em>web</em>',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Liborio De Jesús Castañeda Valencia',
          cargo: 'Desarrollador <em>full stack junior</em>',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        // {
        //   nombre: 'Nombre',
        //   cargo: 'Actividad Didáctica',
        //   centro:
        //     'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        // },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
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
