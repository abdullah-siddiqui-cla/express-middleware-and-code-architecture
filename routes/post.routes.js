import express from "express";
import {
  create,
  findAll,
  findById,
  update,
  delet as postControllerDelete,
} from "../modules/posts/posts.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { validateCreatePost } from "../modules/posts/post.validation.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", validateCreatePost, create);
router.get("/", findAll);
router.get("/:id", findById);
router.put("/:id", update);
router.delete("/:id", postControllerDelete);

export default router;
