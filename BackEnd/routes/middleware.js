const setActive = require("../middleware/setActive");
const setDeActive = require("../middleware/setDeactive");
const loginTime = require("../middleware/loginTime");
const verifyToken = require("../middleware/verifyToken");


let middleware = [
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
];


module.exports=middleware;