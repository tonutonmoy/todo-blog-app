import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';

import { LikeControllers } from './likes.controller';
import { LikeValidations } from './likes.validation';
const router = express.Router();

router.post(
  '/',auth(),
  validateRequest(LikeValidations.createLike),
  LikeControllers.createLike,
);


export const LikeRouters = router;
