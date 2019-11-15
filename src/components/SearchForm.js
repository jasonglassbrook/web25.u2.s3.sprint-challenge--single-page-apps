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
const init = {};

/***************************************
  COMPONENT
***************************************/
const SearchForm = (props) => {
  return (
    <StrapForm className="search-form">
      <StrapInput type='text' id='query' name='query' placeholder='Search'/>
      <StrapButton type='submit'>Search</StrapButton>
    </StrapForm>
  );
};

/**************************************/
export default SearchForm;

