import { BookModel } from "../models/book.model";


class BookService {
    getAllBooks = async () => {
        const books = await BookModel.find({});
        return books;
    }
    getBookById = async (id: string,) => {
        const book = await BookModel.findById(id);
        return book;
    }
    addBook = async (name: string, author: string, year: number, description: string | any) => {
        const newBook = await BookModel.create({ name, author, year, description })
        return newBook;
    }
    updateBook = async (id: string, name: string, author: string, year: number, description: string | any) => {
        const book = await BookModel.findByIdAndUpdate(id, { name, author, year, description }, { new: true })
        await book?.save();
        return book;

    }
    deleteBook = async (id: string) => {
        return await BookModel.findByIdAndDelete(id)
    }

}

const bookService = new BookService();

export default bookService;