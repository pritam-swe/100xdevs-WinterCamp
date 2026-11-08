const express = require("express");
const router = express.Router();
const {homeHandler, aboutHandler} = require("../controllers/homeHandlers")

router.get("/", homeHandler)
router.get("/about", aboutHandler)



module.exports = router;