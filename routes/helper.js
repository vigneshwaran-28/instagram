const signup = require("../controllers/signup/signup");
const addUser = require("../controllers/signup/addUser");
const getDob = require("../controllers/signup/signupDob");
const getOtp = require("../controllers/helperFunction/otpGeneration");
const validateEmail = require("../controllers/helperFunction/validateEmail");
const validateMobNum = require("../controllers/helperFunction/validateMobNum");
const verifyOtp = require("../controllers/helperFunction/verifyOtp");
const signin = require("../controllers/signin/signin");
const forgotPassword = require("../controllers/forgotPassword/forgotPassword");
const resetPassword = require("../controllers/forgotPassword/resetPassword");
const verifyToken=require('../middleware/verifyToken');
const follow=require('../controllers/follow/follow');
const unfollow=require('../controllers/follow/unfollow');
const imgUpload=require('../controllers/profilePic/imageUpload');
const removeImage=require('../controllers/profilePic/removeImage');
const addCloseFriends=require('../controllers/closeFriends/AddcloseFriend');
const removeCloseFriend=require('../controllers/closeFriends/removeCloseFriend');
const addFavourite=require('../controllers/favourites/addFavourite');
const removeFavourite=require('../controllers/favourites/removeFavourite');
const signout=require('../controllers/signin/signout');
const imgpost=require('../controllers/posts/imgPost');
const arrImgPost=require('../controllers/posts/arrImgPost');
const postVideo=require('../controllers/posts/postVideo');
const arrPostVideo=require('../controllers/posts/arrPostVideo');
const postStory=require('../controllers/story/story');
const highLights=require('../controllers/story/highLights');

let arr = [
  {
    type: "post",
    endPoint: "/signup",
    callBack: signup,
  },
  {
    type: "post",
    endPoint: "/adduser",
    callBack: addUser,
  },
  {
    type: "post",
    endPoint: "/getdob",
    callBack: getDob,
  },
  {
    type: "post",
    endPoint: "/getotp",
    callBack: getOtp,
  },
  {
    type: "post",
    endPoint: "/signin",
    callBack: signin,
  },
  {
    type: "post",
    endPoint: "/validateEmail",
    callBack: validateEmail,
  },
  {
    type: "post",
    endPoint: "/validateMobNum",
    callBack: validateMobNum,
  },
  {
    type: "post",
    endPoint: "/verifyOtp",
    callBack: verifyOtp,
  },
  {
    type: "post",
    endPoint: "/forgotPassword",
    callBack: forgotPassword,
  },
  {
    type: "post",
    endPoint: "/resetPassword",
    callBack: resetPassword,
  },{
    type: "post",
    endPoint: "/follow",
    middleware:[verifyToken],
    callBack: follow,
  },{
    type: "post",
    endPoint: "/unfollow",
    middleware:[verifyToken],
    callBack: unfollow,
  },{
    type: "post",
    endPoint: "/uploadProfilePic",
    middleware:[verifyToken],
    callBack: imgUpload,
  },{
    type: "post",
    endPoint: "/removeProfilePic",
    middleware:[verifyToken],
    callBack: removeImage,
  },{
    type: "post",
    endPoint: "/addCloseFriend",
    middleware:[verifyToken],
    callBack: addCloseFriends,
  },{
    type: "post",
    endPoint: "/removeCloseFriend",
    middleware:[verifyToken],
    callBack: removeCloseFriend,
  },{
    type: "post",
    endPoint: "/addFavourite",
    middleware:[verifyToken],
    callBack: addFavourite,
  },{
    type: "post",
    endPoint: "/removeFavourite",
    middleware:[verifyToken],
    callBack: removeFavourite,
  },{
    type: "post",
    endPoint: "/signout",
    middleware:[verifyToken],
    callBack: signout,
  },{
    type: "post",
    endPoint: "/imgpost",
    middleware:[verifyToken],
    callBack: imgpost,
  },{
    type: "post",
    endPoint: "/arrimgpost",
    middleware:[verifyToken],
    callBack: arrImgPost,
  },{
    type: "post",
    endPoint: "/postVideo",
    middleware:[verifyToken],
    callBack: postVideo,
  },{
    type: "post",
    endPoint: "/arrPostVideo",
    middleware:[verifyToken],
    callBack: arrPostVideo,
  },{
    type: "post",
    endPoint: "/postStory",
    middleware:[verifyToken],
    callBack: postStory,
  },{
    type: "post",
    endPoint: "/highLights",
    middleware:[verifyToken],
    callBack: highLights,
  }
];

module.exports = arr;
  