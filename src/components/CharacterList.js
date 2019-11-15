/// external modules ///
import React from 'react';

/***************************************
  STATES
***************************************/
const init = {};

/***************************************
  COMPONENT
***************************************/
const CharacterList = (props) => {
  // TODO: Add useState to track data from useEffect

  React.useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    // Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      TODO: `array.map()` over your state here!
    </section>
  );
};

/**************************************/
export default CharacterList;
