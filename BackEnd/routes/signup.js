const signUp = require("../controllers/signup/signUp");

let signup = [
  {
    type: "post",
    endPoint: "/signup",
    callBack: signUp,
  },
];

module.exports=signup;
