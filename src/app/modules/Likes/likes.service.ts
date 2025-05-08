import httpStatus from 'http-status';
import prisma from '../../utils/prisma';
import { ILike } from './likes.interface';
import AppError from '../../errors/AppError';

const createLikeIntoDB = async (payload: ILike | any) => {

  const {blogId,userId}=payload;
  
  const blog = await prisma.blog.findFirstOrThrow({ where: { id: blogId },include:{author:true} });

  if(blog?.author?.id===userId){
    throw new AppError(httpStatus.UNAUTHORIZED, '  author will be cannot like!');
    
  }
  
  
    
  const result = await prisma.like.create({
    data: payload,
  });
  return result;
};

export const LikeServices = {
  createLikeIntoDB,
};

