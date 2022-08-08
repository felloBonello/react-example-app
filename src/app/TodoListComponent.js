import React from "react";
import { connect } from "react-redux";
import { AddTodo } from "./AddTodo";
import { List } from "./List";

export class TodoListComponent extends React.Component {
  render() {
    const { todos } = this.props;

    return (
      <>
        <AddTodo callback={(action) => this.props.dispatch(action)} />
        <List todos={todos} />
      </>
    );
  }
}

function mapStateToProps(state) {
  const todo = state.todo;

  return {
    todos: todo.todos,
  };
}

export default connect(mapStateToProps)(TodoListComponent);
