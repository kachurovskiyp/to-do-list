import shortid from "shortid";

export const getAllLists = state => state.lists;
export const getListById = ({ lists }, id) => lists.find((list) => list.id === id);

export const addList = payload => ({ type: ADD_LIST, payload });

const ADD_LIST = 'app/lists/ADD_LIST'

const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default listsReducer;