const express = require('express');
const { createTask, getTasks, updateTask, deleteTask, getTasks_bystatus, getTasks_pagination } = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();


router.post('/tasks', authMiddleware, createTask);
router.get('/tasks_get', authMiddleware, getTasks);
router.put('/tasks_update/:id', authMiddleware, updateTask);
router.delete('/tasks_delete/:id', authMiddleware, deleteTask);

////////////optional/////////////
router.get('/tasks_get_status', authMiddleware, getTasks_bystatus);
router.get('/getTasks_pagination', authMiddleware, getTasks_pagination);

module.exports = router;
