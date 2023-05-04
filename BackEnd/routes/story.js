const postStory = require("../controllers/story/story");
const highLights = require("../controllers/story/highLights");
const verifyToken = require("../middleware/verifyToken");
const storyLikes = require("../controllers/story/storyLikes");
const storyUnLikes = require("../controllers/story/storyDislikes");
const storyViewers = require("../controllers/story/storyViewers");
const deleteStory = require("../controllers/story/deleteStory");
const fetchUserStory = require("../controllers/story/fetchUserStory");


let story = [
  {
    type: "post",
    endPoint: "/postStory",
    middleware: [verifyToken],
    callBack: postStory,
  },
  {
    type: "post",
    endPoint: "/highLights",
    middleware: [verifyToken],
    callBack: highLights,
  },

  {
    type: "put",
    endPoint: "/likesDislikesStory",
    middleware: [verifyToken],
    callBack: storyLikes,
  },
  {
    type: "delete",
    endPoint: "/likesDislikesStory",
    middleware: [verifyToken],
    callBack: storyUnLikes,
  },
  {
    type: "post",
    endPoint: "/storyViewers",
    middleware: [verifyToken],
    callBack: storyViewers,
  },
  {
    type: "delete",
    endPoint: "/deleteStory",
    middleware: [verifyToken],
    callBack: deleteStory,
  },
  {
    type: "get",
    endPoint: "/fetchUserStory",
    middleware: [verifyToken],
    callBack: fetchUserStory,
  },
];


module.exports=story;