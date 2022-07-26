import TodoListComponent from "./TodoListComponent";
import { render, screen } from "@testing-library/react";
import { store } from "../app/store";
import { Provider } from "react-redux";
import { initialState } from "../reducers/todo";

const renderTodoList = () => {
  return render(
    <Provider store={store}>
      <TodoListComponent />
    </Provider>
  );
};

describe("TodoListComponent", () => {
  it("renders", () => {
    renderTodoList();
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByTestId("todo-list-component")).toBeTruthy();
  });

  it("will render out todos", () => {
    renderTodoList();

    initialState.todos.forEach((item) => {
      // eslint-disable-next-line testing-library/prefer-presence-queries
      expect(screen.queryByTestId(`todo-${item.id}`)).toBeTruthy();
    });
  });
});
