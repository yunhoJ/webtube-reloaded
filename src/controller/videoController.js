export const trending = (req,res) => res.send("home page vidoe");
export const search =(req,res)=> res.send("video search")
export const see = (req,res) =>{
    console.log(req.params);
    return res.send(`see video #${req.params.id}`);
}
export const deleteVideo = (req,res)=> {
    console.log(req.params);
    return res.send("Delete video");
}
export const upload =(req,res) => res.send("upload video");
export const edit=(req,res)=>{
    console.log(req.params);
    return res.send("edit Video");
} 