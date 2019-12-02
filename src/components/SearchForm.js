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
  'query' : {
    'name' : '',
  },
};

/***************************************
  COMPONENT
***************************************/
const SearchForm = ({ search , ...props }) => {
  /// states ///
  const [query , setQuery] = React.useState (init.query);


  /// effects ///
  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    setQuery ((query) => ({
      ...query,
      [field] : value,
    }));
  };

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
        id='query-name'
        name='name'
        placeholder='Search Name'
        value={query.name}
        onChange={handleChange}
      />
      <StrapButton type='submit'>Search</StrapButton>
    </StrapForm>
  );
};

/**************************************/
export default SearchForm;

