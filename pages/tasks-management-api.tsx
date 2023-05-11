import Info from '@/components/Info/Info.component';
import { TMA } from '@/mocks/projects.mocks';

export default function TasksManagementApi () {
  return (
    <div>
      <Info
        name={TMA.name}
        description={TMA.description}
        techs={TMA.techs}
        links={TMA.links}
      />
    </div>
  );
}