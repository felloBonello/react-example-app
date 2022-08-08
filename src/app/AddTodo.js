import { Component } from "react";

export class AddTodo extends Component {
  state = { text: "", callback: () => {} };

  constructor({ callback = () => {} }) {
    super();
    this.state.callback = callback;
  }

  updateText = (value) => {
    this.setState({ ...this.state, text: value });
  };

  addTodo = () => {
    // dispatch the add action
    this.state.callback({
      type: "ADD",
      payload: { text: this.state.text },
    });

    this.updateText("");
  };

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.updateText(e.target.value)}
          value={this.state.text}
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
