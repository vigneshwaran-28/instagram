const forgotPassword = require("../controllers/forgotPassword/forgotPassword");
const resetPassword = require("../controllers/forgotPassword/resetPassword");
const verifyToken = require("../middleware/verifyToken");


let password = [
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
];


module.exports=password;