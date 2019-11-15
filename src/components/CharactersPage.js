/// external modules ///
import React from 'react';

/// internal modules ///
import { fetchData , getPage } from '../data/fetch';
import SearchForm from './SearchForm';
import CharactersList from './CharactersList';

/***************************************
  STATES
***************************************/
const init = {
  'page' : 1,
  'info' : {},
  'characters' : [],
};

/***************************************
  COMPONENT
***************************************/
const CharactersPage = (props) => {
  /// states ///
  const [page , setPage] = React.useState (init.page);
  const [info , setInfo] = React.useState (init.info);
  const [characters , setCharacters] = React.useState (init.characters);

  /// virtual states ///
  const setData = (data) => {
    setPage (getPage (data.info));
    setInfo (data.info);
    setCharacters (data.results);
  }

  /// effects ///
  React.useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    // Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  /// thing ///
  return (
    <section className="characters-page">
      <header>
        <h1>Characters</h1>
      </header>
      <main>
        <SearchForm/>
        <CharactersList/>
      </main>
    </section>
  );
};

/**************************************/
export default CharactersPage;
