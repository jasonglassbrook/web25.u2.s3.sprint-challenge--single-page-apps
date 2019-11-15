/// external modules ///
import React from 'react';
import {
  Form as StrapForm,
  Input as StrapInput,
  Button as StrapButton
} from 'reactstrap';

/***************************************
  STATES
***************************************/
const init = {
  'query' : '',
};

/***************************************
  COMPONENT
***************************************/
const SearchForm = ({ search , ...props }) => {
  /// states ///
  const [query , setQuery] = React.useState (init.query);

  /// effects ///
  const onSubmit = (event) => {
    event.preventDefault ();
    console.log ('--- submitting ---');
    console.log (query);
    search (query);
  };

  /// thing ///
  return (
    <StrapForm className="search-form" onSubmit={onSubmit}>
      <StrapInput
        type='text'
        id='query'
        name='query'
        placeholder='Search'
        value={query}
        onChange={(event) => {setQuery (event.target.value)}}
      />
      <StrapButton type='submit'>Search</StrapButton>
    </StrapForm>
  );
};

/**************************************/
export default SearchForm;

