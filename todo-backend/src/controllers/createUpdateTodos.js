const mongoose = require("mongoose");
const TODO = require("../models/todo.model");

const createTodoHandler = async (req, res) => {
    try {
        const { title, description } = req.body;
        await TODO.create({
            title, description
        })
        return res.status(201).json({
            success: true,
            message: "todo added",
            data: title
        })
    } catch (error) {
        console.log("error in create todo");
        return res.status(500).json({
            error: "Internal server error"
        })
    }

}


const updateTodoHandler = async(req, res) => {
    try {
        const { id } = req.params;
        const {title, description} = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                error: "Invalid mongo id"
            })
        }
        // const todo = await TODO.findById(id); //it's an extra db call

        // if (!todo) {
        //     return res.status(404).json({
        //         success: false,
        //         error: "todo not found"
        //     })
        // }
        const updated = await TODO.findByIdAndUpdate(id,    //returns null
            {title, description},
            {new: true, runValidators: true})
        
        if (!updated) {return res.status(400).json({
            success: false,
            error: "todo not found"
        })}
        
        return res.status(201).json({
            success: true,
            message: "Task updated",
            data : updated.title
        })
    } catch (error) {
        console.log("error in updating handler");
        
        return res.status(500).json({
            error: "Internal server error"
        })
    }


}

module.exports = {createTodoHandler, updateTodoHandler};