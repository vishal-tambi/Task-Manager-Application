const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()


//setting the middleware
app.use(express.json())
//middleware for using the external files
app.use(express.static('./public'))




//routes

app.use('/api/v1/tasks', tasks)

//get, patch, delete (ID K SATH AAYENGE)





const port = 4000;
//invoke connectdb and only if we are successful then we are going to start the server 
const nowRunTheServer = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Your server is listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

nowRunTheServer()