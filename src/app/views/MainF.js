import React, {useEffect, useState} from "react";
import TodoList from "../components/TodoList";
import {initialState} from "../../reducers/todosReducer";
import ListF from "../components/ListF"
import TodoListF from "../components/TodoListF";

export default function MainF() {
    const [list, setList] = useState(initialState.list)

    return (
         <TodoListF list={list} setList={setList} />
    );
}