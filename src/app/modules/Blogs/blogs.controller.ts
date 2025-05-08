import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogServices } from './blogs.service';
import { calculatePagination } from '../../utils/calculatePagination';


const createBlog = catchAsync(async (req, res) => {
  const { userId } = req.user;
  req.body.authorId=userId

  const result = await BlogServices.createBlogIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
 
    message: 'Blog created successfully',
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
 
  const{skip,limit,page}=  calculatePagination({})

  const { data, total } = await BlogServices.getAllIntoDB({ skip, limit });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Paginated blogs retrieved successfully',
    meta: {
      limit,
      page,
      total,
      totalPage: Math.ceil(total / limit),
    
    },
    data,
  });
});


const getSingleBlog = catchAsync(async (req, res) => {
  const { userId } = req.user;
  const{skip,limit,page}=  calculatePagination({})
  const { data, total } = await BlogServices.getSingleIntoDB(userId,{ skip, limit });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Paginated blogs retrieved successfully',
    meta: {
      limit,
      page,
      total,
      totalPage: Math.ceil(total / limit),
    
    },
    data,
  });
});

export const BlogsControllers = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
};
