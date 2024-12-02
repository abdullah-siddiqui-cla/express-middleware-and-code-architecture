import mongoose from "mongoose";
import { createPassword } from "../../../utils.js";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);

export const create = async (username, password) => {
  const hashedPassword = await createPassword(password);
  const newUser = new User({ username, password: hashedPassword });

  return await newUser.save();
};

export const findByUsername = async (username) => {
  return await User.findOne({ username });
};