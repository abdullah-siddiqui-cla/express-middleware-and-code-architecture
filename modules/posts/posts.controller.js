import {
  create as postCreate,
  findAll as postFindAll,
  findById as postFindById,
  update as postUpdate,
  delet as postDelete,
} from "./services/posts.service.js";

export const create = async (req, res) => {
  const newPost = await postCreate(req.body);

  res.status(201).json(newPost);
};

export const findAll = async (req, res) => {
  res.json(await postFindAll());
};

export const findById = async (req, res) => {
  const post = await postFindById(req.params.id);

  if (!post) return res.status(404).json({ error: "Post not found" });

  res.json(post);
};

export const update = async (req, res) => {
  const updatedPost = await postUpdate(req.params.id, req.body);

  if (!updatedPost) return res.status(404).json({ error: "Post not found" });

  res.json(updatedPost);
};

export const delet = async (req, res) => {
  const deletedPost = await postDelete(req.params.id);

  if (!deletedPost) return res.status(404).json({ error: "Post not found" });

  res.json(deletedPost);
};
