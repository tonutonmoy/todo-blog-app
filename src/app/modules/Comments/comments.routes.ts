import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';

import { CommentControllers } from './comments.controller';
import { CommentValidations } from './comments.validation';
const router = express.Router();

router.post(
  '/',auth(),
  validateRequest(CommentValidations.createComment),
  CommentControllers.createComment,
);


export const CommentRouters = router;
