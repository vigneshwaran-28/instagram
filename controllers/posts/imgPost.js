const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
require("dotenv").config({ path: "../../.env" });
const pool = require("../../models/db");
const hashTagFunction=require('../../utils/hashTag')

let imgPost = (req, res) => {
  cloudinary.config({
    cloud_name: process.env.api_cloud,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
  });

  const storage = multer.diskStorage({
    destination: "./img",
    filename: function (req, file, cb) {
      let name =
        file.fieldname + "_" + Date.now() + path.extname(file.originalname);
      cb(null, name);
    },
  });

  const upload = multer({
    storage: storage,
    limits: { fileSize: 1024*1024*5 },
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    },
  }).single("myImage");

  function checkFileType(file, cb) {
    const fileTypes = /jpeg|jpg|png/;

    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimeType = fileTypes.test(file.mimetype);

    if (mimeType && extname) {
      return cb(null, true);
    } else {
      cb("Error");
    }
  }

  upload(req, res, async (err) => {
    if (err) res.status(400).json({ message: "Does not match!" });
    else {
      try {
        // console.log(req.file);
        let url = await cloudinary.uploader.upload(req.file.path, {
          resource_type: "image",
          folder: "Instagram/post/img",
        });
        let tags = req.body.tags;
        tags = tags.replace(/\"/g, "");
    let hashtag=hashTagFunction(req.body.caption);
    tags = tags.split(",");
        let arrUrl=[];
        arrUrl.push(url.url);
        await pool.query(
          "insert into post(userid,urllink,caption,hashtagcontent,tags,time) values($1,$2,$3,$4,$5,$6)",
          [
            req.userid,
            arrUrl,
            req.body.caption,
            hashtag,
            tags,
            new Date(),
          ]
        );
        fs.unlinkSync(req.file.path);
        res.status(200).json({ message: "post updated successfully!" });  
   
         } catch (error) {
        res.status(401).json({ message: "error in uploading post!" });
      }
    }
  });
};

module.exports = imgPost;
