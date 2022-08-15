import React from "react";
import List from "./List";
import PropTypes from "prop-types";

export default class TodoList extends React.Component {
  static propTypes = {
    list: PropTypes.array,
    completedList: PropTypes.array,
    addTodoCallback: PropTypes.func,
    completeTodoCallback: PropTypes.func,
  };

  static defaultProps = {
    list: [],
    completedList: [],
    addTodoCallback: (value) => {},
    completeTodoCallback: (value) => {},
  };

  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  updateText = (value) => {
    this.setState((prev) => {
      return { ...prev, text: value };
    });
  };

  addTodo = () => {
    this.props.addTodoCallback(this.state.text);
    this.updateText("");
  };

  render() {
    const { list, completedList, completeTodoCallback } = this.props;
    return (
      <>
        <div>
          <input
            onChange={(e) => this.updateText(e.target.value)}
            value={this.state.text}
            type="text"
            id="todo-text"
            aria-label="todo"
          />
          <button onClick={this.addTodo} aria-label="submit">
            Add
          </button>
        </div>
        <List
          items={list}
          ariaLabel="todo"
          completeTodoCallback={completeTodoCallback}
          hasCompleteButton={true}
        />
        <List items={completedList} ariaLabel="complete" />
      </>
    );
  }
}
