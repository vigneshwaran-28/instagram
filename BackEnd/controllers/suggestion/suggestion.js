const pool=require('../../models/db');

const suggestion=async(req,res)=>{

    try {
        let suggestedId=await pool.query("select distinct followingid from follow where followerid in (select followerid from follow where followingid=$1)",[req.userid]);
        res.status(200).json({suggestion:suggestedId.rows});
    } catch (error) {
        res.status(400).json({error:"error in sending the suggested id!"});
    }

}

module.exports=suggestion;