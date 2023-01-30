const getAllTasks = (req, res) => {
  res.json({ tasks: [] });
};

const createTask = (req, res) => {
  res.json(req.body);
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
