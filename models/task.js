const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    //adding validation to the schema
    name:{
        type:String,
        required:[true, 'You must provied the name ediot'],
        trim:true,  //basically all teh white spaces is going to wip out
        maxlength:[20, 'Are you belong to tamil family dude!!😂']
    },
    completed:{
        type:Boolean,
        default:false,
    },
})






module.exports = mongoose.model('Task', TaskSchema) 