const {Client}=require('@elastic/elasticsearch');
const pool=require('../models/db');

const client=new Client({node:"http://localhost:9200"});

const index = {
  index: "users"
};

client.indices.create(index,(err,response)=>{
    if(err)console.log("Caught error!");
    else console.log(`response received ${response.body.index}`);
});
