import TodoList from "../components/TodoList";
import {fireEvent, render, screen, within} from "@testing-library/react";
import todosReducer, {initialState} from "../../reducers/todosReducer";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {todosState} from "../../data/todosState";

const renderTodoList = (state = todosState) => {


  const store = configureStore({
    reducer: {
      todos: todosReducer
    },
  }, state);

  return render(
      <Provider store={store}>
        <TodoList/>
      </Provider>
  );
};

describe("TodoListComponent", () => {
  it("renders", () => {
    renderTodoList();
    expect(screen.getByRole("list", { name: "todo" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "submit" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "todo" })).toBeInTheDocument();
  });

  it("will render todos", () => {
    renderTodoList();
    const todoList = screen.getByRole("list", { name: "todo" });

    initialState.list.filter(item => !item.isComplete).forEach((item) => {
      expect(
        within(todoList)
          .getAllByRole("article", { name: "text" })
          .find((li) => li.textContent === item.text)
      ).toBeInTheDocument();
    });
  });

  it("will render complete list", () => {
    renderTodoList();
    const complete = screen.getByRole("list", { name: "complete" });

    initialState.list.filter(item => item.isComplete).forEach((item) => {
      expect(
          within(complete)
              .getAllByRole("listitem")
              .find(li => li.textContent === item.text)
      ).toBeInTheDocument();
    });
  });

  it("will call add a todo", () => {
    renderTodoList();
    const submitButton = screen.getByRole("button", {name: "submit"});
    const todoInput = screen.getByRole("textbox", {name: "todo"});
    const todoList = screen.getByRole("list", {name: "todo"});
    const updateValue = "bippity boppity boop";

    fireEvent.change(todoInput, {target: {value: updateValue}});
    fireEvent.click(submitButton);

    expect(
        within(todoList).getByText(updateValue)
    ).toBeInTheDocument();

    expect(todoInput).toHaveValue("");
  });

  it("displays item in completed list after clicking complete", () => {
    renderTodoList();
    const [todoToComplete] = initialState.list;
    const completeList = screen.getByRole("list", {name: "complete"});
    const todoList = screen.getByRole("list", {name: "todo"});
    const completeButton1 = screen.getByRole("button", {
      name: `complete-${todoToComplete.id}`,
    });

    fireEvent.click(completeButton1);

    expect(
        within(completeList).getByText(todoToComplete.text)
    ).toBeInTheDocument();

    expect(
        within(todoList).queryByText(todoToComplete.text)
    ).not.toBeInTheDocument();
  });
});
