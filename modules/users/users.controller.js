import { createToken, validatePassword } from "../../utils.js";
import {
  create as createNewUser,
  findByUsername
} from "./services/users.service.js";

export const create = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check for duplicate username
    const existingUser = await findByUsername(username)
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists." });
    }

    const newUser = await createNewUser(username, password)

    res.status(201).json({ message: "User created successfully.", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ message: "Failed to create user." });
  }
};
