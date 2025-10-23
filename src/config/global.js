export default {
  global: {
    Name: 'Interfaz del <i>software</i>',
    Description:
      'Este componente formativo introduce la interfaz de Rhinoceros, destacando menús, comandos, barras de herramientas, vistas, capas y ayudas de construcción. Incluye novedades como el <i>Gumball</i> y opciones de personalización que mejoran la experiencia. Su propósito es que el aprendiz configure y navegue el <i>software</i> con precisión, optimizando el modelado digital de billeteras en un entorno profesional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: '<i>Software</i> Rhinoceros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Instalación y activación de la versión de prueba',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Requisitos técnicos para Rhino',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Interfaz de Rhinoceros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Barra de menús',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Barra de herramientas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Barra de comandos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Ventanas de vista',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Capas y propiedades',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Barra de estado',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: '<i>Gumball</i>',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Barra de referencias de objetos',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Filtros de selección',
            hash: 't_2_9',
          },
          {
            numero: '2.10',
            titulo: 'Ayudas de modelado ',
            hash: 't_2_10',
          },
          {
            numero: '2.11',
            titulo: '<i>Mouse</i>',
            hash: 't_2_11',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Modelado ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Selección vista',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Unidades de medida',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Métodos de activación de herramientas',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ejemplos de operaciones básicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Líneas y polilíneas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Cuadrados y rectángulos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Círculos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Empalmar curvas',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Descomponer',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Unir',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Recortar',
            hash: 't_4_7',
          },
          {
            numero: '4.8',
            titulo: 'Partir',
            hash: 't_4_8',
          },
          {
            numero: '4.9',
            titulo: 'Agrupar',
            hash: 't_4_9',
          },
          {
            numero: '4.10',
            titulo: 'Desagrupar',
            hash: 't_4_10',
          },
          {
            numero: '4.11',
            titulo: 'Mover',
            hash: 't_4_11',
          },
          {
            numero: '4.12',
            titulo: 'Copiar',
            hash: 't_4_12',
          },
          {
            numero: '4.13',
            titulo: 'Rotar',
            hash: 't_4_13',
          },
          {
            numero: '4.14',
            titulo: 'Desfasar',
            hash: 't_4_14',
          },
          {
            numero: '4.15',
            titulo: 'Reflejar',
            hash: 't_4_15',
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
        download: 'downloads/dist.pdf',
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
      tema: '<i>Software</i> Rhinoceros 8',
      referencia: 'Rhinoceros. (2025). Rhino 8 Charging Forward.',
      tipo: 'Sitio web',
      link: 'https://www.rhino3d.com/',
    },
    {
      tema: 'Interfaz de Rhinoceros',
      referencia:
        'Téllez, J. (2011). Diseño 3D y mucho más. Modelar y Fabricar.',
      tipo: 'Blog',
      link: 'https://modelaryfabricar.blogspot.com/',
    },
  ],
  glosario: [
    {
      termino: 'Administrador de capas',
      significado:
        'herramienta para organizar objetos del modelo en capas, permitiendo activarlas o desactivarlas y asignar colores.',
    },
    {
      termino: 'Barra de menús',
      significado:
        'área superior de la ventana donde se agrupan los comandos en categorías desplegables para facilitar el acceso.',
    },
    {
      termino: 'Barras de herramientas',
      significado:
        'paneles con íconos que permiten ejecutar herramientas y comandos frecuentes de forma visual.',
    },
    {
      termino: 'Línea de comandos',
      significado:
        'zona donde se ingresan textos para ejecutar comandos rápidamente, con función de autocompletado.',
    },
    {
      termino: '<i>Viewports</i> (Vistas)',
      significado:
        'cuadros de visualización que muestran el modelo desde diferentes perspectivas (superior, perspectiva, frontal, derecha).',
    },
    {
      termino: '<i>Widget Gumball</i>',
      significado:
        'herramienta visual para manipular objetos mediante movimientos, rotaciones y escalas directas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ealfi. (2024). Curso Rhinoceros 8: Todo lo que debes saber. ',
      link: 'https://ealfi.es/curso-rhinoceros-8-todo-debes-saber/',
    },
    {
      referencia:
        'McNeel Wiki. (2025). Lista de comandos y guía de usuario de Rhinoceros. ',
      link: 'https://wiki.mcneel.com/es/rhino/commandlist',
    },
    {
      referencia:
        'Von Moos, D. (2023). 3D Modeling with Rhinoceros 8: A Practical Guide. Independently published. ',
      link: '',
    },
    {
      referencia:
        'Rhino 3D. (2024). Características y novedades de Rhinoceros 8. ',
      link: 'https://www.rhino3d.com/es/features/',
    },
    {
      referencia:
        'Guías de desarrolladores Rhino. (2024). Rhino Developer Guides. ',
      link: 'https://developer.rhino3d.com/es/guides',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jenny Jasbleydi Velásquez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
