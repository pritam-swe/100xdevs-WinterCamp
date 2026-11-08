const mongoose = require("mongoose");
const TODO = require("../models/todo.model");

const changeTitleHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const {title} = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                error: "Bad req, invalid mongo id"
            })
        }
        const updatedTodo = await TODO.findByIdAndUpdate(id, 
            { $set: {title} },  //atomic calls
            {new: true, runValidators: true}
        );

        if (!updatedTodo) {
            return res.status(404).json({
                error: "Todo not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "title updated",
            data: updatedTodo.title
        })

    } catch (error) {
        console.log("error in completion toggle");
        return res.status(500).json({
            error: "server error"
        })
    }
}

const toggleCompletionStatus = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                error: "Bad req, invalid mongo id"
            })
        }
        const update = await TODO.findByIdAndUpdate(id, 
            {completed: true}
        )
        if (!update) {
            return res.status(404).json({
                error: "Todo not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Task marked as done",
            data: update
        })

    } catch (error) {
        console.log("error in completion toggle");
        return res.status(500).json({
            error: "server error"
        })
    }
}

module.exports = {changeTitleHandler, toggleCompletionStatus}