import { Router } from "express";
import { postUser } from "../controllers/userController";

const router = Router();

router.post("/", postUser);

export { router as userRouter };
