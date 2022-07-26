import React from "react";

export class TodoListComponent extends React.Component {
  static defaultProps = {
    todos: [],
  };

  constructor({ todos }) {
    super();
    this.todos = todos;
  }

  render() {
    return (
      <ul data-testid="todo-list-component">
        {this.todos.map((item) => (
          <li key={item.id} data-testid={`todo-${item.id}`}>
            {item.text}
          </li>
        ))}
      </ul>
    );
  }
}
