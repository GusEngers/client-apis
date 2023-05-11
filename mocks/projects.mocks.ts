import { IHProject, IProject } from '@/interfaces/project.interface';

export const PROJECTS_HOME: IHProject[] = [
  {
    name: 'User-Auth-Api',
    description:
      'API de autorización, autenticación y almacenamiento de usuarios usando ApiKey y JWT',
    link: 'user-auth-api',
  },
  {
    name: 'Wikipedia-Scraping',
    description:
      'API para realizar la técnica de Web Scraping en la página de Wikipedia',
    link: 'wikipedia-scraping',
  },
  {
    name: 'Url-Shorten',
    description: 'API para acortar Urls y almacenarlas en una Base de Datos',
    link: 'url-shorten',
  },
  {
    name: 'Tasks-Management-Api',
    description: 'API para crear, editar y eliminar tareas de un usuario',
    link: 'tasks-management-api',
  },
];

export const UAA: IProject = {
  name: 'User-Auth-Api',
  description:
    'Api de almacenamiento y autenticación de usuarios a través de una api key, con tokens generados con JWT y almacenamiento en una base de datos de MongoDB. Cuenta con funcionalidades de búsqueda (lista e individual), registro, logueo, verificación de token y borrados (lógico y definitivo), como así también recuperación de cuentas borradas lógicamente.',
  techs: [
    'Javascript',
    'Mongoose',
    'JWT',
    'Node.js',
    'Express.js',
    'Bycrypt',
    'Joi',
  ],
  links: [
    {
      name: 'Repositorio',
      url: 'https://github.com/GusEngers/user-auth-api#readme',
    },
    {
      name: 'Documentación',
      url: 'https://documenter.getpostman.com/view/24779129/2s93eX1spC',
    },
  ],
};

export const WS: IProject = {
  name: 'Wikipedia-Scraping',
  description:
    'Proyecto con la finalidad de practicar Web Scraping haciendo uso de la página web de Wikipedia. Dado la finalidad que puede llegar a tener el Web Scraping se informa que este proyecto utiliza estas técnicas para extraer información de Wikipedia con fines exclusivamente educativos y sin ánimo de lucro.',
  techs: ['Javascript', 'Node.js', 'Express.js', 'Cheerio', 'Axios'],
  link: 'https://wikipedia-scraping.onrender.com',
  links: [
    {
      name: 'Repositorio',
      url: 'https://github.com/GusEngers/wikipedia-scraping#readme',
    },
    {
      name: 'Documentación',
      url: 'http://ge-us.onrender.com/lh8ib4zp',
    },
  ],
};

export const US: IProject = {
  name: 'Url-Shorten',
  description:
    'API para acortar Urls y almacenarlas en una Base de Datos. Esta versión cuenta con solamente dos funcionalidades públicas crear y redireccionar.',
  techs: ['Javascript', 'Node.js', 'Express.js', 'Mongoose', 'Axios'],
  link: 'https://ge-us.onrender.com',
  links: [
    {
      name: 'Repositorio',
      url: 'https://github.com/GusEngers/url-shorten#readme',
    },
  ],
};

export const TMA: IProject = {
  name: 'Tasks-Management-Api',
  description:
    'Tasks-Management-Api es como indica su nombre una API para el manejo de tareas que realiza un usuario. La aplicación cuenta con las principales funciones CRUD permitiendo así crear, obtener, modificar y eliminar tareas. Todas estas tareas se alojarían en una base de datos en MongoDB.',
  techs: ['Typescript', 'Node.js', 'Nest.js', 'Class-validator', 'Mongoose'],
  links: [
    {
      name: 'Repositorio',
      url: 'https://github.com/GusEngers/tasks-management-api#readme',
    },
    {
      name: 'Documentación',
      url: 'https://documenter.getpostman.com/view/24779129/2s93eYWYDB',
    },
  ],
};
