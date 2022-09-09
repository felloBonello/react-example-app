import {todosState} from "../../data/todosState";
import TodoListF from "../components/functional/TodoListF";

export default function MainF() {
    return (
        <div className="flex place-content-center">
            <TodoListF initialList={todosState.list}/>
        </div>
    );
}