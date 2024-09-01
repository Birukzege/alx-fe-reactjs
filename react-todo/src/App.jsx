import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  return (
    <div className="App">
      <AddTodoForm onAddTodo={(newTodo) => {
        // You can add logic here to handle adding the new todo
             console.log('New todo:', newTodo);
           }} />
           <TodoList />
         </div>
       );
     }

     export default App;