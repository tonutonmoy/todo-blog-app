import prisma from '../../utils/prisma';
import { IComment } from './comments.interface';


const createCommentIntoDB = async (payload: IComment|any) => {
  const result = await prisma.comment.create({
    data: payload,
  });
  return result;
};



export const CommentServices = {
  createCommentIntoDB
};
