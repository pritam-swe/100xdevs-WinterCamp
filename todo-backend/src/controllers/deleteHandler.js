
const TODO = require("../models/todo.model");
const mongoose = require("mongoose");

const deleteTodoHandler = async (req, res) => {
    try {
        const {id} = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                error: "Bad request. Invalid mongo id",
                data: null
            })
        }
        const deleted = await TODO.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({
                success: false,
                error: "Todo not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Todo deleted",
            data: deleted
        })
    } catch (error) {
        console.log("Error in finding by id");  //debugging

        return res.status(500).json({ error: "Internal server error" });
    }
}


module.exports = {deleteTodoHandler}