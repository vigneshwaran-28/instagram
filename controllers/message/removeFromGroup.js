const pool = require("../../models/db");

const removeFromGroup = async (req, res) => {
  try {
    let { frndsId, groupId } = req.body;
    frndsId=frndsId.split(',');
    let values='';
    for(let i=1;i<=frndsId.length;i++){
      values+='$'+(i+1)+(i!=frndsId.length?',':'');
    }
    let q='delete from groupmembers where groupid=$1 and userid in ('+values+')';
    // console.log(q);
    await pool.query(q,[groupId,...frndsId]);
    res.status(200).json({ message: "Friends removed successfully!" });
  } catch (error) {
    res.status(400).json({ message: "Error in removing the friend!" });
  }
};

module.exports = removeFromGroup;
