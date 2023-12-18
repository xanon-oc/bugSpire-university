import { z } from 'zod';
import { Gender } from '../../utils/global.utils';
const AdminValidationSchema = z.object({
  body: z.object({
    id: z.string(),
    user: z.string(),
    designation: z.string(),
    fullName: z.string(),
    gender: z.enum([...Gender] as [string, ...string[]]),
    dateOfBirth: z.string().optional(),
    email: z.string(),
    contactNo: z.string(),
    presentAddress: z.string(),
    profileImage: z.string(),
    isDeleted: z.boolean().default(false),
  }),
});

export const AdminValidation = { AdminValidationSchema };
