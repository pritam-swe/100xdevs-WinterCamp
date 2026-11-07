const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            minLength: 3,
            maxLength: 50
        },
        description: {
            type: String,
            default: "",
            maxLength: 300
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    {timestamps: true}
)

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;