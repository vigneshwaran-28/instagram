const {sign}=require('jsonwebtoken');
require('dotenv').config({path:'../../.env'});

const createTokens=(data)=>{
    let res= sign(data,process.env.SECRET,{
        expiresIn:"10d"
    }); 
    return res;
};
module.exports=createTokens;
