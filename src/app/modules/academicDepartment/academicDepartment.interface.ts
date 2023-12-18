import { Types } from 'mongoose';

export type TAcademicDepartment = {
  _id: Types.ObjectId;
  name: string;
  academicFaculty: Types.ObjectId;
};
