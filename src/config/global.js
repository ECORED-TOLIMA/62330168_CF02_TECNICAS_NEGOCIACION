export default {
  global: {
    Name: 'La negociación como estrategia de ventas',
    Description:
      'Este componente formativo aborda la negociación estratégica aplicada a las ventas, desarrollando habilidades clave como comunicación, persuasión y manejo de objeciones; así como el uso de técnicas como el M.A.A.N. para tomar decisiones informadas. Su propósito es fortalecer la capacidad del negociador para generar acuerdos éticos, sostenibles y beneficiosos para todas las partes.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
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
        titulo: 'Implementación de técnicas de negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Desarrollo de habilidades personales y actitudes para la negociación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Habilidades para tratar con las personas en la negociación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Actitudes en la negociación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Habilidades de comunicación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Ética de la negociación',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Técnicas de negociación aplicadas',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas de venta y negociación hasta el cierre',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas de negociación en ventas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas en ventas efectivas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Manejo de objeciones',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Negociación estratégica',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Cierre de ventas',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Definición de objetivos: establecer metas claras',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Mejor Alternativa a un Acuerdo Negociado - M.A.A.N.',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Contratos y acuerdos comerciales',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Condiciones comerciales de la negociación',
            hash: 't_2_9',
          },
          {
            numero: '2.10',
            titulo: 'Costos de envío y distribución en el proceso de venta',
            hash: 't_2_10',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA2_62330168_DU.pdf',
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
  glosario: [
    {
      termino: 'Argumentación basada en valor',
      significado:
        'técnica de negociación que consiste en demostrar los beneficios reales de una propuesta para justificar su aceptación.',
    },
    {
      termino: 'Cierre estratégico',
      significado:
        'etapa final del proceso de negociación en la que se consolidan los acuerdos y se establecen los compromisos que deberán cumplirse.',
    },
    {
      termino: 'Enfoque ganar–ganar',
      significado:
        'estrategia de negociación que busca soluciones beneficiosas para todas las partes involucradas, fortaleciendo la relación comercial.',
    },
    {
      termino: 'Escucha activa',
      significado:
        'habilidad de comunicación que consiste en prestar atención consciente a la contraparte para comprender sus intereses, necesidades y argumentos.',
    },
    {
      termino: 'Generación de opciones',
      significado:
        'proceso creativo mediante el cual se plantean múltiples alternativas de solución antes de tomar una decisión dentro de una negociación.',
    },
    {
      termino: '<em>Lead</em>',
      significado:
        'persona o empresa que ha mostrado interés en los productos o servicios de una marca, proporcionando sus datos de contacto (nombre, <em>email</em>, teléfono) a través de un formulario, suscripción o descarga, convirtiéndose así en un cliente potencial.',
    },
    {
      termino: 'M.A.A.N. (Mejor Alternativa a un Acuerdo Negociado)',
      significado:
        'alternativa más conveniente que tiene un negociador en caso de que no se logre un acuerdo durante la negociación.',
    },
    {
      termino: 'Negociación estratégica',
      significado:
        'proceso planificado mediante el cual dos o más partes buscan alcanzar acuerdos mutuamente beneficiosos a través del análisis, la preparación y el uso de estrategias orientadas a generar valor y relaciones de largo plazo.',
    },
    {
      termino: 'Persuasión',
      significado:
        'capacidad del negociador para influir en las decisiones de la otra parte mediante argumentos claros que demuestren el valor de una propuesta.',
    },
    {
      termino: 'Poder de negociación',
      significado:
        'capacidad que tiene una de las partes para influir en el resultado de la negociación, determinada por factores como información, alternativas y posición en el mercado.',
    },
    {
      termino: '<em>Win lose</em>',
      significado: 'ganar – perder.',
    },
    {
      termino: '<em>Win win</em>',
      significado: 'ganar – ganar o beneficio mutuo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alteco Consultores. (2019). <em>MAAN. Mejor Alternativa a un Acuerdo Negociado</em>.',
      link: 'https://www.aiteco.com/maan-mejor-alternativa-a-un-acuerdo-negociado/',
    },
    {
      referencia:
        'Canelón, M. (2023). <em>Mejor Alternativa a un Acuerdo Negociado (M.A.A.N.)</em>. Cambrige International Consulting.',
      link: 'https://ciccambridge.com/blog/mejor-alternativa-a-un-acuerdo-negociado-m-a-a-n/',
    },
    {
      referencia:
        'Davidson, A. & Aguilar, S. (2021). <em>Poderosas Técnicas de Negociación y Ventas</em>.',
    },
    {
      referencia:
        'Escuela de Negocios y Derecho – ESADE. (2025). <em>Técnicas de negociación: una habilidad esencial en el mundo empresarial</em>.',
    },
    {
      referencia:
        'Gestionar Fácil. (s.f.). <em>Técnicas de ventas: todo lo que debes saber</em>.',
      link: 'https://www.gestionar-facil.com/tecnicas-de-ventas/',
    },
    {
      referencia:
        'González, Castillo, C. (2021) <em>La ética en la negociación</em>. Universidad San Marcos. San José, Costa Rica.',
      link: '',
    },
    {
      referencia:
        'Hotmart. (2022). <em>Conoce las siete principales objeciones de ventas y aprende a evitarlas</em>.',
      link: 'https://hotmart.com/es/blog/objeciones-de-venta',
    },
    {
      referencia:
        'HubSpot. (2023). <em>Las 6 técnicas de negociación más eficaces para tus ventas (método SPIN, AIDA, Ganar-Ganar)</em>.',
      link: 'https://blog.hubspot.es/sales/tecnicas-negociacion',
    },
    {
      referencia:
        'ISPROX. (s.f.). <em>Seis técnicas de negociación imprescindibles</em>.',
      link: 'https://isprox.com/es/tecnicas-de-negociacion/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}
