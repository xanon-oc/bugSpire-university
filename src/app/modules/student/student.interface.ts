import { Types } from 'mongoose';
import { TGender } from '../../interface/global.interface';

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  fullName: string;
  gender: TGender;
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  presentAddress: string;
  profileImg?: string;
  admissionSemester: Types.ObjectId;
  academicDepartment: Types.ObjectId;
  isDeleted: boolean;
};
