import jwt from "jsonwebtoken";
import { signupSchema, loginSchema } from "../types/userShape";
import { User } from "../models/user.model";
import { validateSchema } from "../middlewares/validate.schema";

export const signupHandler = async (req, res) =>{
    const {name, email, password} = req.body;

    try {
        const existingUser = await User.findOne({email: email});
        if (existingUser) {
            return res.status(409).json({
                error: "email already registered"
            })
        }

        const passwordHash = await Bun.password.hash(password);
        const user = await User.create({
            name, email, passwordHash,
            role: "student",
        })

        return res.status(201).json({
            message: "Account created",
            userId: user._id
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
};


export const loginHandler = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if (!user) {
            return res.status(404).json({
                error: "Invalid email or password"
            });
        }
        
        const passwordMatches = await Bun.password.verify(password, user.passwordHash);
        
        if (!passwordMatches) {
            return res.status(404).json({
                error: "Invalid email or password"
            });
        };

        const token = jwt.sign(
            {sub: user.id},
            process.env.JWT_SECRET,
            {expiresIn: "1d", algorithm: "HS256"}
        )

        return res.status(200).json({
            name: user.name, email, token
        })
    } catch (error) {
        return res.status(500).json({ error: "Could not sign in" + error });
    }
}