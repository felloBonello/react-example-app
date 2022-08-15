import List from "../components/List";
import { render, screen } from "@testing-library/react";
import { initialState } from "../../reducers/todosReducer";

const ariaLabel = "blam";
const initialProps = {
  list: initialState.list,
  label: ariaLabel,
  hasCompleteButton: false,
};
const renderList = (props = initialProps) => {
  const { list, label, hasCompleteButton } = props;
  return render(
    <List
      items={list}
      ariaLabel={label}
      hasCompleteButton={hasCompleteButton}
    />
  );
};

describe("TodoListComponent", () => {
  it("renders", () => {
    renderList();
    expect(screen.getByRole("list", { name: "blam" })).toBeInTheDocument();
  });

  it("lists items", () => {
    renderList();
    initialState.list.forEach((item) => {
      expect(
        screen
          .getAllByRole("article", { name: "text" })
          .find((li) => li.textContent === item.text)
      ).toBeInTheDocument();
    });
  });

  //TODO: pass hasCompleteButton prop
  it("will not show complete button for a compeleted list", () => {
    const [completedTodo] = initialProps.list;
    renderList({ ...initialProps, complete: true });

    expect(
      screen.queryByRole("button", {
        name: `complete-${completedTodo.id}`,
      })
    ).not.toBeInTheDocument();
  });
});
