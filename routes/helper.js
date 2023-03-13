const signUp = require("../controllers/signup/signUp");
const getDob = require("../controllers/helperFunction/signupDob");
const getOtp = require("../controllers/helperFunction/otpGeneration");
const verifyOtp = require("../controllers/helperFunction/verifyOtp");
const checkExists = require("../controllers/helperFunction/checkExistInDb");
const signin = require("../controllers/signin/signin");
const forgotPassword = require("../controllers/forgotPassword/forgotPassword");
const resetPassword = require("../controllers/forgotPassword/resetPassword");
const verifyToken = require("../middleware/verifyToken");
const follow = require("../controllers/follow/follow");
const unfollow = require("../controllers/follow/unfollow");
const imgUpload = require("../controllers/profilePic/imageUpload");
const removeImage = require("../controllers/profilePic/removeImage");
const addCloseFriends = require("../controllers/closeFriends/AddcloseFriend");
const removeCloseFriend = require("../controllers/closeFriends/removeCloseFriend");
const addFavourite = require("../controllers/favourites/addFavourite");
const removeFavourite = require("../controllers/favourites/removeFavourite");
const signout = require("../controllers/signin/signout");
const imgpost = require("../controllers/posts/imgPost");
const arrImgPost = require("../controllers/posts/arrImgPost");
const postVideo = require("../controllers/posts/postVideo");
const arrPostVideo = require("../controllers/posts/arrPostVideo");
const postStory = require("../controllers/story/story");
const highLights = require("../controllers/story/highLights");
const postlikes = require("../controllers/posts/postlikes");
const removePostLike = require("../controllers/posts/postUnLike");
const comments = require("../controllers/posts/comments");
const updateBio = require("../controllers/profile/updateBio");
const profileInfo = require("../controllers/profile/profileInfo");
const savedpost = require("../controllers/profile/savedPost");
const friendsRequest = require("../controllers/follow/friendsRequest");
const removeRequest = require("../controllers/follow/removeRequest");
const accessChat=require('../controllers/message/accessChat');
const createGroup=require('../controllers/message/createGroupChat');
const addToGroups=require('../controllers/message/addToGroup');

let arr = [
  {
    type: "post",
    endPoint: "/signup",
    callBack: signUp,
  },
  {
    type: "get",
    endPoint: "/getdob",
    callBack: getDob,
  },
  {
    type: "get",
    endPoint: "/checkExists",
    callBack: checkExists,
  },
  {
    type: "get",
    endPoint: "/getotp",
    callBack: getOtp,
  },
  {
    type: "get",
    endPoint: "/signin",
    callBack: signin,
  },
  {
    type: "get",
    endPoint: "/verifyOtp",
    callBack: verifyOtp,
  },
  {
    type: "get",
    endPoint: "/forgotPassword",
    callBack: forgotPassword,
  },
  {
    type: "post",
    endPoint: "/resetPassword",
    callBack: resetPassword,
  },
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
    endPoint: "/uploadProfilePic",
    middleware: [verifyToken],
    callBack: imgUpload,
  },
  {
    type: "post",
    endPoint: "/profilePic",
    middleware: [verifyToken],
    callBack: removeImage,
  },
  {
    type: "delete",
    endPoint: "/profilePic",
    middleware: [verifyToken],
    callBack: addCloseFriends,
  },
  {
    type: "delete",
    endPoint: "/closeFriend",
    middleware: [verifyToken],
    callBack: removeCloseFriend,
  },
  {
    type: "post",
    endPoint: "/favourite",
    middleware: [verifyToken],
    callBack: addFavourite,
  },
  {
    type: "delete",
    endPoint: "/favourite",
    middleware: [verifyToken],
    callBack: removeFavourite,
  },
  {
    type: "delete",
    endPoint: "/signin",
    middleware: [verifyToken],
    callBack: signout,
  },
  {
    type: "post",
    endPoint: "/imgpost",
    middleware: [verifyToken],
    callBack: imgpost,
  },
  {
    type: "post",
    endPoint: "/arrimgpost",
    middleware: [verifyToken],
    callBack: arrImgPost,
  },
  {
    type: "post",
    endPoint: "/postVideo",
    middleware: [verifyToken],
    callBack: postVideo,
  },
  {
    type: "post",
    endPoint: "/arrPostVideo",
    middleware: [verifyToken],
    callBack: arrPostVideo,
  },
  {
    type: "post",
    endPoint: "/postStory",
    middleware: [verifyToken],
    callBack: postStory,
  },
  {
    type: "post",
    endPoint: "/highLights",
    middleware: [verifyToken],
    callBack: highLights,
  },
  {
    type: "post",
    endPoint: "/postlike",
    middleware: [verifyToken],
    callBack: postlikes,
  },
  {
    type: "delete",
    endPoint: "/postlike",
    middleware: [verifyToken],
    callBack: removePostLike,
  },
  {
    type: "post",
    endPoint: "/comments",
    middleware: [verifyToken],
    callBack: comments,
  },
  {
    type: "put",
    endPoint: "/updateBio",
    middleware: [verifyToken],
    callBack: updateBio,
  },
  {
    type: "get",
    endPoint: "/profileInfo",
    middleware: [verifyToken],
    callBack: profileInfo,
  },
  {
    type: "post",
    endPoint: "/savePost",
    middleware: [verifyToken],
    callBack: savedpost,
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
    endPoint: "/accessChat",
    middleware: [verifyToken],
    callBack: accessChat,
  },
  {
    type: "post",
    endPoint: "/createGroup",
    middleware: [verifyToken],
    callBack: createGroup,
  },
  {  
    type: "put",
    endPoint: "/addToGroup",
    middleware: [verifyToken],
    callBack: addToGroups,
  }
]; 
  
module.exports = arr;
