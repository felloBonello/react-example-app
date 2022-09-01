import React from "react";
import List from "./List";
import PropTypes from "prop-types";
import {connect} from "react-redux";

export class TodoList extends React.Component {
    static propTypes = {
        list: PropTypes.array,
    };

    static defaultProps = {
        list: [],
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
        const {add} = this.props;
        const {text} = this.state;

        add(text);
        this.updateText("");
    };

    render() {
        const {list, complete } = this.props;
        const {text} = this.state;

        const CustomButton = (item) => {

            return  (
               <div className="flex">
                   <p className="flex-auto" aria-label="text" role="article">
                       {item.text}
                   </p>
                   <button
                        aria-label={`complete-${item.id}`}
                        onClick={() => {
                            complete(item.id)
                        }}
                        className="btn btn-sm flex-none"
                    >
                        Complete
                    </button>
               </div>)
        }

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
                            ariaLabel="todo">
                            {CustomButton}
                        </List>
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

const add = (text) => ({
    type: "ADD",
    payload: text,
})

const complete = (id) => ({
    type: "COMPLETE",
    payload: id,
})

const mapDispatchToProps = (dispatch) => {
    return {
        add: text => dispatch(add(text)),
        complete: id => dispatch(complete(id)),
    }
}

function mapStateToProps(state) {
    const {todos} = state;

    return {
        list: todos.list
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
