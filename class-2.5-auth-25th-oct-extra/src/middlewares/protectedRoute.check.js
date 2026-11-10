import jwt from "jsonwebtoken";
import { User } from "../models/user.model";
export const protectedRoute = () => {
    return async (req, res, next) => {
        const token = req.headers.authorization?.split(" ")[1] //Bearer <token>
        if (!token) {
            return res.status(403).json({
                error: "Unauthorized or invalid token"
            })
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            const user = await User.findById(decoded.sub).select("name email");
            req.user.name = user.name;
            req.user.email = user.email;
            next();
        } catch (error) {
            return res.status(401).json({
                error: "Invalid or expired token"
            })
    }
}}