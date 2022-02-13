import express from "express";
import { watch,remove } from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get("/delete",remove)
videoRouter.get("/watch",watch);
export default videoRouter