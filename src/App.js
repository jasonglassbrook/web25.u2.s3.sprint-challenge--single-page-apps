/// external modules ///
import React from 'react';
import { Route , Link } from 'react-router-dom';

/// internal modules ///
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import CharactersList from './components/CharactersList';
import LocationsList from './components/LocationsList';

/// styles ///
import './styles/App.css';

/***************************************
  STATES
***************************************/
const init = {
};

const addItem = (setItems) => (newItem) => {
  console.log ('--- adding new item ---');
  console.log (newItem);
  //
  setItems ((items) => ([
    ...items,
    {
      ...newItem,
      'id' : (Date.now ()),
    },
  ]));
}

/***************************************
  COMPONENT
***************************************/
function App () {
  /// states ///

  /// effects ///

  /// thing ///
  return (
    <div className='App'>
      <Route
        exact path={['/' , '/welcome']}
        component={WelcomePage}
      />
      <Route
        exact path='/characters'
        component={CharactersList}
      />
      <Route
        exact path='/locations'
        component={LocationsList}
      />
    </div>
  );
}

/**************************************/
export default App;
