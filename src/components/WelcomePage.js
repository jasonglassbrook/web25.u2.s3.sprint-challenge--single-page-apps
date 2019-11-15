/// external modules ///
import React from 'react';

/// internal modules ///
import SearchForm from './SearchForm';

/***************************************
  COMPONENT
***************************************/
const WelcomePage = (props) => {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <main>
        <SearchForm/>
      </main>
    </section>
  );
};

/**************************************/
export default WelcomePage;
