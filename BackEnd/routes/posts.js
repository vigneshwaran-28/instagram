const imgpost = require("../controllers/posts/imgPost");
const arrImgPost = require("../controllers/posts/arrImgPost");
const deletePost = require("../controllers/posts/deletePost");
const verifyToken = require("../middleware/verifyToken");
const postlikes = require("../controllers/posts/postlikes");
const removePostLike = require("../controllers/posts/postUnLike");
const comments = require("../controllers/posts/comments");
const retreiveComment = require("../controllers/posts/retreiveComments");
const likeComment = require("../controllers/posts/likeComments");
const unLikeComment = require("../controllers/posts/unLikeComment");
const deleteComment = require("../controllers/posts/deleteComment");
const retreivePost = require("../controllers/posts/getPost");

let post = [
  {
    type: "post",
    endPoint: "/imgpost",
    // middleware: [verifyToken],
    callBack: imgpost,
  },
  {
    type: "post",
    endPoint: "/arrimgpost",
    middleware: [verifyToken],
    callBack: arrImgPost,
  },
  {
    type: "delete",
    endPoint: "/deletePost",
    middleware: [verifyToken],
    callBack: deletePost,
  },

  {
    type: "post",
    endPoint: "/postlike",
    middleware: [verifyToken],
    callBack: postlikes,
  },
  {
    type: "delete",
    endPoint: "/postlike",
    middleware: [verifyToken],
    callBack: removePostLike,
  },
  {
    type: "post",
    endPoint: "/comments",
    middleware: [verifyToken],
    callBack: comments,
  },

  {
    type: "get",
    endPoint: "/retreiveComment",
    middleware: [verifyToken],
    callBack: retreiveComment,
  },
  {
    type: "put",
    endPoint: "/likeComment",
    middleware: [verifyToken],
    callBack: likeComment,
  },
  {
    type: "delete",
    endPoint: "/likeComment",
    middleware: [verifyToken],
    callBack: unLikeComment,
  },
  {
    type: "delete",
    endPoint: "/deleteComment",
    middleware: [verifyToken],
    callBack: deleteComment,
  },
  {
    type: "get",
    endPoint: "/retreivePost",
    middleware: [verifyToken],
    callBack: retreivePost,
  },
];

module.exports = post;
