// import React, { useState } from 'react';

// const TodoList = () => {
//   const [todos, setTodos] = useState([
//     { id: 1, text: 'Learn React', completed: false },
//     { id: 2, text: 'Build a Todo List', completed: false },
//   ]);

//   const addTodo = (newTodo) => {
//     setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
//   };

//   const toggleTodo = (id) => {
//     setTodos(todos.map((todo) =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     ));
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => toggleTodo(todo.id)}
//             />
//             <span style={{
//                 textDecoration: todo.completed ? 'line-through' : 'none' }}>
//                 {todo.text}
//               </span>
//               <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   export default TodoList;

  








  import React from 'react';

const todos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a Todo List', completed: true },
  { id: 3, text: 'Write Tests', completed: false }
];

function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;