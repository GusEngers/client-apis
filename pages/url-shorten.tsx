import Info from '@/components/Info/Info.component';
import { US } from '@/mocks/projects.mocks';
import { IUrl } from '@/interfaces/url-shorten.interface';
import axios from 'axios';
import React from 'react';

export default function UrlShorten() {
  const [urls, setUrls] = React.useState<IUrl[]>([]);
  const [search, setSearch] = React.useState<string>('');
  const [message, setMessage] = React.useState<string | null | undefined>(null);

  React.useEffect(() => {
    axios.get(`${US.link}/`).then((d) => setUrls(d.data));
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(`${US.link}/generate`, { url: search })
      .then((d) => {
        setMessage(d.data.data);
      })
      .catch((e) => {
        setMessage(e.message);
      });
  };

  return (
    <div>
      <Info
        name={US.name}
        description={US.description}
        techs={US.techs}
        links={US.links}
        link={US.link}
      />
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type='url'
          placeholder='Ingrese la URL'
          onChange={(event) => handleSearch(event)}
        />
        <input
          type='submit'
          value='Generar'
          disabled={!search.length ? true : false}
        />
      </form>
      <span>{message}</span>
      {!urls.length ? (
        <h1>Sin Registros</h1>
      ) : (
        <>
          <h1>Reguistros</h1>
          {urls.map((url) => {
            return (
              <>
                <h3>Url original</h3>
                <span>{url.url}</span>
                <h3>Url acortada</h3>
                <span>{`${US.link}/${url.id}`}</span>
              </>
            );
          })}
        </>
      )}
    </div>
  );
}
