const pool=require('../../models/db');

const likePost=async(req,res)=>{
    const {postid,id}=req.body;
    try {
    await pool.query('insert into likes(postid,likedid,userid) values($1,$2,$3)',[postid,id,req.userid]);
        res.status(200).json({message:"post liked!"});
    } catch (error) {
        res.status(401).json({message:'Error in liking the post!'});
    }
}

module.exports=likePost;
