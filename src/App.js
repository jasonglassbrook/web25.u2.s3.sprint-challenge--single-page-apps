/// external modules ///
import React from 'react';

/// internal modules ///
import Header from "./components/Header.js";

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
    <div className="App">
      <Header/>
    </div>
  );
}

/**************************************/
export default App;
