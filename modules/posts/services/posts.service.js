import { posts } from "./posts.data.js";

export const create = (post) => {
  post.id = posts.length + 1;
  posts.push(post);
  return post;
};

export const findAll = () => {
  return posts;
};

export const findById = (id) => {
  return posts.find((post) => post.id === id);
};

export const update = (id, updatedPost) => {
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) return null;
  posts[index] = { ...posts[index], ...updatedPost };
  return posts[index];
};

export const delet = (id) => {
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) return null;
  return posts.splice(index, 1)[0];
};
