import { Schema, model } from 'mongoose';
import { TAdmin } from './admin.interface';
import { Gender } from '../../utils/global.utils';

const AdminSchema = new Schema<TAdmin>({
  id: { type: String, unique: true, required: [true, 'ID is required'] },
  user: {
    type: Schema.Types.ObjectId,
    unique: true,
    required: [true, 'user is required'],
    ref: 'User',
  },
  designation: { type: String, required: [true, 'designation is required'] },
  fullName: { type: String, required: [true, 'full name is required'] },
  gender: Gender,
  dateOfBirth: { type: Date },
  email: { type: String },
  contactNo: { type: String },
  presentAddress: { type: String },
  profileImage: { type: String },
  isDeleted: { type: Boolean, default: false },
});
export const Admin = model<TAdmin>('admin', AdminSchema);
