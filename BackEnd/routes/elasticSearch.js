const fetchUser = require("../elastic_search/searchUsers");
const verifyToken = require("../middleware/verifyToken");

let elastic_search = [
  {
    type: "get",
    endPoint: "/fetchUser",
    middleware: [verifyToken],
    callBack: fetchUser,
  },
];

module.exports=elastic_search;