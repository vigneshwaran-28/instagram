const imgUpload = require("../controllers/profilePic/imageUpload");
const removeImage = require("../controllers/profilePic/removeImage");
const getProfilePhoto = require("../controllers/profilePic/getProfile");
const verifyToken = require("../middleware/verifyToken");


let profilePic = [
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
    type: "get",
    endPoint: "/profilePic",
    middleware: [verifyToken],
    callBack: getProfilePhoto,
  },
];


module.exports=profilePic;
