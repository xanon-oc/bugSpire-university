import { Schema, model } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';

const AcademicDepartmentSchema = new Schema<TAcademicDepartment>({
  _id: { type: Schema.Types.ObjectId, required: [true, '_id is required'] },
  name: { type: String },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    required: [true, 'Academic Faculty is required'],
  },
});

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  AcademicDepartmentSchema,
);
