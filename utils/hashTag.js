const pool=require('../models/db');

let hashTag=(comment)=>{
    comment="he;; #fun #HEALTH";
    let hashTagList=comment.match(/#\w*/g);
    console.log(hashTagList);
}
hashTag();
module.exports=hashTag;