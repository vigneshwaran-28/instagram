
let getDob=(req,res)=>{
    let {dob}=req.body;
    let currentYear=Date.now().getFullYear();
    let userBirthYear=new Date(dob).getFullYear();
    if(currentYear-userBirthYear>17){
        res.status(200).json({message:"valid user!"});
        return;
    }
    res.status(400).json({message:"Invalid user!"});
}

module.exports=getDob;