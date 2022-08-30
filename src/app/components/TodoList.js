import React from "react";
import List from "./List";
import PropTypes from "prop-types";

export default class TodoList extends React.Component {
    static propTypes = {
        list: PropTypes.array,
        addTodoCallback: PropTypes.func,
        completeTodoCallback: PropTypes.func,
    };

    static defaultProps = {
        list: [],
        addTodoCallback: (value) => {
        },
        completeTodoCallback: (value) => {
        },
    };

    constructor(props) {
        super(props);
        this.state = {text: ""};
    }

    updateText = (value) => {
        this.setState((prev) => {
            return {...prev, text: value};
        });
    };

    addTodo = () => {
        this.props.addTodoCallback(this.state.text);
        this.updateText("");
    };

    render() {
        const {list, completedList, completeTodoCallback} = this.props;
        const {text} = this.state;

        return (
            <div className="w-6/12 max-w-xl justify-center">
                <div className="flex w-full p-5">
                    <input
                        onChange={(e) => this.updateText(e.target.value)}
                        value={text}
                        type="text"
                        id="todo-text"
                        aria-label="todo"
                        className="input input-bordered input-primary flex-grow mr-1"
                    />
                    <button className="btn flex-none" onClick={this.addTodo} aria-label="submit">
                        Add
                    </button>
                </div>
                <div className="p-5">
                    <div>
                        <h1>{`Todo`}</h1>
                        <List
                            className=""
                            itemClassName="grid rounded bg-primary text-primary-content p-2 mt-3"
                            items={list.filter(item => !item.isComplete)}
                            ariaLabel="todo"
                            renderItem={item => (
                                <div className="flex">
                                    <p className="flex-auto" aria-label="text" role="article">
                                        {item.text}
                                    </p>
                                    <button
                                        aria-label={`complete-${item.id}`}
                                        onClick={() => {
                                            completeTodoCallback(item.id)
                                        }}
                                        className="btn btn-sm flex-none"
                                    >
                                        Complete
                                    </button>
                                </div>
                            )}/>
                    </div>
                    <div className="mt-10">
                        <h1>Completed</h1>
                        <List
                            items={list.filter(item => item.isComplete)}
                            ariaLabel="complete"
                            itemClassName="grid rounded bg-primary text-primary-content p-2 mt-3"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
