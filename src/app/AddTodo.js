import { Component } from "react";

export class AddTodo extends Component {
  state = { text: "", callback: () => {} };

  constructor({ callback = () => {} }) {
    super();
    this.state.callback = callback;
  }

  addTodo = () => {
    // dispatch the add action

    this.state.callback({
      type: "ADD",
      payload: { id: 3, text: "some other todo" },
    });
  };

  updateText = (value) => {
    this.setState({ ...this.state, text: value });
  };

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.updateText(e.target.value)}
          role="input"
          type="text"
          id="todo-text"
        />
        <button role="button" onClick={this.addTodo}>
          Add
        </button>
      </div>
    );
  }
}
