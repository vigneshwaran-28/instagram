const signin = require("../controllers/signin/signin");
const signout = require("../controllers/signin/signout");
const verifyToken = require("../middleware/verifyToken");


let signinRoute = [
  {
    type: "post",
    endPoint: "/signin",
    callBack: signin,
  },

  {
    type: "delete",
    endPoint: "/signin",
    middleware: [verifyToken],
    callBack: signout,
  },

];


module.exports=signinRoute;