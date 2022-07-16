import {TodoListComponent} from "./TodoListComponent";
import {render, screen} from "@testing-library/react";

describe("TodoListComponent", () => {
    it("renders", () => {
        render(<TodoListComponent />);
        // eslint-disable-next-line testing-library/prefer-presence-queries
        expect(screen.queryByTestId('todo-list-component')).toBeTruthy();
    });

    it("will render out todos", () => {
        const todos = [
            {
                id: 1,
                text: "I am a todo"
            },
            {
                id: 2,
                text: "I am the second todo"
            }
        ];
        render(<TodoListComponent todos={todos}/>);

        todos.forEach((item) => {
            // eslint-disable-next-line testing-library/prefer-presence-queries
            expect(screen.queryByTestId(`todo-${item.id}`)).toBeTruthy();
        })
    });
});