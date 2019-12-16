import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards, searchString}, columnId) => cards.filter(card => card.columnId == columnId && RegExp(searchString, 'i').test(card.title));

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_Card = createActionName('ADD_Card');

// action creators
export const createAction_addCard = payload => ({ payload, type: ADD_Card });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_Card:
      return [...state, { ...action.payload, id: shortid.generate() }];
    default:
      return state;
  }
}