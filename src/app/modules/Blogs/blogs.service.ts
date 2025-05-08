import prisma from '../../utils/prisma';
import { IBlog } from './blogs.interface';

const createBlogIntoDB = async (payload: IBlog|any) => {
  const result = await prisma.blog.create({
    data: payload,
  });
  return result;
};

const getAllIntoDB = async ({ skip, limit }: { skip: number; limit: number }) => {
  const data = await prisma.blog.findMany({
    skip,
    take: limit,
    include: {
      author: true,
      comments: true,
      likes: true,
    },
  });

  const total = await prisma.blog.count();

  return { data, total };
};

const getSingleIntoDB = async (
  id: string,
  { skip, limit }: { skip: number; limit: number }
) => {
  const result = await prisma.blog.findMany({
    where: { authorId: id },
    skip,
    take: limit,
    include: {
      author: true,
      comments: true,
      likes: true,
    },
  });

  const total = await prisma.blog.count({
    where: { authorId: id },
  });

  return {
    data: result,
    total,
  };
};


export const BlogServices = {
  createBlogIntoDB,
  getAllIntoDB,
  getSingleIntoDB,
};
