import { render, screen, waitFor } from "@testing-library/react";
import { AddTodo } from "./AddTodo";
import userEvent from "@testing-library/user-event";

describe("AddTodo", function () {
  it("will render", () => {
    render(<AddTodo />);

    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByRole("input")).toBeTruthy();
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByRole("button")).toBeTruthy();
  });

  it("create a todo", async () => {
    const mockedCallback = jest.fn();
    let text = "adding a new item";

    await render(<AddTodo callback={mockedCallback} />);

    let textElement = screen.queryByRole("input");
    await userEvent.type(textElement, text);

    let buttonElement = screen.queryByRole("button");
    await userEvent.click(buttonElement);

    await waitFor(() => expect(mockedCallback).toHaveBeenCalledWith(text));
  });
});
