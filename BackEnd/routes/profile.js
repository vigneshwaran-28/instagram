const profileInfo = require("../controllers/profile/profileInfo");
const updateBio = require("../controllers/profile/updateBio");
const savedpost = require("../controllers/profile/savedPost");
const removeSavedPost = require("../controllers/profile/removeSavedPost");
const retreiveSaved = require("../controllers/profile/retreiveSaved");
const updateUsername = require("../controllers/profile/updateUsername");
const publictype = require("../controllers/profile/publicType");
const privatetype = require("../controllers/profile/privateType");
const verifyToken = require("../middleware/verifyToken");


let profile = [
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
    type: "put",
    endPoint: "/updateUsername",
    middleware: [verifyToken],
    callBack: updateUsername,
  },
  {
    type: "put",
    endPoint: "/updateBio",
    middleware: [verifyToken],
    callBack: updateBio,
  },
  {
    type: "delete",
    endPoint: "/savePost",
    middleware: [verifyToken],
    callBack: removeSavedPost,
  },
  {
    type: "get",
    endPoint: "/savePost",
    middleware: [verifyToken],
    callBack: retreiveSaved,
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
];


module.exports=profile;
