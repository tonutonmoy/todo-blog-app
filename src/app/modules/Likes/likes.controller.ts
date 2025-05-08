import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { LikeServices } from './likes.service';


const createLike = catchAsync(async (req, res) => {
  const { userId } = req.user;
  req.body.userId=userId
  
  const result = await LikeServices.createLikeIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message:  'liked successfully',
    data: result,
  });
});

export const LikeControllers = {
  createLike,
};
