import List from "../components/List";
import {render, screen} from "@testing-library/react";
import {initialState} from "../../reducers/todosReducer";

const ariaLabel = 'blam';

const renderList = () => {
  return render(
      <List
          items={initialState.list}
          ariaLabel={ariaLabel}
      />
  );
};

describe("TodoListComponent", () => {
  it("renders", () => {
    renderList();
    expect(screen.getByRole('list', {name: 'blam'})).toBeInTheDocument();
  });

  it("lists items", () => {
    renderList();
    initialState.list.forEach((item) => {
      expect(screen
          .getAllByRole('listitem')
          .find(li => li.textContent === item.text)
      ).toBeInTheDocument();
    })
  });

});
