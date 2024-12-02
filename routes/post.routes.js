import express from "express";
import {
  create,
  findAll,
  findById,
  update,
  delet as postControllerDelete,
} from "../modules/posts/posts.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { validateCreatePost, validateId } from "../modules/posts/post.validation.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", validateCreatePost, create);
router.get("/", findAll);
router.get("/:id", validateId, findById);
router.put("/:id", validateId, update);
router.delete("/:id", validateId, postControllerDelete);

export default router;
