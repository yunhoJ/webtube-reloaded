import express from "express";
const app=express();

const PORT=9000;
const listenServer=() =>
    console.log(`✅server listening on port http://localhost:${PORT} `)
app.listen(PORT,listenServer)
