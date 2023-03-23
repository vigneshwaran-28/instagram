const pool = require("../../models/db");

let checkExists = (req, res) => {
  const { firstdata, username } = req.body;
  let result = firstdata.replace(/\d/g, "");
  if (checkExitStatus(firstdata, result, username))
    res.status(400).json({ message: "user already exists!" });
  else res.status(200).json({ message: "user does not exists!" });
};

let checkExitStatus = async (data, resultData, username) => {
  let checkStatus;
  checkStatus = await pool.query(
    "select * from userdetails where username=$1",
    [username]
  );
  if (checkStatus.rows[0]) return true;
  if (resultData) {
    checkStatus = await pool.query("select * from userdetails where email=$1", [
      data,
    ]);
    if (checkStatus.rows[0]) {
      return true;
    }
  } else {
    checkStatus = await pool.query(
      "select * from userdetails where mobnum=$1",
      [data]
    );
    if (checkStatus.rows[0]) return true;
  }

  return false;
};
module.exports = checkExists;
