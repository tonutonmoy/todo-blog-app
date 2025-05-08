import { IBlog } from '../Blogs/blogs.interface';
import { IUser } from '../User/user.interface';


export interface IComment {
  id: string;
  content: string;
  blogId: string;
  blog: IBlog;
  userId: string;
  user: IUser;
  createdAt: Date;
}
