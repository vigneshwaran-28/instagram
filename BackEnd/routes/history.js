const getHistory = require("../controllers/history/accessHistory");
const verifyToken = require("../middleware/verifyToken");


let history = [
  {
    type: "get",
    endPoint: "/getHistory",
    middleware: [verifyToken],
    callBack: getHistory,
  },
];

module.exports=history;
