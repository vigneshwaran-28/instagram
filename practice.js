// let str="vig";
// console.log(str.toString());
// let arr=[1,23,43];
// console.log(arr+[9]);
// let d=new Date(Date.now);
//select profile.photourl,profile.bio,userdetails.fullname from profile left join userdetails on profile.userid=userdetails.userid;

// select profile.photourl,profile.bio,userdetails.fullname, (select count(followerid) followingCount from follow where followerid=profile.userid),(select count(followingid) followersCount from follow where followingid=profile.userid),(select count(userid) from post where post.userid=profile.userid) from profile left join userdetails on profile.userid=userdetails.userid;

// let st="http://res.cloudinary.com/dkl52nx7z/image/upload/v1678167988/Instagram/post/img/notq5c3bsekuzwnyihrr.jpg,http://res.cloudinary.com/dkl52nx7z/image/upload/v1678168005/Instagram/post/img/sj92daslupcw7vatzoiq.jpg,http://res.cloudinary.com/dkl52nx7z/image/upload/v1678168007/Instagram/post/img/ezewmv6xi6mtnsgk7a1z.jpg,http://res.cloudinary.com/dkl52nx7z/image/upload/v1678168850/Instagram/post/img/mbxdgonrkvqp1ursuunf.jpg,http://res.cloudinary.com/dkl52nx7z/image/upload/v1678168918/Instagram/post/img/mcrcdhwdsbl0go5g0y1f.jpg,http://res.cloudinary.com/dkl52nx7z/video/upload/v1678169254/Instagram/post/video/mrqhiwfjabjwd5gbmslx.mp4,http://res.cloudinary.com/dkl52nx7z/video/upload/v1678169261/Instagram/post/video/keamzv8wkvygfol8msph.mp4,http://res.cloudinary.com/dkl52nx7z/video/upload/v1678169809/Instagram/post/video/ivg2vlszmi9cdqo3lcbv.mp4";
// console.log(st.split(',').length);


let demo="@vicky@dhara";
let res=demo.match(/@\w*/g);
console.log(res);