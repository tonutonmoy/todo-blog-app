import { IBlog } from "../Blogs/blogs.interface";
import { IUser } from "../User/user.interface";


export interface ILike {
  id: string;
  blogId: string;
  isLike: boolean;
  blog: IBlog;
  userId: string;
  user: IUser;
}
