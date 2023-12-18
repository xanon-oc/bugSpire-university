import { Schema } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';

const AcademicSemesterSchema = new Schema<TAcademicSemester>({
  name: { type: String },
  year: { type: String },
  startMonth: { type: String },
  endMonth: { type: String },
});

export const AcademicSemester = { AcademicSemesterSchema };
