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

  render() {
    const {list, completedList} = this.props;
    return (
      <>
        <TodoList
            list={list}
            completedList={completedList}
            addTodoCallback={this.addTodoCallback}
        />
      </>
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
