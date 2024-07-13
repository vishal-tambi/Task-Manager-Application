const mongoose = require('mongoose')
// const connectString = 'mongodb+srv://vishaltambi:AINgr6QNn1hPdFUi@cluster0.x00vkty.mongodb.net/TaskManager?retryWrites=true&w=majority&appName=Cluster0'


const connectDB = (url)=>{
    return mongoose.connect(url, {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}


module.exports = connectDB


// .then(()=> //this is the promise that we are setrtign up for the connection checking
// console.log('Congratulation now you are connected to the DB...'))
// .catch((err)=>console.log(err))
