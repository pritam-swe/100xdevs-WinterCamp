const express = require("express");
const router = express.Router();
const TODO = require("../models/todo.model");
const {getAllTodoHandler, getTodoByIdHandler} = require("../controllers/getTodoHandlers");
const { validateInput } = require("../middlewares/validation.middleware");

const {createTodoHandler, updateTodoHandler} = require("../controllers/createUpdateTodos")

const { createTodoSchema, updateTodoSchema, updateTitleSchema } = require("../schemas/todo.schema");

const {changeTitleHandler, toggleCompletionStatus} = require("../controllers/patchHandler")

const {deleteTodoHandler} = require("../controllers/deleteHandler");

router.get("/", getAllTodoHandler);
router.get("/:id", getTodoByIdHandler);

router.post("/", validateInput(createTodoSchema) ,createTodoHandler)
router.put("/:id", validateInput(updateTodoSchema) ,updateTodoHandler);

router.patch("/:id", validateInput(updateTitleSchema), changeTitleHandler)
router.patch("/:id/done", toggleCompletionStatus);


router.delete("/:id", deleteTodoHandler)
module.exports = router;