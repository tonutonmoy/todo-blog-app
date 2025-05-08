import express from 'express';
import { AuthRouters } from '../modules/Auth/auth.routes';
import { UserRouters } from '../modules/User/user.routes';
import { BlogRouters } from '../modules/Blogs/blogs.routes';
import { CommentRouters } from '../modules/Comments/comments.routes';
import { LikeRouters } from '../modules/Likes/likes.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRouters,
  },
  {
    path: '/users',
    route: UserRouters,
  },
  {
    path: '/blogs',
    route: BlogRouters,
  },
  {
    path: '/Comments',
    route: CommentRouters,
  },
  {
    path: '/Likes',
    route: LikeRouters,
  },

];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
