//zod validation
//what can hit out endpoints. the gatekeeper check
const { z } = require("zod");

const createTodoSchema = z.object({
    title: z.string().trim().min(3).max(50),
    description: z.string().trim().max(300).optional()
});


const updateTodoSchema = z.object({
    title: z.string().trim().min(3).max(50),
    description: z.string().trim().min(1)   //required for put
})

module.exports = {createTodoSchema, updateTodoSchema};
