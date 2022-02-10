import express from "express";
const app=express();
const PORT=9000;

app.get("/",(requests,response)=>{
    return response.send("i still love you")//텍스트 보내줌
})
app.get("/end",(requests,response)=>{
    return response.end()//리퀘스트 종료
})
const listenServer=() =>
    console.log(`✅server listening on port http://localhost:${PORT}  `);
app.listen(PORT,listenServer);
