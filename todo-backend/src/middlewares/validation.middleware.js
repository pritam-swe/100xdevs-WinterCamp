const { z } = require("zod");


const validateInput = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: result.error.issues.map((issue) => ({
                    field: issue.path.join("."),
                    error: issue.message
                })),
                data: null
            })
        }
        req.body = result.data;
        next();
    }
}

module.exports = {validateInput};