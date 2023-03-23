const pool = require("../../models/db");

const storeChat = async (req, res) => {
  const { receiverid, content, grpchat } = req.body;
  try {
    await pool.query(
      "insert into message(userid,receiverid,content,time,grpchat) values($1,$2,$3,now(),$4)",
      [req.userid, receiverid, content, grpchat]
    );
    res.status(200).json({
      message: "message stored successfully!",
    });
  } catch (error) {
    res.status(400).json({ message: "Error in stroing message!" });
  }
};

module.exports = storeChat;
