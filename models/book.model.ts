import  mongoose , { Schema } from "mongoose";
import { IBookModel } from "../interfaces/book-model.interface";

const bookSchema = new Schema<IBookModel>({
      name: {
        type: String,
        unique: true,
        trim: true,
        required: [true, 'Every book should be given a name']
      }, 
      author: {
        type: String,
        trim: true,
        required: [true, 'Every book should have an author']
      },
      year : {
        type: Number,
        required: [true, 'Every book should have its publishing year!']
      },
      description: {
        type: String,
        trim: true,
        required: false
      },
} , { versionKey : false});

export const BookModel = mongoose.model<IBookModel>('book' , bookSchema);