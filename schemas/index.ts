import * as z from "zod";

export const RegisterFormSchema = z.object({
  name: z.string().min(2, {
    message: "Full name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*.?&])[A-Za-z\d@$.#!%*?&]{8,}$/,
      {
        message:
          "Password must include uppercase and lowercase letters, numbers, and special characters.",
      }
    ),
});

export const LoginFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export const UpdateProfileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Full name must be at least 3 characters.",
  }),
  jobTitle: z.string().min(2, {
    message: "Job title must be at least 3 characters.",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 3 characters.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  about: z.string().min(10, {
    message: "About must be at least 10 characters.",
  }),
});

export const CreateCourseFormSchema = z.object({
  title: z.string({
    required_error: "Course title is required",
  }),
  description: z
    .string({
      required_error: "Course description is required",
    })
    .max(150, { message: "Course description is too long" }),
  category: z.string(),
  topics: z.array(z.string()),
  madeFor: z.array(z.string()),
  faqs: z.array(
    z.object({
      question: z.string(),
      answer: z.string(),
    })
  ),
});
