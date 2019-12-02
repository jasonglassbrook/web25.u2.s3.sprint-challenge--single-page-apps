/// external modules ///
import React from 'react';

/// internal modules ///
import characterAPI from '../data/rickandmortyapi.com/character-api';
import { fetchData , getPage } from '../data/fetch';
import SearchForm from './SearchForm';
import CharactersList from './CharactersList';

/***************************************
  STATES
***************************************/
const init = {
  'query' : {},
  'page' : null,
  'info' : {},
  'characters' : [],
};

/***************************************
  COMPONENT
***************************************/
const CharactersPage = (props) => {
  /// states ///
  const [query , setQuery] = React.useState (init.query);
  const [page , setPage] = React.useState (init.page);
  const [info , setInfo] = React.useState (init.info);
  const [characters , setCharacters] = React.useState (init.characters);

  /// virtual states ///
  const setData = (data) => {
    console.log ('--- setting data... ---');
    console.log (data);
    if (data.error === undefined) {
      setPage (getPage (data.info));
      setInfo (data.info);
      setCharacters (data.results);
    }
    else {
      setData ({ info : {} , results : [] })
    }
  }

  /// effects ///
  React.useEffect(() => {
    fetchData (characterAPI , init.characters) (query , setData);
  }, [query]);

  /// thing ///
  return (
    <section className="characters-page">
      <header>
        <h1>Characters</h1>
      </header>
      <main>
        <SearchForm search={setQuery}/>
        <CharactersList list={characters}/>
      </main>
    </section>
  );
};

/**************************************/
export default CharactersPage;
