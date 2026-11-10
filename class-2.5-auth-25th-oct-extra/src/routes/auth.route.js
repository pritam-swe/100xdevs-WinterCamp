import { Router } from "express";
import { signupSchema, loginSchema } from "../types/userShape";
import { validateSchema } from "../middlewares/validate.schema";
import { signupHandler, loginHandler } from "../controllers/auth";

const router = Router();

router.post("/signup", validateSchema(signupSchema), signupHandler)
router.post("/login", validateSchema(loginSchema), loginHandler)

export default router;