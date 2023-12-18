import { Schema, model } from 'mongoose';
import { TStudent } from './student.interface';
import { Gender } from '../../utils/global.utils';

const StudentSchema = new Schema<TStudent>({
  id: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  fullName: { type: String, required: true },
  gender: {
    type: String,
    enum: Gender,
    required: true,
  },
  dateOfBirth: { type: Date },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  profileImg: { type: String },
  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref: 'Semester',
    required: true,
  },
  academicDepartment: {
    type: Schema.Types.ObjectId,
    ref: 'Department',
    required: true,
  },
  isDeleted: { type: Boolean, default: false },
});

// Create the model for the student collection
export const Student = model<TStudent>('Student', StudentSchema);
