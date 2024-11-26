import z from "zod";

export const createPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  body: z.string().min(1, "Body text is required"),
});

export const validateCreatePost = (req, res, next) => {
  try {
    createPostSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors.map((err) => err.message) });
  }
};
