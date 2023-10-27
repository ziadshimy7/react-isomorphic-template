import { z } from "zod";

export const authFormFieldsSchema = z
  .object({
    userName: z
      .string({ description: "User name for the user" })
      .min(10, { message: "Please create a strong username" }),
    firstName: z
      .string({ description: "User's full name" })
      .min(1, { message: "Please enter your first name" }),
    lastName: z
      .string({ description: "User's full name" })
      .min(1, { message: "Please enter your last name" }),
    email: z
      .string()
      .email({ message: "Please Enter a valid email" })
      .min(1, { message: "Required" }),
    date: z.string(),
    phone: z.string().min(12, { message: "Please enter a valid phone number" }),
    password: z.string().min(12, {
      message:
        "Please enter a valid password with combination of uppercase letters, lower case letters and symbols",
    }),
    confirmPassword: z.string(),
  })
  .refine(({ confirmPassword, password }) => confirmPassword === password, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const authLoginFormFieldsSchema = z.object({
  email: z
    .string()
    .email({ message: "Please Enter a valid email" })
    .min(1, { message: "Required" }),
  password: z.string().min(12, {
    message:
      "Please enter a valid password with combination of uppercase letters, lower case letters and symbols",
  }),
});
