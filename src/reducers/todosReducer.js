export const initialState = {
  list: [
    {
      id: 1,
      text: "I am a todo",
    },
    {
      id: 2,
      text: "I am the second todo",
    },
  ],
  complete: [
    {
      id: 3,
      text: "I am completed",
    },
    {
      id: 4,
      text: "done",
    },
  ],
};

let currentId = 4;

const todosReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD":
      currentId++;
      return {
        ...state,
        list: [...state.list, { text: action.payload, id: currentId }],
      };
    default:
      return state;
  }
};

export default todosReducer;
