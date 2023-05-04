const accessChat = require("../controllers/message/accessChat");
const createGroup = require("../controllers/message/createGroupChat");
const addToGroups = require("../controllers/message/addToGroup");
const removeFromGroup = require("../controllers/message/removeFromGroup");
const renameGroup = require("../controllers/message/renameGroup");
const deleteChat = require("../controllers/message/deleteChat");
const storeChat = require("../controllers/message/storeMessage");
const verifyToken = require("../middleware/verifyToken");
const deleteGroup = require("../controllers/message/deleteGroup");


let message = [
  {
    type: "get",
    endPoint: "/accessChat",
    middleware: [verifyToken],
    callBack: accessChat,
  },
  {
    type: "post",
    endPoint: "/createGroup",
    middleware: [verifyToken],
    callBack: createGroup,
  },
  {
    type: "post",
    endPoint: "/addRemoveGroup",
    middleware: [verifyToken],
    callBack: addToGroups,
  },
  {
    type: "delete",
    endPoint: "/addRemoveGroup",
    middleware: [verifyToken],
    callBack: removeFromGroup,
  },
  {
    type: "put",
    endPoint: "/renameGroup",
    middleware: [verifyToken],
    callBack: renameGroup,
  },
  {
    type: "delete",
    endPoint: "/accessChat",
    middleware: [verifyToken],
    callBack: deleteChat,
  },
  {
    type: "post",
    endPoint: "/storeChat",
    middleware: [verifyToken],
    callBack: storeChat,
  },

  {
    type: "delete",
    endPoint: "/deleteGroups",
    middleware: [verifyToken],
    callBack: deleteGroup,
  },
];


module.exports=message;
