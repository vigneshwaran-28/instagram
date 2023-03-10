let validateEmail = (req, res) => {
  const { email } = req.body;
  let validRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  if (validRegex.test(email)) res.status(200).json({ message: "valid email!" });
  else res.status(400).json({ message: "Invalid email!" });
};

module.exports = validateEmail;
