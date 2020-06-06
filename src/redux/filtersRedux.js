/* SELECTORS */

export const getAllFilters = ({ filters }) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');

export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');

export const CHANGE_DURATION_INCREMENT = createActionName('CHANGE_DURATION_INCREMENT');
export const CHANGE_DURATION_DECREMENT = createActionName('CHANGE_DURATION_DECREMENT');


// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });

export const searchActiveTag = payload => ({ payload, type: ADD_TAG });
export const searchRemovedTag = payload => ({ payload, type: REMOVE_TAG });

export const changeDurationFrom = payload => ({ payload, type: CHANGE_DURATION_INCREMENT });
export const changeDurationTo = payload => ({ payload, type: CHANGE_DURATION_DECREMENT });
// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case ADD_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case REMOVE_TAG:
      return {
        ...statePart,
        tags: statePart.tags.filter(tag=> tag != action.payload),
      };
    case CHANGE_DURATION_INCREMENT:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          from: action.payload.value,
        },
      };
    case CHANGE_DURATION_DECREMENT:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          to: action.payload.value,
        },
      };
    default:
      return statePart;
  }
}
