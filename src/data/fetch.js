import axios from "axios";

/*******************************************************************************
  FETCH
*******************************************************************************/

export const fetchData = (api , initData) => (query , setData) => {
  axios
    .get ((() => {
      console.log ("--- fetching data... ---"); /* --- i just wanted this console.log nested like the others */
      return (api.query_url (query));
    })())
    .then ((response) => {
      console.log ("--- success! ---");
      /* TESTING */ console.log (response);
      const data = response.data;
      /* TESTING */ console.log (data);
      setData (data);
    })
    .catch ((error) => {
      console.log ("--- failure! ---");
      const data = {
        ...initData,
        "error" : error,
      };
      /* TESTING */ console.log (data);
      setData (data);
    })
    .finally (() => {
      console.log ("--- done. ---");
    })
}

/***************************************
  MATCH PARAMS
***************************************/

export const matchQueryParam = (name , url) => {
  const pattern = new RegExp (`.*[?&]${name}=([^&]+).*`);
  const matches = pattern.exec (url);
  if (matches) {
    return (matches[matches.length - 1]);
  }
  else {
    return (null);
  }
};

export const matchPage = (url) => (matchQueryParam ('page' , url));

export const getPage = (info) => {
  let page = null;
  if (page === null && info.prev !== '') {
    page = matchPage (info.prev);
  }
  if (page === null && info.next !== '') {
    page = matchPage (info.next);
  }
};
