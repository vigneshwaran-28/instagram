//api for uploading users for instagram
const uploadMusic = require("../public/uploadMusic");

const getMusic = require("../controllers/music/getMusic");
const verifyToken = require("../middleware/verifyToken");


let music = [
  
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
];

module.exports=music;
