let validateMobNum = (num) => {
    var ph = new RegExp(/^[6789]\d{9}$/);
    return ph.test(num);
};

module.exports=validateMobNum;