import { Error } from "mongoose"
import { MongoError } from "mongodb"
import { Response } from "express"

export const errorHandler = (error: any, res: Response) => {
    if (error instanceof Error.ValidationError) {
        const messages = Object.values(error.errors).map((err) => err.message);
        return res.status(400).json({
            success: false,
            message: 'Could not create user due to some invalid fields!',
            error: messages,
        });
    } else if ((error as MongoError).code === 11000) {
        return res.status(400).json({
            success: false,
            message: 'A user with this this unique key already exists!',
        });
    }
    return res
        .status(400)
        .json({ success: false, message: 'One or many of your credentials are wrong!' });
}