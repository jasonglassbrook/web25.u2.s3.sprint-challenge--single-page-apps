/// external modules ///
import React from 'react';
import { Route , NavLink } from 'react-router-dom';
import {
  Navbar as StrapNavbar,
  Nav as StrapNav,
  NavItem as StrapNavItem
} from 'reactstrap';

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
        <StrapNavbar color='dark' dark>
          <StrapNav navbar horizontal>
            <StrapNavItem>
              <NavLink to='/'>Welcome</NavLink>
            </StrapNavItem>
            <StrapNavItem>
              <NavLink to='/characters'>Characters</NavLink>
            </StrapNavItem>
            <StrapNavItem>
              <NavLink to='/locations'>Locations</NavLink>
            </StrapNavItem>
          </StrapNav>
        </StrapNavbar>
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
