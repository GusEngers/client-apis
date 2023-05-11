import { IProject } from '@/interfaces/project.interface';

export default function Info({ name, description,link, techs, links }: IProject) {
  return (
    <div>
      <h1>{name}</h1>
      {<span>{link}</span> ?? null}
      <p>{description}</p>
      <ul>
        {techs.map((tech, index) => (
          <li key={`${tech}-${index}`}>{tech}</li>
        ))}
      </ul>
      <ul>
        {links.map((link, index) => (
          <li key={`${link.name}-${index}`}>
            <a href={link.url} target='_blank' rel='noopener noreferrer'>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
