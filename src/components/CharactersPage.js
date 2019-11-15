/// external modules ///
import React from 'react';

/// internal modules ///
import SearchForm from './SearchForm';
import CharactersList from './CharactersList';

/***************************************
  COMPONENT
***************************************/
const CharactersPage = (props) => {
  return (
    <section className="characters-page">
      <header>
        <h1>Characters</h1>
        <SearchForm/>
      </header>
      <main>
        <CharactersList/>
      </main>
    </section>
  );
};

/**************************************/
export default CharactersPage;
