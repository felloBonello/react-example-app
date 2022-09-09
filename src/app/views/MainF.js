import React, {useState} from "react";
import {initialState} from "../../reducers/todosReducer";
import TodoListF from "../components/TodoListF";

export default function MainF() {
    const [list, setList] = useState(initialState.list)

    return (
        <TodoListF list={list} setList={setList}/>
    );
}