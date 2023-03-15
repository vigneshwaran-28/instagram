// let str="vig";
// console.log(str.toString());
// let arr=[1,23,43];
// console.log(arr+[9]);
// let d=new Date(Date.now);
//select profile.photourl,profile.bio,userdetails.fullname from profile left join userdetails on profile.userid=userdetails.userid;

// select profile.photourl,profile.bio,userdetails.fullname, (select count(followerid) followingCount from follow where followerid=profile.userid),(select count(followingid) followersCount from follow where followingid=profile.userid),(select count(userid) from post where post.userid=profile.userid) from profile left join userdetails on profile.userid=userdetails.userid;

// let st="http://res.cloudinary.com/dkl52nx7z/image/upload/v1678167988/Instagram/post/img/notq5c3bsekuzwnyihrr.jpg,http://res.cloudinary.com/dkl52nx7z/image/upload/v1678168005/Instagram/post/img/sj92daslupcw7vatzoiq.jpg,http://res.cloudinary.com/dkl52nx7z/image/upload/v1678168007/Instagram/post/img/ezewmv6xi6mtnsgk7a1z.jpg,http://res.cloudinary.com/dkl52nx7z/image/upload/v1678168850/Instagram/post/img/mbxdgonrkvqp1ursuunf.jpg,http://res.cloudinary.com/dkl52nx7z/image/upload/v1678168918/Instagram/post/img/mcrcdhwdsbl0go5g0y1f.jpg,http://res.cloudinary.com/dkl52nx7z/video/upload/v1678169254/Instagram/post/video/mrqhiwfjabjwd5gbmslx.mp4,http://res.cloudinary.com/dkl52nx7z/video/upload/v1678169261/Instagram/post/video/keamzv8wkvygfol8msph.mp4,http://res.cloudinary.com/dkl52nx7z/video/upload/v1678169809/Instagram/post/video/ivg2vlszmi9cdqo3lcbv.mp4";
// console.log(st.split(',').length);

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjE2LCJpYXQiOjE2NzgwODMzNTgsImV4cCI6MTY3ODk0NzM1OH0.0U-syGr30NPpe2YT4yMbDey1greXHZ5Ui5l3JtCDGwk
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
//   .eyJ1c2VyaWQiOjE2LCJpYXQiOjE2Nzg3ODUwOTgsImV4cCI6MTY3OTY0OTA5OH0
//   .TJex5ycKKMrU3XSebxoeHkzucFtoF2y5UF - zin43I2M;
// let demo="@vicky@dhara";
// let res=demo.match(/@\w*/g);
// console.log(res);

// const pool = require("../../models/db");

// const retreiveMessage = async () => {
//   await pool
//     .query(
//       "select content,postuserid,replyid,commentid,time from comments where userid=16 and postid=3 order by replyid desc"
//     )
//     .then((result) => {
//       let resObj = {},
//         resArr = [];
//       for (let i = 0; i < result.rows.length && !result.rows[i].replyid; i++) {
//         let c = "" + result.rows[i].commentid;
//         resObj[c] = {};
//         resObj[c][c] = result.rows[i];
//         for (let j = 0; j < result.rows.length; j++) {
//           if (i != j && result.rows[j].replyid == c) {
//             let s = result.rows[j].commentid;
//             resObj[c][s] = result.rows[j];
//           }
//         }
//       }
//       console.log(resObj);
//     });
// };
// retreiveMessage();
// module.exports = retreiveMessage;


// let a={
//     h5:"hi"
// }
// let b={
//     h6:5
// }

// a.h5=b;
// console.log(a);

// function f(){
//   a=10;
// }
// console.log(a);


/*

const pool = require("../../models/db");

const retreiveMessage = async() => {
   await pool.query(
      "select content,postuserid,replyid,commentid,time from comments where userid=16 and postid=3 order by replyid desc"
    ).then((result) => {
    let resObj = {},resArr=[];
    for (let i = 0; i < result.rows.length && !result.rows[i].replyid; i++) {
        let c = result.rows[i].commentid;
        resArr.push(c);
        resObj[c]={};
        resObj[c][c]=result.rows[i];
        result.rows[i].flag=true;
        getResObj(resObj,c);
           function getResObj(resObj, c) {
              for(let j=0;j<result.rows.length;j++){
                if(i!=j && result.rows[j]?.replyid==c && !result.rows[j].flag){
                    let s=result.rows[j].commentid+'';
                    resObj[c]={};
                    resObj[c][s]=result.rows[j];
        result.rows[j].flag = true;
 resObj[c][result.rows[j].commentid + ""]={};
 resObj = resObj[c][result.rows[j].commentid + ""];
                    // resObj[c][result.rows[j].commentid + ""] =
                    //   resObj[c][result.rows[j].commentid + ""];
                  
                           c = result.rows[j].commentid;
                    getResObj(resObj,c);
                    
                 
                }
              }
           }
    }
    const iterate = (obj) => {
      Object.keys(obj).forEach((key) => {
        console.log(`key: ${key}, value: ${obj[key]}`);

        if (typeof obj[key] === "object" && obj[key] !== null) {
          iterate(obj[key]);
        }
      });
    };
    iterate(resObj);
 
  });
 
};
retreiveMessage();
module.exports = retreiveMessage;



*/


/*

archeive table tags and urllink
comments table mention
message table admin 
post table urllink,tags,hashtagcontent
userdetails table 

*/

//call,apply,bind
// javascript info object methods
