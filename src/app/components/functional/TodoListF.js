import React, {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import List from "../class/List";

const TodoListF = ({initialList}) => {
    const [text, setText] = useState("");
    const [list, setList] = useState(initialList);

    const addTodo = () => {
        setList((prev) => [...prev, {
            id: generateUniqueID(),
            text,
            isComplete: false,
        }])
        setText("");
    };

    const markItemComplete = (id) => {
        const updatedList = [...list]
        const item = updatedList.find((li) => {
            return li.id === id
        });
        item.isComplete = true;

        setList(() => (updatedList));
    }

    const renderTodoItem = (item) => {
        return (
            <div className="flex">
                <p className="flex-auto" aria-label="text" role="article">
                    {item.text}
                </p>
                <button
                    aria-label={`complete-${item.id}`}
                    onClick={() => markItemComplete(item.id)}
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
            <div className="p-5">
                <div>
                    <h1>{`Todo`}</h1>
                    <List
                        className=""
                        itemClassName="grid rounded bg-primary text-primary-content p-2 mt-3"
                        items={list.filter(item => !item.isComplete)}
                        ariaLabel="todo"
                        renderItem={renderTodoItem}>
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

export default TodoListF