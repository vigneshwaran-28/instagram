const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
require("dotenv").config({ path: "../../.env" });
const pool = require("../../models/db");
const hashTagFunction = require("../../utils/hashTag");

let arrImgPost = (req, res) => {
  cloudinary.config({
    cloud_name: process.env.api_cloud,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
  });

  const storage = multer.diskStorage({
    destination: "./img",
    filename: function (req, file, cb) {
      let name =
        file.originalname +
        "_" +
        req.userid +
        "_" +
        Date.now() +
        path.extname(file.originalname);
      cb(null, name);
    },
  });

  const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 10 },
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    },
  }).array("myImage");

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
  let resUrl = [];

  async function updateDb() {
    let tags = req.body.tags;
    tags = tags.replace(/\"/g, "");
    tags = tags.split(",");
    let hashtag = hashTagFunction(req.body.caption);
    await pool.query(
      "insert into post(userid,urllink,caption,hashtagcontent,tags,time) values($1,$2,$3,$4,$5,$6)",
      [req.userid, resUrl, req.body.caption, hashtag, tags, new Date()]
    );

    let postid=await pool.query("select * from post where userid=$1 order by time desc",[req.userid]);
    // console.log(postid.rows);
    let q="insert into posttag values";
   for(let i=0;i<tags.length;i++){
    q+=("($1,$2,$"+(i+3)+")")+((i!=tags.length-1)?",":"");
   }

   pool.query(q,[req.userid,postid.rows[0].postid,...tags]);


    res.status(200).json({ message: "post updated successfully!" });
  }

  async function uploadFiles(files) {
    for (let file of files) {
      let url = await cloudinary.uploader.upload(file.path, {
        resource_type: "image",
        folder: "Instagram/post/img",
      });
      resUrl.push(url.url);
      fs.unlinkSync(file.path);
    }
  }

  upload(req, res, async (err) => {
    if (err) res.status(400).json({ message: "Does not match!" });
    else {
      try {
        let files = req.files;
        await uploadFiles(files);
        updateDb();
      } catch (error) {
        res.status(401).json({ message: "error in uploading post!", error });
      }
    }
  });
};

module.exports = arrImgPost;
 