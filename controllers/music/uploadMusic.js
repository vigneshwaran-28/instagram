const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
require("dotenv").config({ path: "../../.env" });
const pool = require("../../models/db");

let uploadMusic = (req, res) => {
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
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    },
  }).single("audio");

  function checkFileType(file, cb) {
    const fileTypes = /mp3|audio/;

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
    if (err) {
      console.log(req.file, err);
      res.status(400).json({ message: "Does not match!" });
    } else {
      try {
        // console.log(req.file);
        let url = await cloudinary.uploader.upload(req.file.path, {
          resource_type: "auto",
          folder: "Instagram/music",
        });
        await pool.query("insert into music(musiclink) values($1)", [url.url]);
        fs.unlinkSync(req.file.path);
        res.status(200).json({ message: "music updated successfully!" });
      } catch (error) {
        res.status(401).json({ message: "error in uploading music!" });
      }
    }
  });
};

module.exports = uploadMusic;
