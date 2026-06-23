import { Router } from "express";
import { addBook, deleteBook,  getAllBooks, getbookbyId, updateBook } from "../controllers/bookController.js";
import bookValidation from "../middlewares/book.validator.js";

const bookRoutes = Router()
// add book
bookRoutes.post('/add/book', bookValidation, addBook)

// get all books
bookRoutes.get('/', getAllBooks)

// get book 
bookRoutes.get('/:id', getbookbyId)

// update book 
bookRoutes.patch('/:id', updateBook)

// delete book 
bookRoutes.delete('/:id', deleteBook)


export default bookRoutes