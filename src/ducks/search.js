const initialState = {
  type: '',
  query: '',
  types: [],
  fetching: false,
  error: '',
};

const FETCH_SWAPI_TYPES_STARTED = 'swapi/search/FETCH_SWAPI_TYPES_STARTED';
export function fetchSwapiTypesStarted(payload = { fetching: true }) {
  return {
    payload,
    type: FETCH_SWAPI_TYPES_STARTED,
  };
}

const FETCH_SWAPI_TYPES_SUCCESS = 'swapi/search/FETCH_SWAPI_TYPES_SUCCESS';
export function fetchSwapiTypesSuccess(payload) {
  return {
    payload: Object.assign({}, payload, { fetching: false }),
    type: FETCH_SWAPI_TYPES_SUCCESS,
  };
}

const FETCH_SWAPI_TYPES_FAILED = 'swapi/search/FETCH_SWAPI_TYPES_FAILED';
export function fetchSwapiTypesFailed(payload) {
  return {
    payload: Object.assign({}, payload, { fetching: false }),
    type: FETCH_SWAPI_TYPES_FAILED,
  };
}

export function fetchSwapiTypes(payload) {
  return (dispatch) => {
    dispatch(fetchSwapiTypesStarted(payload));

    return window
      .fetch('https://swapi.co/api/')
      .then(res => res.json())
      .then((json) => {
        const types = Object.keys(json);

        // dispatch(updateSearchType({ type: resourceTypes[0] || '' }));
        dispatch(fetchSwapiTypesSuccess({ types }));
      })
      .catch(error => dispatch(fetchSwapiTypesFailed({ error: error.message })));
  };
}

const UPDATE_SEARCH_TYPE = 'swapi/search/UPDATE_SEARCH_TYPE';
export function updateSearchType(payload) {
  return {
    payload,
    type: UPDATE_SEARCH_TYPE,
  };
}

const UPDATE_SEARCH_QUERY = 'swapi/search/UPDATE_SEARCH_QUERY';
export function updateSearchQuery(payload) {
  return {
    payload,
    type: UPDATE_SEARCH_QUERY,
  };
}

export default (state = initialState, { type, payload }) => {
  console.log('TYPE: _____ ', type);

  switch (type) {
    case UPDATE_SEARCH_TYPE:
      return Object.assign({}, state, payload);
    case UPDATE_SEARCH_QUERY:
      return Object.assign({}, state, payload);
    case FETCH_SWAPI_TYPES_STARTED:
      return Object.assign({}, state, payload);
    case FETCH_SWAPI_TYPES_FAILED:
      return Object.assign({}, state, payload);
    case FETCH_SWAPI_TYPES_SUCCESS:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};
