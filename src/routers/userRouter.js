import express from "express";
import { Id, home, edit } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", home);
userRouter.get("/:id", Id);
userRouter.get("/edit-profile", edit);

export default userRouter;
