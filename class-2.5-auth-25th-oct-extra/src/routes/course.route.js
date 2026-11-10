import {Router} from "express";
import { protectedRoute } from "../middlewares/protectedRoute.check";
import mongoose from "mongoose";
import { User } from "../models/user.model";

export const courseRouter = Router();

courseRouter.get("/getallcourses", protectedRoute(), async (req, res) => {
    try {
        // const data = req.user;
        // const id = data.sub;
        // const user = await User.findById(id).select("name email")
        res.status(200).json({
            message: `Here is all of your courses ${req.user.name}`,
            data: req.user,
            name: req.user.name
        })
    } catch (error) {
        return res.status(500).json({
            error: "Internal server error" + error
        })
    }
}) 

