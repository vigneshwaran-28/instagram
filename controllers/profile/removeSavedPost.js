const pool=require('../../models/db');

const removeSavedPost=async(req,res)=>{
    try {
        await pool.query('delete from savedpost where userid=$1 and postid=$2',[req.userid,req.body.postid]);
        res.status(200).json({message:"deleted saved post successfully!"});
    } catch (error) {
        res.status(400).json({message:"Error in deleting the saved Post!"});
    }
}

module.exports=removeSavedPost;
