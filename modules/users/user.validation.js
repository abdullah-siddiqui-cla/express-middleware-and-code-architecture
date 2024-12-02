import z from "zod";

export const createUserSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export const validateUserData = (req, res, next) => {
  try {
    createUserSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors.map((err) => err.message) });
  }
};
