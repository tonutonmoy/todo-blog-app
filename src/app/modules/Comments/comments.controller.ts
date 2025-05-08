import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CommentServices } from './comments.service';

const createComment = catchAsync(async (req, res) => {
  const { userId } = req.user;
  req.body.userId=userId
  const result = await CommentServices.createCommentIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Comment created successfully',
    data: result,
  });
});

export const CommentControllers = {
  createComment,
};
