const pool=require('../../models/db');

const unLikePost=async(req,res)=>{
    const {postid,id}=req.body;
    try {
    await pool.query('delete from likes where postid=$1 and likedid=$2',[postid,id]);
        res.status(200).json({message:"post like removed!"});
    } catch (error) {
        res.status(401).json({message:'Error in unliking the post!'});
    }
}

module.exports=unLikePost;
