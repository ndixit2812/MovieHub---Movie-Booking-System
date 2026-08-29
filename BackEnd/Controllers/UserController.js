const User = require("../Modals/UserModal");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const { userName, email, password, mobile } = req.body;
    const newUser = new User({ userName, email, password, mobile });
    await newUser.save();
    res.status(201).json({ message: "User added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    res.status(200).json({ message: "Login Successfully Done", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser, loginUser };
