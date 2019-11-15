/// external modules ///
import React from 'react';

/// internal modules ///
import SearchForm from './SearchForm';
import LocationsList from './LocationsList';

/***************************************
  STATES
***************************************/
const init = {
  'info' : {},
  'locations' : [],
};

/***************************************
  COMPONENT
***************************************/
const LocationsPage = (props) => {
  return (
    <section className="locations-page">
      <header>
        <h1>Locations</h1>
      </header>
      <main>
        <SearchForm/>
        <LocationsList/>
      </main>
    </section>
  );
};

/**************************************/
export default LocationsPage;
