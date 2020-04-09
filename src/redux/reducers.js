// create switch statement with addStudent case and deleteStudent case, and user
// don't forget to  default return state
//export default

import { combineReducers }  from 'redux'
;

const student = (state = null) => state;

const list = (state = [], action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      const newListState = [...state];
      console.log(newListState);
      console.log(action.value);
      newListState.push(action.value);
      return newListState;

    case "DELETE_STUDENT":
      const newState = [...state];
      newState.splice(action.value, 1);
      return newState;

    default:
      return state;
  }
};

export default combineReducers({ student, list});