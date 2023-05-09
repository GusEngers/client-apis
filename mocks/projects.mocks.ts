import { IHProject } from '@/interfaces/project.interface';

export const PROJECTS: IHProject[] = [
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
