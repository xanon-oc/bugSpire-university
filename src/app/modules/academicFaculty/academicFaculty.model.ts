import { Schema, model } from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interface';

const AcademicFacultySchema = new Schema<TAcademicFaculty>({
  name: { type: String },
});

export const AcademicFaculty = model<TAcademicFaculty>(
  'AcademicFaculty',
  AcademicFacultySchema,
);
