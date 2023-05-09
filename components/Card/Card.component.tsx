import { IHProject } from '@/interfaces/project.interface';
import Link from 'next/link';

export default function Card({ name, description, link }: IHProject) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <Link href={link ?? '#'}>Más Información</Link>
    </div>
  );
}
