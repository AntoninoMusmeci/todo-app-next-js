import React, { FormEvent, useState } from "react";
import Form from "@/components/Form";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Addtodo() {
  const router = useRouter()
  const [todo, setTodo] = useState("");
  
  function handleSubmit(e: FormEvent){
    e.preventDefault()
    console.log(todo)
    fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({todo: todo}),
      })
    router.push('/todos')
    
  }
  return (
    <Form  submitHandler = {(e: FormEvent) => handleSubmit(e)}>

      <h1 > Add a Todo  </h1>
      <input onChange = {(e) => setTodo(e.target.value)} value={todo} type = "text" placeholder="enter todo" />
      <button type="submit" > Add Todo </button>
      <Link href = '/todos'> <button>Todo List </button> </Link>

  </Form>
  );
}
