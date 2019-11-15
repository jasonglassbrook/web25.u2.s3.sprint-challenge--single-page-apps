/// external modules ///
import React from 'react';
import { CardDeck } from 'reactstrap';

/// internal modules ///
import LocationCard from './LocationCard';

/***************************************
  COMPONENT
***************************************/
const LocationsList = ({ list , ...props }) => {
  return (
    <CardDeck className="locations-list">
      {list.map ((location) => (
        <LocationCard key={location.id} data={location}/>
      ))}
    </CardDeck>
  );
};

/**************************************/
export default LocationsList;
