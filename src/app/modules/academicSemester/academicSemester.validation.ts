import { z } from 'zod';
const AcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    year: z.string(),
    startMonth: z.string(),
    endMonth: z.string(),
  }),
});

export const AcademicSemesterValidation = { AcademicSemesterValidationSchema };
