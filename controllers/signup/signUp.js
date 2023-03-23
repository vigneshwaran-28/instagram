const pool = require("../../models/db");
const bcrypt = require("bcrypt");
const createTokens = require("../../utils/jwt/createToken");
const insertUser=require('../../elastic_search/insertUsers');

let signUp = async (req, res) => {
  const { firstdata, fullname, username, password, dob } = req.body;
  let result = firstdata.replace(/\d/g, "");
  result = result ? "email" : "mobnum";
  let hashPass = await bcrypt.hash(password, 5);
  try {
    await pool.query(
      "insert into userdetails(" +
        result +
        ",fullname,username,password,dob,time) values($1,$2,$3,$4,$5,now())",
      [firstdata, fullname, username, hashPass, dob]
    );
    // console.log("hello");
    let userid = await pool.query(
      "select userid from userdetails where username=$1",
      [username]
    );
      insertUser(result,firstdata,fullname,username,hashPass,dob);
    let token = createTokens({ userid: userid.rows[0].userid });
    req.userid = userid.rows[0].userid;
    await pool.query("update userdetails set token=$1 where userid=$2", [
      token,
      req.userid,
    ]);
    res.status(200).json({ message: "Data inserted Successfully!" });
  } catch (error) {
    res.status(400).json({ message: "Error caught while inserting into db!" });
  }
};

module.exports = signUp;
