const pool=require('../../models/db');
const createToken=require('../../utils/jwt/createToken');

let verifyOtp=async(req,res)=>{
    let {email,requestOtp}=req.body;
    let userOtp;
    try {
        userOtp=await pool.query('select otp from otp where email=$1',[email]);
        if(userOtp.rows[0].otp==requestOtp){
            await pool.query("delete from otp where email=$1",[email]);
            let id = await pool.query(
               "select userid from userdetails where email=$1",
               [email]
             );
             let token = createToken({ userid: id.rows[0].userid });
             await pool.query(
               "update userdetails set token=$1 where email=$2",
               [token, email]
             );
            res.status(200).json({ message: "valid user!" });
            return;
        }
        res.status(400).json({message:"Invalid user!"});
    } catch (error) {
        res.status(400).json({message:"Caught Error!"});
    }
}

module.exports=verifyOtp;
