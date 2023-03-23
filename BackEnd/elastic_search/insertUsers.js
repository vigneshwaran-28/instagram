const { Client } = require("@elastic/elasticsearch");
const pool = require("../models/db");

const client = new Client({ node: "http://localhost:9200" });

const index = {
  index: "users",
};
const insertUsers = async (result,firstdata ,fullname, username, hashPass, dob) => {
  try {
    let users = {
        result:firstdata,
        fullname:fullname,
        username:username,
        hashPass:hashPass,
        dob:dob
    };
      await client.index({
        index: index.index,
        body: users
      });
  } catch (error) {
    console.log("Error caught!");
  }
};

module.exports=insertUsers;

