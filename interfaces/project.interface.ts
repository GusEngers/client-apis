interface IUrl {
  name: string;
  url: string;
}

export interface IHProject {
  name: string;
  description: string;
  link?: string;
}

export interface IProject extends IHProject {
  techs: string[];
  links: IUrl[];
}
