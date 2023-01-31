const Task = require('../models/Task');

const getAllTasks = (req, res) => {
  res.json({ tasks: [] });
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.json({ id: req.params.id, ...req.body });
};

const deleteTask = (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = {
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getAllTasks,
};
