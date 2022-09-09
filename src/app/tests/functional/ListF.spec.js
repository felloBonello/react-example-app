import ListF from "../../components/functional/ListF";
import {render, screen} from "@testing-library/react";
import {todosState} from "../../../data/todosState";

const ariaLabel = "blam";
const initialProps = {
  list: todosState.list,
  label: ariaLabel,
};

const renderList = (props = initialProps) => {
  const {list, label, renderItem} = props;
  return render(
      <ListF
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

describe("TodoListFComponent", () => {
  it("renders", () => {
    renderList();
    expect(screen.getByRole("list", {name: "blam"})).toBeInTheDocument();
  });

  it("lists items", () => {
    renderList();
    todosState.list.forEach((item) => {
      expect(
          screen
              .getAllByRole("listitem")
              .find((li) => li.textContent === item.text)
      ).toBeInTheDocument();
    });
  });

  it("lists items with custom item renderer", () => {
    renderList({...initialProps, renderItem});
    todosState.list.forEach((item) => {
      expect(
          screen
              .getAllByRole("test", {name: "text"})
              .find((li) => li.textContent === item.text)
      ).toBeInTheDocument();
      expect(
          screen
              .getAllByRole("test", {name: "id"})
              .find((li) => li.textContent === item.id.toString())
      ).toBeInTheDocument();
    });
  });
})
