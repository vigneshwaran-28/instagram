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
const accessChat = require("../controllers/message/accessChat");
const createGroup = require("../controllers/message/createGroupChat");
const addToGroups = require("../controllers/message/addToGroup");
const removeFromGroup = require("../controllers/message/removeFromGroup");
const renameGroup = require("../controllers/message/renameGroup");
const retreiveComment = require("../controllers/posts/retreiveComments");
const likeComment = require("../controllers/posts/likeComments");
const unLikeComment = require("../controllers/posts/unLikeComment");
const deleteComment = require("../controllers/posts/deleteComment");
const retreivePost = require("../controllers/posts/getPost");
const getFollowers = require("../controllers/follow/getFollowers");
const getFollowing = require("../controllers/follow/getFollowing");
const getFavourites = require("../controllers/favourites/getFavourites");
const getCloseFriends = require("../controllers/closeFriends/getCloseFriend");
const deleteGroup = require("../controllers/message/deleteGroup");
const removeSavedPost = require("../controllers/profile/removeSavedPost");
const deletePost = require("../controllers/posts/deletePost");
const getProfilePhoto = require("../controllers/profilePic/getProfile");
const deleteChat = require("../controllers/message/deleteChat");
const updateUsername = require("../controllers/profile/updateUsername");
const storeChat = require("../controllers/message/storeMessage");
const getHistory = require("../controllers/history/accessHistory");

//api for uploading users for instagram
const uploadMusic = require("../public/uploadMusic");

const getMusic = require("../controllers/music/getMusic");
const setActive = require("../middleware/setActive");
const setDeActive = require("../middleware/setDeactive");
const loginTime = require("../middleware/loginTime");
const storyLikes = require("../controllers/story/storyLikes");
const storyUnLikes = require("../controllers/story/storyDislikes");
const storyViewers = require("../controllers/story/storyViewers");
const getStory = require("../controllers/homePage/getStory");
const deleteStory = require("../controllers/story/deleteStory");
const publictype = require("../controllers/profile/publicType");
const privatetype = require("../controllers/profile/privateType");
const homePagePost = require("../controllers/homePage/getPost");
const getEmoji = require("../public/getEmoji");
const fetchUserStory = require("../controllers/story/fetchUserStory");
const fetchUser = require("../elastic_search/searchUsers");

let arr = [
  {
    type: "get",
    endPoint: "/health",
    callBack: (req, res) => {
      res.send("health check");
    },
  },
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
    type: "post",
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
    middleware: [verifyToken],
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
    endPoint: "/profilePic",
    middleware: [verifyToken],
    callBack: imgUpload,
  },
  {
    type: "delete",
    endPoint: "/profilePic",
    middleware: [verifyToken],
    callBack: removeImage,
  },
  {
    type: "post",
    endPoint: "/closeFriend",
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
    type: "post",
    endPoint: "/addRemoveGroup",
    middleware: [verifyToken],
    callBack: addToGroups,
  },
  {
    type: "delete",
    endPoint: "/addRemoveGroup",
    middleware: [verifyToken],
    callBack: removeFromGroup,
  },
  {
    type: "put",
    endPoint: "/renameGroup",
    middleware: [verifyToken],
    callBack: renameGroup,
  },
  {
    type: "get",
    endPoint: "/retreiveComment",
    middleware: [verifyToken],
    callBack: retreiveComment,
  },
  {
    type: "put",
    endPoint: "/likeComment",
    middleware: [verifyToken],
    callBack: likeComment,
  },
  {
    type: "delete",
    endPoint: "/likeComment",
    middleware: [verifyToken],
    callBack: unLikeComment,
  },
  {
    type: "delete",
    endPoint: "/deleteComment",
    middleware: [verifyToken],
    callBack: deleteComment,
  },
  {
    type: "get",
    endPoint: "/retreivePost",
    middleware: [verifyToken],
    callBack: retreivePost,
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
  {
    type: "get",
    endPoint: "/getFavourites",
    middleware: [verifyToken],
    callBack: getFavourites,
  },
  {
    type: "get",
    endPoint: "/getCloseFriends",
    middleware: [verifyToken],
    callBack: getCloseFriends,
  },
  {
    type: "delete",
    endPoint: "/deleteGroups",
    middleware: [verifyToken],
    callBack: deleteGroup,
  },
  {
    type: "delete",
    endPoint: "/savePost",
    middleware: [verifyToken],
    callBack: removeSavedPost,
  },
  {
    type: "delete",
    endPoint: "/deletePost",
    middleware: [verifyToken],
    callBack: deletePost,
  },
  {
    type: "get",
    endPoint: "/profilePic",
    middleware: [verifyToken],
    callBack: getProfilePhoto,
  },
  {
    type: "delete",
    endPoint: "/accessChat",
    middleware: [verifyToken],
    callBack: deleteChat,
  },
  {
    type: "put",
    endPoint: "/updateUsername",
    middleware: [verifyToken],
    callBack: updateUsername,
  },
  {
    type: "post",
    endPoint: "/storeChat",
    middleware: [verifyToken],
    callBack: storeChat,
  },
  {
    type: "get",
    endPoint: "/getHistory",
    middleware: [verifyToken],
    callBack: getHistory,
  },
  {
    //upload music for instagram
    type: "post",
    endPoint: "/uploadMusic",
    middleware: [verifyToken],
    callBack: uploadMusic,
  },
  {
    type: "get",
    endPoint: "/getMusic",
    middleware: [verifyToken],
    callBack: getMusic,
  },
  {
    type: "put",
    endPoint: "/setActive",
    middleware: [verifyToken],
    callBack: setActive,
  },
  {
    type: "delete",
    endPoint: "/setActive",
    middleware: [verifyToken],
    callBack: setDeActive,
  },
  {
    type: "put",
    endPoint: "/loginTime",
    middleware: [verifyToken],
    callBack: loginTime,
  },
  {
    type: "put",
    endPoint: "/likesDislikesStory",
    middleware: [verifyToken],
    callBack: storyLikes,
  },
  {
    type: "delete",
    endPoint: "/likesDislikesStory",
    middleware: [verifyToken],
    callBack: storyUnLikes,
  },
  {
    type: "post",
    endPoint: "/storyViewers",
    middleware: [verifyToken],
    callBack: storyViewers,
  },
  {
    type: "get",
    endPoint: "/getStory",
    middleware: [verifyToken],
    callBack: getStory,
  },
  {
    type: "delete",
    endPoint: "/deleteStory",
    middleware: [verifyToken],
    callBack: deleteStory,
  },
  {
    type: "put",
    endPoint: "/publicType",
    middleware: [verifyToken],
    callBack: publictype,
  },
  {
    type: "delete",
    endPoint: "/publicType",
    middleware: [verifyToken],
    callBack: privatetype,
  },
  {
    type: "get",
    endPoint: "/homePost",
    middleware: [verifyToken],
    callBack: homePagePost,
  },
  {
    type: "get",
    endPoint: "/getEmoji",
    middleware: [verifyToken],
    callBack: getEmoji,
  },
  {
    type: "get",
    endPoint: "/fetchUserStory",
    middleware: [verifyToken],
    callBack: fetchUserStory,
  },
  {
    type: "get",
    endPoint: "/fetchUser",
    middleware: [verifyToken],
    callBack: fetchUser,
  },
];

module.exports = arr;