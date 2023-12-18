import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const UserSchema = new Schema<TUser>({
  id: { type: String },
  password: { type: String },
  needsPasswordChange: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
});

export const User = model<TUser>('User', UserSchema);
