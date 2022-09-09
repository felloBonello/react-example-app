import ListF from "./ListF";
import React, {useState} from "react";

const TodoListF = ({list, setList}) => {
    const [text, setText] = useState("");

    const addTodo = () => {
        setList((prev) => [...prev, {
            id: list[-1].id + 1,
            text,
            isComplete: false,
        }])
    };

    return (
        <>
            <div className="flex w-full p-5">
                <input
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    type="text"
                    id="todo-text"
                    aria-label="todo"
                    className="input input-bordered input-primary flex-grow mr-1"
                />
                <button className="btn flex-none" onClick={addTodo} aria-label="submit">
                    Add
                </button>
            </div>
            <div>
                <h1>Todo</h1>
                <ListF items={list.filter(item => !item.isComplete)}/>
            </div>
            <div className="mt-10">
                <h1>Completed</h1>
                <ListF items={list.filter(item => item.isComplete)}/>
            </div>
        </>
    )
}

export default TodoListF