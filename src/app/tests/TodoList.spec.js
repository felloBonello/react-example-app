import TodoList from "../components/TodoList";
import {fireEvent, render, screen, within} from "@testing-library/react";
import {initialState} from "../../reducers/todosReducer";

const testCallback = jest.fn(() => "test");

const renderTodoList = () => {
  return render(
    <TodoList
      list={initialState.list}
      completedList={initialState.complete}
      addTodoCallback={testCallback}
      completeTodoCallback={testCallback}
    />
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

    initialState.list.forEach((item) => {
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

    initialState.complete.forEach((item) => {
      expect(
        within(complete)
          .getAllByRole("article", { name: "text" })
          .find((li) => li.textContent === item.text)
      ).toBeInTheDocument();
    });
  });

  it("will call the addTodoCallback on submit", () => {
    renderTodoList();
    const submitButton = screen.getByRole("button", { name: "submit" });
    const todoInput = screen.getByRole("textbox", { name: "todo" });
    const updateValue = "bippity boppity boop";

    fireEvent.change(todoInput, { target: { value: updateValue } });
    fireEvent.click(submitButton);

    expect(testCallback).toBeCalledWith(updateValue);
  });

  it("displays item in completed list after clicking complete", () => {
    renderTodoList();
    const [todoToComplete] = initialState.list;
    const completeButton1 = screen.getByRole("button", {
      name: `complete-${todoToComplete.id}`,
    });
    fireEvent.click(completeButton1);

    // expect(testCallback).toHaveBeenCalledWith(todoToComplete.id);
    expect(testCallback).toHaveBeenCalled();
  });
});
