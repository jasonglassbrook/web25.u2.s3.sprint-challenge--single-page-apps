/// external modules ///
import React from 'react';

/// internal modules ///
import locationAPI from '../data/rickandmortyapi.com/location-api';
import { fetchData , getPage } from '../data/fetch';
import SearchForm from './SearchForm';
import LocationsList from './LocationsList';

/***************************************
  STATES
***************************************/
const init = {
  'query' : {},
  'page' : 1,
  'info' : {},
  'locations' : [],
};

/***************************************
  COMPONENT
***************************************/
const LocationsPage = (props) => {
  /// states ///
  const [query , setQuery] = React.useState (init.query);
  const [page , setPage] = React.useState (init.page);
  const [info , setInfo] = React.useState (init.info);
  const [locations , setLocations] = React.useState (init.locations);

  /// virtual states ///
  const setData = (data) => {
    setPage (getPage (data.info));
    setInfo (data.info);
    setLocations (data.results);
  }

  /// effects ///
  React.useEffect(() => {
    fetchData (locationAPI , init.locations) (query , setData);
  }, [query]);

  /// thing ///
  return (
    <section className="locations-page">
      <header>
        <h1>Locations</h1>
      </header>
      <main>
        <SearchForm search={setQuery}/>
        <LocationsList list={locations}/>
      </main>
    </section>
  );
};

/**************************************/
export default LocationsPage;
