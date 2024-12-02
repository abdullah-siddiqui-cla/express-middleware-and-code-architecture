import mongoose from 'mongoose';

// Step 1: Define the schema
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
});

// Step 2: Create the model
const Post = mongoose.model('Post', postSchema);

// Step 3: Refactor the CRUD functions
export const create = async (post) => {
  const newPost = new Post(post);
  return await newPost.save();
};

export const findAll = async () => {
  return await Post.find();
};

export const findById = async (id) => {
  return await Post.findById(id);
};

export const update = async (id, updatedPost) => {
  return await Post.findByIdAndUpdate(id, updatedPost, { new: true });
};

export const delet = async (id) => {
  return await Post.findByIdAndDelete(id);
};
