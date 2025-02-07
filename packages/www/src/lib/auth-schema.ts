/**
 * Schemas for auth related types
 * this will be backed by zod
 */

import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(1),
  imageUrl: z.string().optional(),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
