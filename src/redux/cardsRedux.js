import shortid from "shortid";
import strContains from '../utils/strContains';

const ADD_CARD = 'app/cards/ADD_CARD';
const DELETE_CARD = 'app/cards/DELETE_CARD';
const TOGGLE_FAVORITE = 'app/cards/TOGGLE_FAVORITE';

export const getFilteredCards = ({ cards, search }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, search));
export const getFavoriteCards = ({ cards }) => cards
  .filter(card => card.isFavorite);

export const addCard = payload => ({ type: ADD_CARD, payload });
export const deleteCard = payload => ({ type: DELETE_CARD, payload });
export const toggleFavorite = payload => ({ type: TOGGLE_FAVORITE, payload });

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];

    case DELETE_CARD:
      return statePart.filter(card => card.id !== action.payload);

    case TOGGLE_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);

      default:
      return statePart;
  }
};

export default cardsReducer;