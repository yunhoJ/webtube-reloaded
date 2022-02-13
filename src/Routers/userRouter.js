import express from "express";
const userRouter = express.Router();
const handleEdit = (req,res) =>res.send("edituser");
const handleDelete = (req,res) => res.send("user Delete");
userRouter.get("/delete",handleDelete)
userRouter.get("/edit",handleEdit);
export default userRouter;