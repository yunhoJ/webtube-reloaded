import express from "express";
const app=express();

const port=9000;
const listenServer=() =>console.log(`✅server listening on port http://localhost:${port}`)
app.listen(port,listenServer)
