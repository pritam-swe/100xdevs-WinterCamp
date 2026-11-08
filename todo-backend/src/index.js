const express = require("express");
require("dotenv").config();
const port = process.env.PORT;
const connectDB = require("./db")
const todoRouter = require("./routes/todo.route");
const homeRouter = require("./routes/home.route")

const app = express();

app.use(express.json()) //global middleware

app.use("/", homeRouter);   //res.send
app.use("/api/v1/todos", todoRouter)


async function startServer(){
    try{
        await connectDB();
        app.listen(port, () => {console.log(`Server Running on https://localhost:${port}`)})
    } catch(err){

    }
}

startServer()