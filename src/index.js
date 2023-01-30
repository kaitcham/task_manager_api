const express = require('express');
const tasks = require('./routes/tasks');

const port = 3000;
const app = express();

app.use(express.json());

app.use('/api/v1/tasks', tasks);

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
