import { Response } from "express";
import { UserModel } from "../models/user.model";

class AuthService {
    signup = async (name: string | any, email: string, password: string, ) => {
            const newUser = await UserModel.create({ name, email, password });
            return newUser;
    }
    login = async (email: string, password: string, ) => {
            const userExists = await UserModel.loginCheck(email, password)
            if (userExists) {
                const user = await UserModel.findOne({ email });
                return user;
            }
            else {
                return null;
            }
    }
   getMe = async ( id: string) => {
         const me = await UserModel.findById(id);
         return me;
   }
}

const authService = new AuthService();

export default authService;