import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-3xl font-bold bg-gradient-to-br from-red-500 via-green-500 to-red-500 text-center px-4 py-2 rounded-md mb-4 bg-clip-text text-transparent">Todo List</h1>
    <div className="flex mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a new todo"
        className="px-4 py-2 border rounded-l w-full p-4 bg-slate-900"
      />
      <button onClick={handleAddTodo} className="px-4 py-2 bg-yellow-500 text-black rounded-r ml-2">
        Add
      </button>
    </div>
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className="flex items-center justify-between mb-2 bg-slate-600 text-black px-4 py-2 rounded">
          {todo}
          <button onClick={() => handleRemoveTodo(index)} className="text-red-500 ml-5">
            X
          </button>
        </li>
      ))}
    </ul>
  </div>
  
  );
};

export default Todo;
