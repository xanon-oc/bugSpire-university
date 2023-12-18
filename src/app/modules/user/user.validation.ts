import { z } from 'zod';
const UserValidationSchema = z.object({
  body: z.object({
    id: z.string(),
    password: z.string(),
    needsPasswordChange: z.boolean().default(true),
    isDeleted: z.boolean().default(false),
  }),
});

export const UserValidation = {
  UserValidationSchema,
};
