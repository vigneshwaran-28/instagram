const getEmoji = require("../public/getEmoji");
const verifyToken = require("../middleware/verifyToken");


let emoji = [
  {
    type: "get",
    endPoint: "/getEmoji",
    middleware: [verifyToken],
    callBack: getEmoji,
  },
];


module.exports=emoji;
