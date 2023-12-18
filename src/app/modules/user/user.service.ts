import { TStudent } from '../student/student.interface';

// create a student into DB
const createAStudentIntoDB = async (payload: TStudent) => {
  console.log(payload);
  return payload;
};

export const UserServices = {
  createAStudentIntoDB,
};
