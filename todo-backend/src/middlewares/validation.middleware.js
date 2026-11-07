const { z } = require("zod");
const {createTodoSchema, updateTodoSchema} = require("../schemas/todo.schema");


const validateInput = (schema) => {
    return (req, res, next) => {
        const {title, description} = req.body;
        const result = schema.safeParse({title, description});

        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: result.error.issues.map((issue) => {
                    field: issue.path.join(".");
                    error: issue.error.message
                }),
                data: null
            })
        }
        req.body = result.data;
    }

    next();
}

module.exports = validateInput;