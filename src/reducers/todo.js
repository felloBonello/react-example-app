export const initialState = {
  todos: [
    {
      id: 1,
      text: "I am a todo",
    },
    {
      id: 2,
      text: "I am the second todo",
    },
  ],
};

const todo = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default todo;
