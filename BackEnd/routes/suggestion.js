const suggestion = require("../controllers/suggestion/suggestion");
const verifyToken = require("../middleware/verifyToken");


let suggestionRoute = [
  {
    type: "get",
    endPoint: "/suggestion",
    middleware: [verifyToken],
    callBack: suggestion,
  },
];

module.exports=suggestionRoute;

