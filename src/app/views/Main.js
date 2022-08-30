import React from "react";
import {connect} from "react-redux";
import TodoList from "../components/TodoList";

export class Main extends React.Component {

  addTodoCallback = (text) => {
    this.props.dispatch({
      type: "ADD",
      payload: text,
    });
  }

  completeTodoCallback = (id) => {
    this.props.dispatch({
      type: "COMPLETE",
      payload: id,
    });
  }

  render() {
    const {list, completedList} = this.props;
    return (
      <div className="flex place-content-center">
        <TodoList
            list={list}
            completedList={completedList}
            addTodoCallback={this.addTodoCallback}
            completeTodoCallback={this.completeTodoCallback}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { todos } = state;

  return {
    list: todos.list,
    completedList: todos.complete
  };
}

export default connect(mapStateToProps)(Main);
