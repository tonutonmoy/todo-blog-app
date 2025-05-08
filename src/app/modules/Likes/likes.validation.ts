import z from 'zod';

const createLike = z.object({
  body: z.object({
    blogId: z.string({
      required_error: 'Blog ID is required!',
    }),
    
    isLike: z.boolean({
      required_error: 'Like boolean is required!',
    }),
  }),
});

export const LikeValidations = {
  createLike,
};
