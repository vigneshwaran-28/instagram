let hashtag = (caption) => {
  let hashTagList = caption.match(/#\w*/g);
  return hashTagList.join(",");
};
module.exports = hashtag;
