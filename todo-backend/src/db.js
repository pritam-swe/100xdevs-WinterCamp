const mongoose = require("mongoose");
require("dotenv").config()

const uri = process.env.MONGODB_URI;

async function connectDB() {
    try {
        await mongoose.connect(uri);
        console.log(`Connected to DB Successfully`);
    } catch(err) {
        console.log("Not connected to DB", err);
        process.exit(1) //Our server should reject all requests if the database is not connected.
    }
}

module.exports = connectDB;