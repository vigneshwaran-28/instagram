const pool=require('../../models/db');

const deletePost=async(req,res)=>{
    try {
        await pool.query('delete from post where postid =$1',[req.body.postid])
        res.status(200).json({message:"Post deleted Successfully!"});
    } catch (error) {
        res.status(400).json({message:"Error in deleting the post!"});
    }
}

module.exports=deletePost;