import Head from "next/head";
import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import axios from "axios";
export default function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(async () => {
    const result = await axios.get("http://localhost:1337/todos");
    setTodos(result?.data);
  }, []);
  const deleteTodoItem = async (todo) => {
    if (confirm("Do you really want to delete this item?")) {
      await axios.delete("http://localhost:1337/todos/" + todo.id);
      const newTodos = todos.filter((_todo) => _todo.id !== todo.id);
      console.log(newTodos);
      setTodos(newTodos);
    }
  };
  const editTodoItem = async (todo) => {
    const newTodoText = prompt("Enter new todo text or description:");
    if (newTodoText != null) {
      const result = await axios.put("http://localhost:1337/todos/" + todo.id, {
        todoText: newTodoText,
      });
      const moddedTodos = todos.map((_todo) => {
        if (_todo.id === todo.id) {
          return result?.data;
        } else {
          return _todo;
        }
      });
      setTodos(moddedTodos);
    }
  };
  return (
    <div>
      <Head>
        <title>ToDo app</title>
      </Head>
      <main className="main">
        <TodoList
          todos={todos}
          deleteTodoItem={deleteTodoItem}
          editTodoItem={editTodoItem}
        />
      </main>
    </div>
  );
}