import express from 'express';
import { AuthRouters } from '../modules/Auth/auth.routes';
import { UserRouters } from '../modules/User/user.routes';
import { BlogRouters } from '../modules/Blogs/blogs.routes';

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

];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
