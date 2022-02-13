import express from "express";
import morgan from "morgan";
const app=express();
const PORT=9000;

const logger=morgan("dev");
app.use(logger)
const globalRouter = express.Router();
const handleHome =(req,res)=> res.send("Home");
const userRouter = express.Router();
const handleEdit = (req,res) =>res.send("edituser");
const videoRouter = express.Router();
const handelwatch = (req,res)=> res.send("watch video");

app.use("/",globalRouter);
app.use("/users",userRouter);
app.use("/video",videoRouter);
globalRouter.get("/",handleHome);
userRouter.get("/edit",handleEdit);
videoRouter.get("/watch",handelwatch);

const gossipMiddleware = (req,res,next)=>{ //next 값이 있으면 미들웨어라 부름
    
    console.log(`some one is going to : ${req.url} , URL method : ${req.method}`);
    next();
};

app.use(gossipMiddleware);//순서 중요 top to bottom





const listenServer=() =>
    console.log(`✅server listening on port http://localhost:${PORT}  `);
app.listen(PORT,listenServer);
