require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');
const tasks = require('./routes/tasks');

const port = 3000;
const app = express();

app.use(express.json());

app.use('/api/v1/tasks', tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
