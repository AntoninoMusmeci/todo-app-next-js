import todos from "@/data/data";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 } from "uuid";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(todos );
  } else {
    const id = v4()
    const todo = { ...req.body, id, completed: false };

    todos.push(todo);
    res.json(todo);
  }
}
