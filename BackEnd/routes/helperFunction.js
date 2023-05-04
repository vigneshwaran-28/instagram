const getDob = require("../controllers/helperFunction/signupDob");
const getOtp = require("../controllers/helperFunction/otpGeneration");
const verifyOtp = require("../controllers/helperFunction/verifyOtp");
const checkExists = require("../controllers/helperFunction/checkExistInDb");


let helperFunction = [
  {
    type: "get",
    endPoint: "/getdob",
    callBack: getDob,
  },
  {
    type: "get",
    endPoint: "/checkExists",
    callBack: checkExists,
  },
  {
    type: "get",
    endPoint: "/getotp",
    callBack: getOtp,
  },
  {
    type: "get",
    endPoint: "/verifyOtp",
    callBack: verifyOtp,
  },
];


module.exports=helperFunction;
