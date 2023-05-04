
const express = require("express");
const route = express.Router();
const closeFriendsFav=require("./closeFriendsFav");
const elastic_search=require("./elasticSearch");
const emoji=require("./emoji");
const followUnfollow=require("./follow");
const helperFunction=require("./helperFunction");
const history=require("./history");
const homePage=require("./homePage");
const message=require("./message");
const middleware=require("./middleware");
const music=require("./music");
const password=require("./password");
const post=require("./posts");
const profile=require("./profile");
const profilePic=require("./profilePic");
const signin=require("./signin");
const signup=require("./signup");
const story=require("./story");
const suggestion=require("./suggestion");

let arr=[...closeFriendsFav,...elastic_search,...emoji,...followUnfollow,...helperFunction,...history,...homePage,...message,...middleware,...music,...password,...post,...profile,...profilePic,...signin,...signup,...story,...suggestion];

arr.map((e) => {
  if (e.type == "post")
    route.post(e.endPoint, e.middleware ? [...e.middleware] : [], e.callBack);
  else if (e.type == "get")
    route.get(e.endPoint, e.middleware ? [...e.middleware] : [], e.callBack);
  else if (e.type == "put")
    route.put(e.endPoint, e.middleware ? [...e.middleware] : [], e.callBack);
  else if (e.type == "delete")
    route.delete(e.endPoint, e.middleware ? [...e.middleware] : [], e.callBack);
});

module.exports = route;

