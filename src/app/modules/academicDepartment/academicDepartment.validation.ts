import { z } from 'zod';
const AcademicDepartmentValidationSchema = z.object({
  body: z.object({
    _id: z.string(),
    name: z.string(),
    academicFaculty: z.string(),
  }),
});
export const AcademicDepartmentValidation = {
  AcademicDepartmentValidationSchema,
};
