import React from "react";
import { connect } from "react-redux";
import { AddTodo } from "./AddTodo";
export class TodoListComponent extends React.Component {
  render() {
    const { todos } = this.props;

    return (
      <>
        <AddTodo callback={(action) => this.props.dispatch(action)} />
        <ul data-testid="todo-list-component">
          {todos.map((item) => (
            <li key={item.id} data-testid={`todo-${item.id}`}>
              {item.text}
            </li>
          ))}
        </ul>
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
