/// external modules ///
import React from 'react';
import { CardDeck } from 'reactstrap';

/// internal modules ///
import CharacterCard from './CharacterCard';

/***************************************
  COMPONENT
***************************************/
const CharactersList = ({ list , ...props }) => {
  return (
    <CardDeck className="characters-list">
      {list.map ((character) => (
        <CharacterCard key={character.id} data={character}/>
      ))}
    </CardDeck>
  );
};

/**************************************/
export default CharactersList;
