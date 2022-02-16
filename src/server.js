import express from "express";
import morgan from "morgan";
import globalRouter from "./Routers/globalRouter";
import userRouter from "./Routers/userRouter";
import videoRouter from "./Routers/videoRouter";
const app=express();
const PORT=9000;

const logger=morgan("dev");
app.set("view engine","pug") //퍼그를 view엔진으로 설정
app.set("views",process.cwd()+"/src/views") //view의 경로를 src안으로 변경
app.use(logger)


app.use("/",globalRouter);
app.use("/users",userRouter);
app.use("/video",videoRouter);

const gossipMiddleware = (req,res,next)=>{ //next 값이 있으면 미들웨어라 부름
    
    console.log(`some one is going to : ${req.url} , URL method : ${req.method}`);
    next();
};

app.use(gossipMiddleware);//순서 중요 top to bottom


const listenServer=() =>
    console.log(`✅server listening on port http://localhost:${PORT}  `);
app.listen(PORT,listenServer);
