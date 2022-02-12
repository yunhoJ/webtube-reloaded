import express from "express";
import { send } from "express/lib/response";
const app=express();
const PORT=9000;

const gossipMiddleware = (req,res,next)=>{ //next 값이 있으면 미들웨어라 부름
    
    console.log(`some one is going to : ${req.url} , URL method : ${req.method}`);
    next();
};

const privateMiddleware = (req,res,next)=>{
    const url=req.url;
    if (url==="/protected"){ // 형까지 같을때
        return res.send("<h1>Not allowed</h1>");
    }
    next();
};

const handleHome=(req,res)=>{ //컨트롤러
    return res.send("i still love you");//텍스트 보내줌
};

//글로벌 미들웨어
app.use(gossipMiddleware);//순서 중요 top to bottom
app.use(privateMiddleware);
app.get("/",handleHome);


app.get("/end",(requests,response)=>{
    return response.end()//리퀘스트 종료
})
const listenServer=() =>
    console.log(`✅server listening on port http://localhost:${PORT}  `);
app.listen(PORT,listenServer);
