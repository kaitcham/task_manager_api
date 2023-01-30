const express = require('express');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Task Manager API');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
