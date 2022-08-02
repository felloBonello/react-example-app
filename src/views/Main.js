import React from "react";
import { connect } from "react-redux";
import List from "../app/List";
import TodoListComponent from "../app/TodoListComponent";

export class Main extends React.Component {
  render() {
    return (
      <>
        <TodoListComponent />
        <List todos={[]} />
      </>
    );
  }
}

function mapStateToProps(state) {
  const { todo } = state;

  return {
    todos: todo.todos,
  };
}

export default connect(mapStateToProps)(Main);
