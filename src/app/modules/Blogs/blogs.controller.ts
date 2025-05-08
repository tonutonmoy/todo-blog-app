import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogServices } from './blogs.service';


const createBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.createBlogIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Blog created successfully',
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllIntoDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Blogs retrieved successfully',
    data: result,
  });
});

const getSingleBlog = catchAsync(async (req, res) => {
  const { userId } = req.user;
  const result = await BlogServices.getSingleIntoDB(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Blog retrieved successfully',
    data: result,
  });
});

export const BlogsControllers = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
};
