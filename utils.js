import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createPassword = async (password) => {
  return await bcrypt.hash(password, 10);
}

export const createToken = (user) => {
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return token;
}

export const validatePassword = async (inputPassword, password) => {
  return await bcrypt.compare(inputPassword, password);
}