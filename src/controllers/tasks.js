const { findOneAndDelete } = require('../models/Task');
const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getTask = async (req, res) => {
  const { id: taskId } = req.params;
  try {
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateTask = (req, res) => {
  res.json({ id: req.params.id, ...req.body });
};

const deleteTask = async (req, res) => {
  const { id: taskId } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getAllTasks,
};
