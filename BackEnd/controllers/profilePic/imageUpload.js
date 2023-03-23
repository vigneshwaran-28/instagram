const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
require("dotenv").config({ path: "../../.env" });
const pool = require("../../models/db");

let imgUpload = (req, res) => {
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
    // cloudinary
  });

  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
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
    // console.log(file);
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
        let url = await cloudinary.uploader.upload(req.file.path, {
          resource_type: "image",
          folder: "Instagram/profilePic",
        });
        await pool.query("insert into profile(userid,photourl) values($1,$2)", [
          req.userid,
          url.url,
        ]);
        fs.unlinkSync(req.file.path);
        res.status(200).json({ message: "profile updated successfully!" });
      } catch (error) {
        res.status(401).json({ message: "error in uploading image!" });
      }
    }
  });
};

module.exports = imgUpload;
