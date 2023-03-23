const { Client } = require("@elastic/elasticsearch");
const pool = require("../models/db");

const client = new Client({ node: "http://localhost:9200" });

const getUsers = async(req, res) => {
  try {
    const index = {
      index: "users",
    };
    const q = {
      fullname: req.body.fullname,
    };
    const response=await client.search({
        index:index.index,
        body:{
            query:{
                fuzzy:q
        }
    }});
    res.status(200).json({users:response.hits.hits});
  } catch (error) {
    res.status(400).json({error:"error in retreiving the data!"});
  }
};

module.exports=getUsers;
