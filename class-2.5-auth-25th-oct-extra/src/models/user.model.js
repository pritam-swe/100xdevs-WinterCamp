import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength: 2},
    email: {type: String, required: true, unique: true},
    passwordHash: {type: String, required: true},

    role: {
        type: String,
        enum: ["student", "admin", "teacher"],      //possible options
        default: "student"
    }, 
});


export const User = mongoose.model("User", userSchema);