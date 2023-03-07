const pool = require("../../models/db");
const bcrypt = require("bcrypt");
const validateEmail=require('../helperFunction/validateEmail');
const validateMobNum=require('../helperFunction/validateMobNum');
const checkExists=require('../helperFunction/checkExistInDb');

let signup = async (req, res) => {
  const { firstdata, fullname, username, password} = req.body;
  let result = firstdata.replace(/\d/g, "");
  if (await checkExists(firstdata, result,username)) {
    res.status(400).json({ message: "user already exists!" });
    return;
  } else {
    if (result) {
      if (validateEmail(firstdata)) result = "email";      
      else {
        res.status(400).json({ message: "Invalid email data !" });
        return;
      }
    } else {
      if (validateMobNum(firstdata)) result = "mobnum";
      else {
        res.status(400).json({ message: "Invalid mobile Number data !" });
        return;
      }
    }
  }
  res.status(200).json({message:"valid user"});
};

module.exports = signup;
