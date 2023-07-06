import { link } from "fs";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import Todo from "@/components/Todo";
// import '@/styles/style.css' it does not work
type Props = {
  todos: Todos;
};

type Todos = {
  id: string;
  todo: string;
  completed: boolean
}[];



export default function Todos({todos}: Props) {

  return (
  
    <div>
        <Link href={"/todos/addtodo"}> Create New Todo </Link>
        {todos.map((todo, index) => (
      
            <Todo key={todo.id} todo = {todo.todo} completed = {todo.completed} id={todo.id}></Todo>
 
        ))}

    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  todos: Todos;
}> = async () => {
  const res = await fetch(`${process.env.API_URL}/api/todos`);
  const todos = await res.json();
  // console.log("todossss", todos)
  return { props: { todos } };
};
