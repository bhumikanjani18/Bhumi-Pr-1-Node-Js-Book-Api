import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        lowercase: true
    },
    author: {
        type: String,
        require: true,
        lowercase: true
    },
    category: {
        type: String,
        require: true,
        lowercase: true
    },
    price: {
        type: Number
    },
    description: {
        type: String,
    }
})

const Book = mongoose.model('book', bookSchema)

export default Book;