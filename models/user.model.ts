import mongoose, {Schema} from "mongoose";
import { IUserModel,  IUserModelStatics } from "../interfaces/user-model.interface";
import validator from 'validator'
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUserModel , IUserModelStatics>({
    name: {
        type: String,
        required: false,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please enter an email!"],
        validate: [validator.isEmail ,  "Please enter a valid email!"],
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type:String,
        required: [true, "Please enter a password"],
        minlength: [6, "Password should contain at least 6 characters!"],
        trim: true,
    },
}, { versionKey: false});

//Hash the password
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

// Static method to check if the right user is logged in 
userSchema.statics.loginCheck = async function(email: string, password:string){
   const user = await this.findOne({email});
   if(!user){
    throw new Error('User in not registered!')
   }
   const passwordMatch =await bcrypt.compare(password, user.password)
   if(!passwordMatch){
    throw new Error('The password you entered is incorrect!')
   };

   return passwordMatch;

}

export const UserModel =mongoose.model<IUserModel , IUserModelStatics>('user', userSchema)