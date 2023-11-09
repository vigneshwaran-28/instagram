const pool = require("../../models/db");

const deleteChat = async (req, res) => {
  try {
    await pool.query(
      "delete from message where (userid=$1 and receiverid=$2) or (userid=$2 and receiverid=$1) and grpchat=false",
      [req.userid, req.body.receiverid]
    );
    res.status(200).json({ message: "Chat deleted Succesfully!" });
  } catch (error) {
    res.status(400).json({ message: "Error in deleting the chat!" });
  }
};

module.exports = deleteChat;
