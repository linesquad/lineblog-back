import User from "../models/user.js";

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  const user = await newUser.save();
  res.status(201).json({ message: "User created successfully", user });
};
