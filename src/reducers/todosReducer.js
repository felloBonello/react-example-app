export const initialState = {
  list: [
    {
      id: 1,
      text: "I am a todo",
      isComplete: false
    },
    {
      id: 2,
      text: "I am the second todo",
      isComplete: false
    },
    {
      id: 3,
      text: "I am completed",
      isComplete: true
    },
    {
      id: 4,
      text: "done",
      isComplete: true
    },
  ],
};

let currentId = 4;

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      currentId++;
      return {
        ...state,
        list: [...state.list, { text: action.payload, id: currentId, isComplete: false }],
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
