let pool = require("../../models/db");
const bcrypt = require("bcrypt");

let resetPassword=async(req,res)=>{
    let {reqEmail,reqPass,reqConfirmPass}=req.body;
    if(reqPass!=reqConfirmPass){
        res.status(400).json({message:"Password does not match!"});
        return;
    }
    try {
  let hashPass = await bcrypt.hash(reqPass, 5);
        await pool.query('update userdetails set password=$1 where email=$2',[hashPass,reqEmail]);
        res.status(200).json({message:"password updated successfully!"});
    } catch (error) {
        res.status(400).json({message:"Error!"});
    }
};

module.exports=resetPassword;
