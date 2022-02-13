import express from "express";
import {remove,edit,logout,see} from "../controller/userController";

const userRouter = express.Router();
userRouter.get(":id",see);
userRouter.get("/logout",logout)
userRouter.get("/remove",remove)
userRouter.get("/edit",edit);
export default userRouter;