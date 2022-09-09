import {todosState} from "../data/todosState";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const todosReducer = (state = todosState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        list: [...state.list, {text: action.payload, id: generateUniqueID(), isComplete: false}],
      };
    case "COMPLETE":
      return {
        ...state,
        list: state.list.map(
            (item) => item.id === action.payload ? {...item, isComplete: true} : item
        )
      }
    default:
      return state;
  }
};

export default todosReducer;
