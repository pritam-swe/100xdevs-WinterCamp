const mongoose = require("mongoose");
require("dotenv").config()
const DB_NAME = "TodoApp"
const uri = process.env.MONGODB_URI;

async function connectDB() {
    try {
        await mongoose.connect(`${uri}/${DB_NAME}`);
        console.log(`Connected to DB Successfully at host ${mongoose.Collection.host}`);
        console.log(`DB Name ${mongoose.Collection.name}`);
    } catch(err) {
        console.log("Not connected to DB ", err);
        process.exit(1) //Our server should reject all requests if the database is not connected.
    }
}

module.exports = connectDB;