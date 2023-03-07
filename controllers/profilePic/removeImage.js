const pool=require('../../models/db');

const removeImage=async(req,res)=>{
    try {
        await pool.query('delete from profile where userid=$1',[req.userid]);
        res.status(200).json({message:"profile removed successfully!"});
    } catch (error) {
        res.status(401).json({message:"Error in removing profile!"});
        
    }
}

module.exports=removeImage;

