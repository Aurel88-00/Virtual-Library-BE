import express, { Router } from 'express';
import authController from '../controllers/auth.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const authRouter: Router = express.Router();

authRouter.post('/signup', authController.signUp)
authRouter.post('/login', authController.logIn)
authRouter.get('/me' , authMiddleware , authController.getMe)

export default authRouter;