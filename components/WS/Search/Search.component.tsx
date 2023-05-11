import { ILanguage, ISearch } from '@/interfaces/wikipedia-scraping.interface';
import React from 'react';

export default function Search({
  lang,
  setSearch,
}: {
  lang: ILanguage[];
  setSearch: React.Dispatch<React.SetStateAction<ISearch[]>>;
}) {
  console.log(setSearch)
  return (
    <form>
      <input type='text' />
      <select name='languages' id='languages'>
        {lang.map((l, i) => (
          <option value={l.value} key={`${l.name}-${i}`}>
            {l.name}
          </option>
        ))}
      </select>
      <input type='submit' value='Buscar' />
    </form>
  );
}
