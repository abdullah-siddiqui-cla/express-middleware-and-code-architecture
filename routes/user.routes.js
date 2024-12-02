import express from "express";
import { create, login } from "../modules/users/users.controller.js";
import { validateUserData } from "../modules/users/user.validation.js";

const router = express.Router();

router.post("/", validateUserData, create);
router.post("/login", validateUserData, login);

export default router;
