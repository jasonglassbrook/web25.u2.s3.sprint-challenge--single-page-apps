/// external modules ///
import React from 'react';
import { Route , NavLink } from 'react-router-dom';

/// internal modules ///
import WelcomePage from './components/WelcomePage';
import CharactersPage from './components/CharactersPage';
import LocationsPage from './components/LocationsPage';

/// styles ///
import './styles/App.css';

/***************************************
  COMPONENT
***************************************/
function App () {
  return (
    <div className='App'>
      <header>
        <nav>
          <NavLink to='/'>Welcome</NavLink>
          <NavLink to='/characters'>Characters</NavLink>
          <NavLink to='/locations'>Locations</NavLink>
        </nav>
      </header>
      <main>
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
      </main>
    </div>
  );
}

/**************************************/
export default App;
