import { Model } from "mongoose";

export interface IUserModel{
    _id?: string,
    name?: string;
    email: string;
    password: string;
}
export interface IUserModelStatics extends Model<IUserModel>{
    loginCheck:(email: string , password: string) => any;
 }