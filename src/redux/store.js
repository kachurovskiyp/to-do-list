import initialState from './initialState';
import shortid from 'shortid';

import { createStore } from 'redux';

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      action.payload.id = shortid();
      return {...state, columns: [...state.columns, action.payload]}

    case 'ADD_CARD':
      action.payload.id = shortid();
      return {...state, cards: [...state.cards, action.payload]}

    default:
      return state;
  }


};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;