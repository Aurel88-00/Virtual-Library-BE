import { Request, Response } from "express";

export interface IBookController {
    getAllBooks: (req: Request, res: Response) => Promise<void>
    getBookById: (req: Request, res: Response) => Promise<void>
    addBook: (req: Request, res: Response) => Promise<void>
    updateBook: (req: Request, res: Response) => Promise<void>
    deleteBook: (req: Request, res: Response) => Promise<void>
}