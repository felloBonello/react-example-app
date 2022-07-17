import React from 'react';
import './App.css';
import {TodoListComponent} from "./app/TodoListComponent";

function App() {
  return (
    <div className="App">
        <div className="App-header">
            <TodoListComponent todos={[
                {
                    id: 1,
                    text: "I am a todo"
                },
                {
                    id: 2,
                    text: "I am the second todo"
                }
            ]}/>
        </div>
    </div>
  );
}

export default App;
