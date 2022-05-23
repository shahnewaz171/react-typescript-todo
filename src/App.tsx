import React, { useEffect, useState } from 'react';
import InputFields from './components/InputFields';
import './App.css';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  }
  // console.log(todos);

  return (
    <div className="App">
      <h2 style={{ marginBottom: '3rem' }}>Todo App</h2>
      <InputFields todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
