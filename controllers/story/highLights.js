const pool=require('../../models/db');

const highLights=(req,res)=>{
    // console.log(req.userid,req.body.storyid,req.body.caption,new Date());
    pool.query('insert into highlights values($1,$2,$3,$4)',[req.userid,req.body.storyid,req.body.caption,new Date()])
    .then(()=>res.status(200).json({message:"Added to highLights Successfully!"}))
    .catch(()=>res.status(401).json({message:"Error in Adding to highLights !"}))

}

module.exports=highLights;
