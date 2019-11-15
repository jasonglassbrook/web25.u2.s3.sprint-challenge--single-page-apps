/// external modules ///
import React from 'react';

/// internal modules ///
import SearchForm from './SearchForm';
import CharactersList from './CharactersList';

/***************************************
  STATES
***************************************/
const init = {
  'info' : {},
  'characters' : [],
};

/***************************************
  COMPONENT
***************************************/
const CharactersPage = (props) => {
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
