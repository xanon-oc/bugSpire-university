import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

// create a student into DB
const createAStudent = catchAsync(async (req, res) => {
  const result = await UserServices.createAStudentIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Student created successfully!',
    data: result,
  });
});

export const UserControllers = {
  createAStudent,
};
