import express from "express";
import authRouter from "./routes/auth.route";
import { courseRouter } from "./routes/course.route";
import { profileRouter } from "./routes/profile.route";
export const app = express();
app.use(express.json());


app.use("/api/v1/auth/", authRouter);
app.use("/api/v1/course/", courseRouter);

app.use("/me", profileRouter)




