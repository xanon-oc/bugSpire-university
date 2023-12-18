import { z } from 'zod';

// Define the zod schema for the student object
const StudentValidationSchema = z.object({
  body: z.object({
    id: z.string(),
    user: z.string().uuid(),
    fullName: z.string(),
    gender: z.enum(['male', 'female', 'other']),
    dateOfBirth: z.date().optional(),
    email: z.string().email(),
    contactNo: z.string(),
    presentAddress: z.string(),
    profileImg: z.string().optional(),
    admissionSemester: z.string().uuid(),
    academicDepartment: z.string().uuid(),
    isDeleted: z.boolean().default(false),
  }),
});
export const StudentValidation = {
  StudentValidationSchema,
};
