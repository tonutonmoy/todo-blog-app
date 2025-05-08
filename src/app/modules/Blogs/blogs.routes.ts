import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';

import { BlogValidations } from './blogs.validation';
import { BlogsControllers } from './blogs.controller';
const router = express.Router();

router.post(
  '/',auth(),
  validateRequest(BlogValidations.createBlog),
  BlogsControllers.createBlog,
);
router.get(
  '/',
  BlogsControllers.getAllBlogs,
);
router.get(
  '/single',auth(),
  BlogsControllers.getSingleBlog,
);



export const BlogRouters = router;
