import React from "react";
import styles from "./Todo.module.css";
import { useRouter } from "next/router";
type Props = {
  todo: string;
  completed: boolean;
  id: string;
};

export default function Todo({ todo, completed, id }: Props) {
    console.log(completed)
  const router = useRouter()
  function handleDelete(id: string) {
    fetch(`/api/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.replace(router.asPath)
  }

  function completeTodo(id: string, completed: boolean) {
  
    fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({ completed: completed }),
    });
    router.replace(router.asPath)
  }
  return (
    <div    className={styles.todo}>
      <div className={completed ? styles.completed : ""} >
        <input onChange = {() => completeTodo(id,!completed)} type="checkbox" checked={completed}/>
        <p>{todo}</p>
        <button onClick={() => handleDelete(id)}> delete </button>
      </div>
    </div>
  );
}
