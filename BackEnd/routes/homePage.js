const homePagePost = require("../controllers/homePage/getPost");
const getStory = require("../controllers/homePage/getStory");
const verifyToken = require("../middleware/verifyToken");


let homePage = [
  {
    type: "get",
    endPoint: "/homePost",
    middleware: [verifyToken],
    callBack: homePagePost,
  },
  {
    type: "get",
    endPoint: "/getStory",
    middleware: [verifyToken],
    callBack: getStory,
  },
];

module.exports=homePage;
