let pool = require("../../models/db");

let resetPassword=async(req,res)=>{
    let {reqEmail,reqPass,reqConfirmPass}=req.body;
    if(reqPass!=reqConfirmPass){
        res.status(400).json({message:"Password does not match!"});
        return;
    }
    try {
        await pool.query('update userdetails set password=$1 where email=$2',[reqPass,reqEmail]);
        await pool.query('delete from otp where email=$1',[reqEmail]);
        res.status(200).json({message:"password updated successfully!"});
    } catch (error) {
        res.status(400).json({message:"Error!"});
    }
};

module.exports=resetPassword;
