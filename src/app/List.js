import React from "react";
import { connect } from "react-redux";

export class List extends React.Component {
  render() {
    const { todos } = this.props;

    return (
      <ul data-testid="todo-list-component">
        {todos.map((item) => (
          <li key={item.id} data-testid={`todo-${item.id}`}>
            {item.text}
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  const todo = state.todo;

  return {
    todos: todo.todos,
  };
}

export default connect(mapStateToProps)(List);
