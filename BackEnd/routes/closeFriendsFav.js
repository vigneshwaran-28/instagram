const addCloseFriends = require("../controllers/closeFriends/AddcloseFriend");
const removeCloseFriend = require("../controllers/closeFriends/removeCloseFriend");
const addFavourite = require("../controllers/favourites/addFavourite");
const removeFavourite = require("../controllers/favourites/removeFavourite");
const getFavourites = require("../controllers/favourites/getFavourites");
const getCloseFriends = require("../controllers/closeFriends/getCloseFriend");
const verifyToken = require("../middleware/verifyToken");



let closeFriendsFav = [
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
];


module.exports=closeFriendsFav;


