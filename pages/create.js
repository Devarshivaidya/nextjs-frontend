import Head from "next/head";
import { useEffect, useState } from "react";
import AddTodo from "../components/AddTodo";
import axios from "axios";
export default function Home() 
{
    const [todos, setTodos] = useState([]);
    useEffect(async () => {
      const result = await axios.get("https://strapi-solution.herokuapp.com/todos");
      setTodos(result?.data);
    }, []);

const addTodo = async (todoText) => {
    if (todoText && todoText.length > 0) {
      const result = await axios.post("https://strapi-solution.herokuapp.com/todos", {
        todoText: todoText,
      });
      setTodos([...todos, result?.data]);
    }
  };
  return(     
    <div>
          <Head>
                <title>ToDo app</title>
        </Head>
        <main className="main">
            <AddTodo addTodo={addTodo} />
        </main>
    </div>
  )
}
