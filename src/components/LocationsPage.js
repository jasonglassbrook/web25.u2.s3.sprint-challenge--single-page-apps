/// external modules ///
import React from 'react';

/// internal modules ///
import SearchForm from './SearchForm';
import LocationsList from './LocationsList';

/***************************************
  COMPONENT
***************************************/
const LocationsPage = (props) => {
  return (
    <section className="locations-page">
      <header>
        <h1>Locations</h1>
        <SearchForm/>
      </header>
      <main>
        <LocationsList/>
      </main>
    </section>
  );
};

/**************************************/
export default LocationsPage;
