import express, { Router } from 'express';
import bookController from '../controllers/book.controller';

const bookRouter: Router = express.Router();

bookRouter.get('/books' , bookController.getAllBooks)
bookRouter.get('/books/:id' , bookController.getBookById)
bookRouter.post('/books' ,  bookController.addBook)
bookRouter.put('/books/:id' , bookController.updateBook)
bookRouter.delete('/books/:id' , bookController.deleteBook)

export default bookRouter;

