const express = require("express");
const app = express();
const arr = require("./helper");

arr.map((e) => {
  if (e.type == "post")
    app.post(e.endPoint, e.middleware ? [...e.middleware] : [], e.callBack);
  else if (e.type == "get")
    app.get(e.endPoint, e.middleware ? [...e.middleware] : [], e.callBack);
  else if (e.type == "put")
    app.put(e.endPoint, e.middleware ? [...e.middleware] : [], e.callBack);
  else if (e.type == "delete")
    app.delete(e.endPoint, e.middleware ? [...e.middleware] : [], e.callBack);
});

module.exports = app;
