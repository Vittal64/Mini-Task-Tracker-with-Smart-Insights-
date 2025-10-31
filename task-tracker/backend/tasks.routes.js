const express = require('express');
const router = express.Router();
const db = require('./database');

router.post('/tasks', async (req, res) => {
  const { title, description, priority, due_date } = req.body;
  const query = `
   INSERT INTO tasks (
   ${title}, 
   ${description},
   ${priority},
   ${due_date}
   );
  `
  const dbResponse = await db.run(query);
  const Id = dbResponse.lastID;
  response.send({ Id: Id });
});

router.get('/tasks', (req, res) => {
  const {status, priority} = request.params;
  let query = `
  SELECT * FROM tasks
  where
  status LIKE ${status} AND priority LIKE ${priority}
  `
  const result = db.get(query);
  res.send(result);
});

router.patch('/tasks/:id', (req, res) => {
  const {id} = req.params;
  const {status} = req.body;
  const query = `
  UPDATE tasks
  SET status = ${status}
  WHERE id = ${id}
  `;
  db.run(query);
});

module.exports = router;
