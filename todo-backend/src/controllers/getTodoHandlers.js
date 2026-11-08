
const TODO = require("../models/todo.model");
const mongoose = require("mongoose");

const getAllTodoHandler = async (req, res) => {
    try {
        const todos = await TODO.find({}).lean();
        return res.status(200).json({
            success: true,
            message: "All notes fetched",
            data: todos
        })
    } catch (error) {
        console.log("Error in get all todo handler");
        return res.status(500).json({
            success: false,
            error: "internal server error"
        })
    }
}

const getTodoByIdHandler = async (req, res) => {
    try {
        // const id = req.params.id;
        const {id} = req.params //destructuring 
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                error: "Bad request. Invalid mongo id",
                data: null
            })
        }
        const todo = await TODO.findById(id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                error: "Todo not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Todo found",
            data: todo
        })
    } catch (error) {
        console.log("Error in finding by id");  //debugging
        
        return res.status(500).json({ error: "Internal server error" });
    }
}


module.exports = {getAllTodoHandler, getTodoByIdHandler};