import React from "react";
import TodoList from "../components/class/TodoList";

export default class Main extends React.Component {

  render() {
    return (
        <div className="flex place-content-center">
          <TodoList/>
        </div>
    );
  }
}
