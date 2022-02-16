export const trending = (req,res) => res.render("home");
export const search =(req,res)=> res.send("video search")
export const see = (req,res) =>{
    console.log(req.params);
    res.render("watch")
}
export const deleteVideo = (req,res)=> {
    console.log(req.params);
    return res.send("Delete video");
}
export const upload =(req,res) => res.send("upload video");
export const edit=(req,res)=>res.render("edit")