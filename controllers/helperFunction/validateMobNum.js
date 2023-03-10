let validateMobNum = (req,res) => {
    let {num}=req.body;
    var ph = new RegExp(/^[6789]\d{9}$/);
    if(ph.test(num))
    res.status(200).json({mesage:"valid mobile number!"});
    else
    res.status(400).json({message:"Invalid mobile Number!"});
};

module.exports=validateMobNum;