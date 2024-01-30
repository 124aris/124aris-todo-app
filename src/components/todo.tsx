'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaTrash, FaPlus } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";


const Todo =() => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (index: number) => {
    const updateTodo = [...todos];
    updateTodo.splice(index, 1);
    setTodos(updateTodo);
  };

  return(
    <main>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-2 mb-4 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Todo List</h1>
        <div className="flex w-full max-w-80 md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl items-center space-x-2">
          <Input type="text"  value={todo} onChange={(e)=>{setTodo(e.target.value);}} placeholder="Enter a new todo" />
          <Button onClick={addTodo}><FaPlus/>Add</Button>
        </div>
        <div className="mt-10 rounded border border-input bg-background">
          {todos.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between px-4 py-2 rounded">
                <p>{item}</p>
                <Button variant={"destructive"} onClick={() => deleteTodo(index)} className="ml-5"><FaTrash/></Button>
              </div>
              <Separator/>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Todo;