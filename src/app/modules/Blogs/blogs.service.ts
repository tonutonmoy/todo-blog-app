import prisma from '../../utils/prisma';
import { IBlog } from './blogs.interface';

const createBlogIntoDB = async (payload: IBlog|any) => {
  const result = await prisma.blog.create({
    data: payload,
  });
  return result;
};

const getAllIntoDB = async () => {
  const result = await prisma.blog.findMany({
    include: {
      author: true,
      comments: true,
      likes: true,
    },
  });
  return result;
};

const getSingleIntoDB = async (id: string) => {
  const result = await prisma.blog.findUnique({
    where: { id },
    include: {
      author: true,
      comments: true,
      likes: true,
    },
  });
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllIntoDB,
  getSingleIntoDB,
};
