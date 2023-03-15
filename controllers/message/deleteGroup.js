const pool=require('../../models/db');

const deleteGroup=async(req,res)=>{
try {
    await pool.query('delete from groups where groupid=$1',[req.body.groupid]);
    await pool.query('delete from groupmembers where groupid=$1',[req.body.groupid]);
    res.status(200).json({message:"Groups deleted Succesfully!"});
} catch (error) {
    res.status(400).json({message:"Error in deleting the Group!"});
}
}

module.exports=deleteGroup;