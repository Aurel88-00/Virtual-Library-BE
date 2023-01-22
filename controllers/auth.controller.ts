import { Request, Response } from "express";
import { IAuthController } from "../interfaces/auth-controller.Interface";
import { IUserModel } from "../interfaces/user-model.interface";
import jwt from 'jsonwebtoken';
import authService from "../services/auth.service";
import { createToken } from "../utils/createToken";
import { errorHandler } from "../utils/errorHandler";
import { extractToken } from "../utils/extractToken";

export class AuthController implements IAuthController{
    signUp = async (req : Request, res: Response) => {
        const {name, email , password } = req.body as IUserModel; 
        try {
            const newUser = await authService.signup(name, email , password )
            const token = newUser ? createToken(newUser._id) : null
            res.status(201).json({
                success: true,
                token
            })
        } catch (error) {
         errorHandler(error, res)
    }  
    }

    logIn = async (req: Request, res: Response) => {
        const { email, password } = req.body as IUserModel;
        try {
                const user = await authService.login(email, password)
                const token = user ? createToken(user._id) : null;
                res.status(200).json({
                    success: true,
                    token
                })
            
        } catch (error) {
            errorHandler(error, res)
        }
    }
    getMe = async (req: Request , res : Response) => {
        try {
          const token = extractToken(req);
          const decodedToken = jwt.decode(token) as any;
          if(decodedToken){
           const id = decodedToken?.id
           const me = await authService.getMe(id)
           res.status(200).json({
            success: true,
            user: {
                name: me?.name,
                email: me?.email
            }
           })
        }
        } catch (error) {
            errorHandler(error, res)
        }
    }
} 


const authController = new AuthController();


export default authController;