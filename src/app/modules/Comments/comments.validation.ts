import z from 'zod';

const createComment = z.object({
  body: z.object({
    content: z.string({
      required_error: 'Content is required!',
    }),
    blogId: z.string({
      required_error: 'Blog ID is required!',
    }),
   
  }),
});

export const CommentValidations = {
  createComment,
};
