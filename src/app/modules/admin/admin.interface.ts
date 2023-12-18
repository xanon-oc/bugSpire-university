import { Types } from 'mongoose';
import { TGender } from '../../interface/global.interface';

export type TAdmin = {
  id: string;
  user: Types.ObjectId;
  designation: string;
  fullName: string;
  gender: TGender;
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  presentAddress: string;
  profileImage: string;
  isDeleted: boolean;
};
