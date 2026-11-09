import mongoose from "mongoose";

export const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log(`Connected to DB on Host: ${mongoose.connection.host}, DB Name: ${mongoose.connection.name}`);
    } catch (error) {
        console.log("Not connected to db" + error);
        process.exit(1)
    }
}