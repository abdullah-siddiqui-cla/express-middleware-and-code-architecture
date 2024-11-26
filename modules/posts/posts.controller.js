import {
  create as postCreate,
  findAll as postFindAll,
  findById as postFindById,
  update as postUpdate,
  delet as postDelete,
} from "./services/posts.service.js";

export const create = (req, res) => {
  const post = postCreate(req.body);
  res.status(201).json(post);
};
export const findAll = (req, res) => {
  res.json(postFindAll());
};
export const findById = (req, res) => {
  const post = postFindById(parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json(post);
};
export const update = (req, res) => {
  const updatedPost = postUpdate(parseInt(req.params.id), req.body);
  if (!updatedPost) return res.status(404).json({ error: "Post not found" });
  res.json(updatedPost);
};
export const delet = (req, res) => {
  const deletedPost = postDelete(parseInt(req.params.id));
  if (!deletedPost) return res.status(404).json({ error: "Post not found" });
  res.json(deletedPost);
};
