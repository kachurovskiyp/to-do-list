import initialState from './initialState';
import shortid from 'shortid';

import strContains from '../utils/strContains';

import { createStore } from 'redux';

//getting

export const getFilteredCards = ({ cards, search }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, search));

export const getFavoriteCards = ({ cards }) => cards
  .filter(card => card.isFavorite);

export const getAllColumns = state => state.columns;

export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);

export const getAllLists = state => state.lists;

export const getListById = ({ lists }, id) => lists.find((list) => list.id === id);

export const getSearch = ({ search }) => search;

//actions

export const addList = payload => ({ type: 'ADD_LIST', payload });

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const refreshSearch = payload => ({ type: 'REFRESH_SEARCH', payload });

export const toggleFavorite = payload => ({ type: 'TOGGLE_FAVORITE', payload });

///

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      action.payload.id = shortid();
      return { ...state, lists: [...state.lists, action.payload] }

    case 'ADD_COLUMN':
      action.payload.id = shortid();
      return { ...state, columns: [...state.columns, action.payload] }

    case 'ADD_CARD':
      action.payload.id = shortid();
      return { ...state, cards: [...state.cards, action.payload] }

    case 'REFRESH_SEARCH':
      return { ...state, search: action.payload }

      case 'TOGGLE_FAVORITE':
        return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };

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