const pool=require('../../models/db');

let verifyOtp=async(req,res)=>{
    let {email,requestOtp}=req.body;
    let userOtp;
    try {
        userOtp=await pool.query('select * from otp where email=$1',[email]);
        if(userOtp.rows[0].otp==requestOtp){
            res.status(200).json({message:"valid user!"});
            return;
        }
        res.status(400).json({message:"Invalid user!"});
    } catch (error) {
        res.status(400).json({message:"Caught Error!"});
    }
}

module.exports=verifyOtp;
