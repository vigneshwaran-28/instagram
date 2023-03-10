const pool=require('../../models/db');

const comments=async(req,res)=>{
    try {
        const {postid,content,replyid,postuserid}=req.body;  
        pool.query('insert into comments(userid,postid,postuserid,content,replyid,time) values($1,$2,$3,$4,$5,now())',[req.userid,postid,postuserid,content,replyid]);
        res.status(200).json({message:"comment added!"});
    } catch (error) {
        res.status(401).json({message:"Error in adding comment!"});
    }
}

module.exports=comments;