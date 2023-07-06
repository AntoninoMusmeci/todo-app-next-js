import todos from "@/data/data";
import { NextApiRequest, NextApiResponse } from "next";

const getTodo = (id: string) => todos.find((todo) => todo.id === id);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const todo = getTodo(req.query.id as string);
  if (!todo) {
    res.status(404);
    res.end();
    return;
  }
  const i = todos.findIndex((n) => n.id === req.query.id);
  if (req.method === "DELETE") {
    todos.splice(i, 1);

    res.json({ data: req.query.id });
  }

  if (req.method === "PATCH") {
    const updated = { ...todo, ...req.body };
    console.log("updated", updated)
    todos[i] = updated;
    console.log(todos)
    res.json({ data: updated });
  }
}

// const handler = nc()
//   .get((req, res) => {

//     const note = getNote(req.query.id)

//     if (!note) {
//       res.status(404)
//       res.end()
//       return
//     }

//     res.json({data: note})
//   })
//   .patch((req, res) => {
//     const note = getNote(req.query.id)

//     if (!note) {
//       res.status(404)
//       res.end()
//       return
//     }

//     const i = notes.findIndex(n => n.id === parseInt(req.query.id))
//     const updated = {...note, ...req.body}

//     notes[i] = updated
//     res.json({data: updated})
//   })
//   .delete((req, res) => {
//     const note = getNote(req.query.id)

//     if (!note) {
//       res.status(404)
//       res.end()
//       return
//     }
//     const i = notes.findIndex(n => n.id === parseInt(req.query.id))

//     notes.splice(i, 1)

//     res.json({data: req.query.id})
//   })

// export default handler
