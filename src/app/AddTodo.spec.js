import {queryByRole, render, screen} from "@testing-library/react";
import {AddTodo} from "./AddTodo";

describe('AddTodo', function () {

    it('will render', () => {
        render(<AddTodo/>);

        // eslint-disable-next-line testing-library/prefer-presence-queries
        expect(screen.queryByRole('input')).toBeTruthy();
    });

});