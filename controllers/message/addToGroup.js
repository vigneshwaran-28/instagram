const pool=require('../../models/db');

const addToGroup=async(req,res)=>{
    try {
        let {frndsId,groupId}=req.body;
        frndsId=frndsId.split(',');
        let quesMark='';
        let q='values';
    for(let i=1;i<=frndsId.length;i++){
        q+=((i%2==1)?'(':'')+'$'+i+((i%2!=0)?',':'')+((i%2==0)?')':'')+((i%2==0 && i!=frndsId.length)?',':'');
    }

    let finalArr=[];
    for (let i = 1; i <= frndsId.length; i++) {
        finalArr.push(groupId,frndsId[i-1]);
    }
// console.log(finalArr);
    let que='insert into groupmembers(groupid,userid) '+q;
    console.log(que);    
        await pool.query(que,[...finalArr]);
        res.status(200).json({message:"Friends added successfully!"});
    } catch (error) {
        res.status(400).json({message:"Error in adding the friend!"});
    }
} 

module.exports=addToGroup;