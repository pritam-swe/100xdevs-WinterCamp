import {Router} from "express";
import { protectedRoute } from "../middlewares/protectedRoute.check";

export const profileRouter = Router();

profileRouter.get("/", protectedRoute(), (req, res) => {
    const name = req.user.name;
    res.send(`<h1>Hello, ${name} This is your dashboard page</h1>`)
})