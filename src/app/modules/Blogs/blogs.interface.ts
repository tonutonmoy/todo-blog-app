import { IComment } from '../Comments/comments.interface';
import { ILike } from '../Likes/likes.interface';
import { IUser } from '../User/user.interface';


export interface IBlog {
  id: string;
  title: string;
  content: string;
  authorId: string;
  author: IUser;
  comments: IComment[];
  likes: ILike[];
  createdAt: Date;
  updatedAt: Date;
}