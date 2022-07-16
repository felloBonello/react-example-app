import {Component} from 'react';

export class AddTodo extends Component {
    constructor() {
        super();
        this.text = "";
    }

    render() {
        return <div>
            <input role="input" type="text" id="todo-text"/>
        </div>
    }
}