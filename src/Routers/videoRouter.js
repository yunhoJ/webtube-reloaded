import express from "express";
const videoRouter = express.Router();
const handelwatch = (req,res)=> res.send("watch video");
const handleDelete = (req,res) => res.send("video Delete");
videoRouter.get("/delete",handleDelete)
videoRouter.get("/watch",handelwatch);
export default videoRouter