
const userModel = require("../models/userModel");



const handleSignup = async (req, res) => {
  try {
    const { user, interest, age, mobile, email } = req.body;

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    

    const newUser = await userModel.create({
      user,
      interest,
      age,
      mobile,
      email,
     
    });
    console.log(newUser);
    return res.status(201).json({
      success: true,
      message: "User registered sucessfully",
      userId: newUser._id
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};


const getUsers = async (req, res) => {
  try {
    const users = await userModel.find().select("-password");
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = {
  handleSignup,

  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
