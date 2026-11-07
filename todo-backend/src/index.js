const express = require("express");
require("dotenv").config();
const port = process.env.PORT;
const connectDB = require("./db")
const todoRouter = require("./routes/todo.route");

const app = express();

app.use(express.json()) //global middleware

app.use("/", todoRouter)
app.use("/", todoRouter)

async function startServer(){
    try{
        await connectDB();
        app.listen(port, () => {console.log(`Running on localhost:${port}`)})
    } catch(err){

    }
}

startServer()