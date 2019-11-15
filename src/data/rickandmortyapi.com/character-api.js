import RNMAPI from "./api";

const API = {
  "base_url" : `${RNMAPI.base_url}character/`,
  "query_url" : function (query) {
    let params = "";
    // params are mutually exclusive
    if (query.page !== undefined) {
      params = `?page=${query.page}`;
    }
    else if (query.name !== undefined) {
      params = `?name=${query.name}`;
    }
    else if (query.id !== undefined) {
      params = `${query.id}/`;
    }
    return (`${this.base_url}${params}`);
  },
};

export default API;