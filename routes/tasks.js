const express = require('express');
const router = express.Router();

const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks')


router.route('/').get(getAllTasks).post(createTask)
//i am setting the id purpose
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask) //this is also going to be our params

module.exports = router  