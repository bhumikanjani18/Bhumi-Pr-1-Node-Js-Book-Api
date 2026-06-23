import { validationResult } from "express-validator";
import Book from "../models/bookModel.js";

// create book
export const addBook = async (req, res) => {
    try {

        const error = validationResult(req);

        if (error.array().length > 0) {
            return res.status(400).json(error.array());
        }

        const data = await Book.create(req.body)
        return res.status(200).json(
            {
                success: true,
                msg: "Book Added", data

            }
        )
    } catch (error) {
        return res.status(400).json(
            {
                success: false,
                msg: error.message

            }
        )
    }
}

// get all books
export const getAllBooks = async (req, res) => {
    try {
        const search = req.query.search || '';
        const page = req.query.page || 1;
        const limit = req.query.limit || 3;
        const skip = (page - 1) * limit;
        const total = await Book.countDocuments();
        const totalPage = Math.ceil(total / limit);

        const data = await Book.find(
            {
                title: {
                    $regex: search,
                    $options: 'i'
                }
            }
        )
            .skip(skip)
            .limit(limit)
            .sort({ title: 1 })
        return res.status(200).json({ success: true, message: "All book data", data, skip, total, limit });
    } catch (error) {
        return res.status(400).json(
            {
                msg: error.message
            }
        )
    }
}

// get book by id
export const getbookbyId = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Book.findById(id)
        return res.status(200).json(
            {
                success: true,
                msg: "Books Found by id", data
            }
        )
    } catch (error) {
        return res.status(400).json(
            {
                success: false,
                msg: error.message
            }
        )
    }
}

// update Book
export const updateBook = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Book.findByIdAndUpdate(id, req.body)
        return res.status(200).json(
            {
                success: true,
                msg: "Books Updated", data
            }
        )
    } catch (error) {
        return res.status(400).json(
            {
                success: false,
                msg: error.message
            }
        )
    }
}

// delete book
export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Book.findByIdAndDelete(id)
        return res.status(200).json(
            {
                success: true,
                msg: "Book Deleted", data
            }
        )
    } catch (error) {
        return res.status(400).json(
            {
                success: false,
                msg: error.message
            }
        )
    }
}