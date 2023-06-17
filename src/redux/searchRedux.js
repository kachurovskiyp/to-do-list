export const getSearch = ({ search }) => search;
export const refreshSearch = payload => ({ type: REFRESH_SEARCH, payload });

const REFRESH_SEARCH = 'app/search/REFRESH_SEARCH'


const searchReducer = (statePart = '', action) => {
  switch(action.type) {
    case REFRESH_SEARCH:
      return action.payload
    default:
      return statePart;
  }
};

export default searchReducer;