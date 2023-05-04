const follow = require("../controllers/follow/follow");
const unfollow = require("../controllers/follow/unfollow");
const verifyToken = require("../middleware/verifyToken");
const friendsRequest = require("../controllers/follow/friendsRequest");
const removeRequest = require("../controllers/follow/removeRequest");
const getFollowers = require("../controllers/follow/getFollowers");
const getFollowing = require("../controllers/follow/getFollowing");


let followUnfollow = [
  {
    type: "post",
    endPoint: "/follow",
    middleware: [verifyToken],
    callBack: follow,
  },
  {
    type: "delete",
    endPoint: "/follow",
    middleware: [verifyToken],
    callBack: unfollow,
  },

  {
    type: "post",
    endPoint: "/friendsRequest",
    middleware: [verifyToken],
    callBack: friendsRequest,
  },
  {
    type: "delete",
    endPoint: "/friendsRequest",
    middleware: [verifyToken],
    callBack: removeRequest,
  },

  {
    type: "get",
    endPoint: "/getFollowers",
    middleware: [verifyToken],
    callBack: getFollowers,
  },
  {
    type: "get",
    endPoint: "/getFollowing",
    middleware: [verifyToken],
    callBack: getFollowing,
  },
];


module.exports=followUnfollow;
