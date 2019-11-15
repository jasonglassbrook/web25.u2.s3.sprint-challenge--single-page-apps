/// external modules ///
import React from 'react';
import { Route , Link } from 'react-router-dom';

/// internal modules ///
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import CharactersPage from './components/CharactersPage';
import LocationsPage from './components/LocationsPage';

/// styles ///
import './styles/App.css';

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
        component={CharactersPage}
      />
      <Route
        exact path='/locations'
        component={LocationsPage}
      />
    </div>
  );
}

/**************************************/
export default App;
