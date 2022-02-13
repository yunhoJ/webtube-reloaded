import express from "express";
import {remove,edit} from "../controller/userController";

const userRouter = express.Router();

userRouter.get("/delete",remove)
userRouter.get("/edit",edit);
export default userRouter;