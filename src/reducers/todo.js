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
  completedTodos: [
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

const todo = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD":
      currentId++;
      return {
        ...state,
        todos: [...state.todos, { ...action.payload, id: currentId }],
      };
    default:
      return state;
  }
};

export default todo;
