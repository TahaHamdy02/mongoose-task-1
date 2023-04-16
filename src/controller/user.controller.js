const User = require("../Models/Models");

const addUser = async (req, res) => {
  // console.log(req.body);
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(400).send(err);
  }
};
const findUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("can't find this user");
    }
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const user = await User.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send("can't find this user");
    }
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send("can't find this user");
    }
    res.status(200).json({ message: "user deleted", user });
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = {
  addUser,
  getAllUsers,
  findUser,
  updateUser,
  deleteUser,
};
