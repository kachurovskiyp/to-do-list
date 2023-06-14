import initialState from './initialState';
import shortid from 'shortid';

import strContains from '../utils/strContains';

import { createStore } from 'redux';

//getting

export const getFilteredCards = ({ cards, search }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, search));

export const getAllColumns = state => state.columns;

//actions

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const refreshSearch = payload => ({ type: 'REFRESH_SEARCH', payload });

///

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      action.payload.id = shortid();
      return { ...state, columns: [...state.columns, action.payload] }

    case 'ADD_CARD':
      action.payload.id = shortid();
      return { ...state, cards: [...state.cards, action.payload] }

    case 'REFRESH_SEARCH':
      return { ...state, search: action.payload }

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