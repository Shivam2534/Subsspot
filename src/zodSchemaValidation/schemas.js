import { z } from "zod";

const signUpUserSchema = z.object({
  username: z
    .string()
    .max(50, { message: "Username must be less than 50 characters" })
    .trim()
    .min(3, { message: "Username must be greater than equal to 3 characters" }),
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters long" })
    .max(15, { message: "Password must be no more than 15 characters long" }),
});

const loginUserSchema = z.object({
  loginEmail: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters long" })
    .max(15, { message: "Password must be no more than 15 characters long" }),
});

export { signUpUserSchema, loginUserSchema };
