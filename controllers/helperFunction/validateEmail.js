let validateEmail = (email) => {
    let validRegex = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    return validRegex.test(email);
  };

module.exports=validateEmail;
