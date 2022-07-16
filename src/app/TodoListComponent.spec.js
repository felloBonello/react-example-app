import {TodoListComponent} from "./TodoListComponent";
import {render, screen} from "@testing-library/react";

describe("TodoListComponent", () => {
    it("renders", () => {
        render(<TodoListComponent />);
        // eslint-disable-next-line testing-library/prefer-presence-queries
        expect(screen.queryByTestId('todo-list-component')).toBeTruthy();
    });
});