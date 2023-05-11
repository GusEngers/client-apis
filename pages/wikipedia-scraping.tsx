import Info from '@/components/Info/Info.component';
import Search from '@/components/WS/Search/Search.component';
import { ILanguage, ISearch } from '@/interfaces/wikipedia-scraping.interface';
import { WS } from '@/mocks/projects.mocks';
import axios from 'axios';
import React from 'react';

export default function WikipediaScraping() {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [lang, setLang] = React.useState<ILanguage[]>([]);
  const [search, setSearch] = React.useState<ISearch[]>([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (!lang.length) {
      axios
        .get(`${WS.link}/languages`)
        .then((d) => {
          setLang(d.data);
          setLoading(false);
        })
        .catch((e) => {
          setError(e.message);
        });
    }
  }, []);

  return (
    <div>
      <Info
        name={WS.name}
        description={WS.description}
        link={WS.link}
        techs={WS.techs}
        links={WS.links}
      />
      {<h1>{error}</h1> ?? <div>sin error</div>}
      {loading ? (
        <div>cargando</div>
      ) : (
        <Search lang={lang} setSearch={setSearch} />
      )}
    </div>
  );
}
