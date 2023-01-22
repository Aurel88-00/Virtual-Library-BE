import { Request, Response } from "express";
import { IBookController } from "../interfaces/book-controller.interface";
import { IBookModel } from "../interfaces/book-model.interface";
import bookService from "../services/book.service";
import { errorHandler } from "../utils/errorHandler";

class BookController implements IBookController {
    getAllBooks = async (req: Request, res: Response) => {
        try {
            const books = await bookService.getAllBooks();
            res.status(200).json({
                success: true,
                books
            })
        } catch (error) {
            errorHandler(error, res)
        }
    }
    getBookById = async (req: Request, res: Response) => {
        const id = req.params.id as string;
        try {
            const book = await bookService.getBookById(id);
            res.status(200).json({
                success: true,
                book
            })
        } catch (error) {
            errorHandler(error, res)
        }
    }

    addBook = async (req: Request, res: Response) => {
        const { name, author, year, description } = req.body as IBookModel
        try {
            const book = await bookService.addBook(name, author, year, description);
            res.status(201).json({
                success: true,
                book
            })
        } catch (error) {
            errorHandler(error, res)
        }
    }

    updateBook = async (req: Request, res: Response) => {
        const { name, author, year, description } = req.body as IBookModel
        const id = req.params.id as string;
        try {
            const book = await bookService.updateBook(id, name, author, year, description);
            res.status(200).json({
                success: true,
                book
            })
        } catch (error) {
            errorHandler(error, res)
        }
    }

    deleteBook = async (req: Request, res: Response) => {
        const id = req.params.id as string;
        try {
            await bookService.deleteBook(id);
            res.status(200).json({
                success: true,
                message: 'Record Deleted Successfully!'
            })
        } catch (error) {
            errorHandler(error, res)
        }
    }

};

const bookController = new BookController();

export default bookController;