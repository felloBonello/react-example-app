import List from "../components/List";
import {render, screen} from "@testing-library/react";
import {initialState} from "../../reducers/todosReducer";

const ariaLabel = "blam";
const initialProps = {
  list: initialState.list,
  label: ariaLabel,
};

const renderList = (props = initialProps) => {
  const { list, label, renderItem } = props;
  return render(
    <List
      items={list}
      ariaLabel={label}
      renderItem={renderItem}
    />
  );
};

const renderItem = (item) => {
  return (
      <>
        <div role="test" aria-label="text">
          {item.text}
        </div>
        <div role="test" aria-label="id">
          {item.id}
        </div>
      </>
  )
}

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
          .getAllByRole("listitem")
          .find((li) => li.textContent === item.text)
      ).toBeInTheDocument();
    });
  });

  it("lists items with custom item renderer", () => {
    renderList({...initialProps, renderItem });
    initialState.list.forEach((item) => {
      expect(
          screen
              .getAllByRole("test", { name: "text" })
              .find((li) => li.textContent === item.text)
      ).toBeInTheDocument();
      expect(
          screen
              .getAllByRole("test", { name: "id" })
              .find((li) => li.textContent === item.id.toString())
      ).toBeInTheDocument();
    });
  });
})
