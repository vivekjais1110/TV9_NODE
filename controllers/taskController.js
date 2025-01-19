const Task = require('../models/taskMONGO');
const { isISO8601 } = require('validator');
// const transport = require("../middlewares/nodemailer");

exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate, priority, status } = req.body;
    
    if (!title && !description) {
      return res.status(400).json({ error: 'Title & description are required.' });
    }

    if (dueDate && !isISO8601(dueDate)) {
      return res.status(400).json({ error: 'Due date valid ISO 8601 format (exmp- YYYY-MM-DD).' });
    }

    const Task_duplicate = await Task.findOne({ 
      userId: req.user.id, 
      title: title 
    });
    
    if (Task_duplicate) {
      return res.status(400).json({ message: 'title already exists.' });
    }

    const task = await Task.create({ 
      userId: req.user.id,
      title,
      description,
      dueDate,
      priority,
      status });

    res.status(201).json({ message: 'Task created', task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const { status, priority, dueDate } = req.query; 

    const query = { userId: req.user.id };
    if (status) query.status = status;
    if (priority) query.priority = priority;
    if (dueDate) query.dueDate = new Date(dueDate); 

    const tasks = await Task.find(query);
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const taskId  = req.params.id;
    const { status, priority } = req.body;

    const task = await Task.findOne({
      _id: taskId,
      userId: req.user.id 
    });

    if (!task) {
      return res.status(404).json({ message: 'Task not found.' });
    }

    if (status) task.status = status;
    if (priority) task.priority = priority;

    await task.save();

    res.status(200).json({ message: 'Task updated successfully.', task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteTask = async (req, res) => {
  try {
    const  taskId  = req.params.id;

    const task = await Task.findOneAndDelete({ _id: taskId, userId: req.user.id });
    if (!task) {
      return res.status(404).json({ message: 'Task not found.' });
    }

    res.status(200).json({ message: 'Task deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

///////////////////////optional//////////////////////////////////
exports.getTasks_bystatus = async (req, res) => {
  try {
    const tasks = await Task.find({
      userId: req.user.id,
      status: req.query.status,
    });
    res.status(200).json({ tasks });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTasks_pagination = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;  
    const limit = parseInt(req.query.limit) || 10;  

    const tasks = await Task.find({
      userId: req.user.id,
    })

      .skip((page - 1) * limit)  
      .limit(limit);  

    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

