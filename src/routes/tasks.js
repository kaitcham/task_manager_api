const router = require('express').Router();
const {
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getAllTasks,
} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
