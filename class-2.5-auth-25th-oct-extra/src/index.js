import {app} from "./app";
import "dotenv/config";
import { connectDB } from "./db";
const DB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;
const port = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectDB(`${DB_URI}/${DB_NAME}`);
        app.listen(port || 3001, () => {console.log(`Running on https://localhost:${port}`)});
    } catch (error) {
        console.log("Error while starting the server" + error)   
    }
}

startServer()
