import Info from '@/components/Info/Info.component';
import { UAA } from '@/mocks/projects.mocks';

export default function UserAuthApi () {
  return (
    <div>
      <Info
        name={UAA.name}
        description={UAA.description}
        techs={UAA.techs}
        links={UAA.links}
      />
    </div>
  );
}