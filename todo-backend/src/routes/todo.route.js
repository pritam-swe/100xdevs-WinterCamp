const express = require("express");
const router = express.Router();
const TODO = require("../models/todo.model");

router.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to the Notes backend APIs</h1>")
});


router.get("/api/todos", async (req, res) => {
    const tasks = await TODO.find({}).select("title description"-_id);
    res.status(200).json({
        success: true,
        message: "All notes fetched",
        data: tasks
    })
});


module.exports = router;