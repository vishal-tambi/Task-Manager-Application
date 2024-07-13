const Task = require('../models/task')



//getting all the task
const getAllTasks = async (req,res)=>{
    try {
        const tasks = await Task.find({}) //letting it empty object cause it will give me all the items
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
}


//creating the task
const createTask = async (req, res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
        
    } catch (error) {
        res.status(500).json({msg:error})
    }
}



//getting a single task
const getTask = async (req, res)=>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`There is no task with the id ${taskID}`})
        }
        res.status(200).json({task}) //if it is successful then it is going to return the task
    } catch (error) {
        res.status(500).json({msg:error}) //this is called teh generic error
    }
}


// For updating the task
const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate(
            { _id: taskID },
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );
        if (!task) {
            return res.status(404).json({ msg: `There is no task with the id ${taskID}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}





//for deleting the task
const deleteTask = async (req, res)=>{
   try {
     const {id:taskID} = req.params
     const  task = await Task.findOneAndDelete({_id:taskID})
     if(!task){
        return res.status(404).json({msg:`There is no task with the id ${taskID}`})
    }
    res.status(200).json({task})
    // res.status(200).json({task:null, status:"success"})
   } catch (error) {
    res.status(500).json({msg:error})
   }
}

module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask}