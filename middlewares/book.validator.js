import { body } from "express-validator"

const bookValidation = [
    body('title')
        .trim()
        .notEmpty()
        .withMessage("Title is required"),
    body('author')
        .trim()
        .notEmpty()
        .withMessage("Author is required."),
    body('category')
        .trim()
        .notEmpty()
        .withMessage("Category is required."),
    body('price')
        .trim()
        .notEmpty()
        .withMessage("Price is required.")
        .isNumeric()
        .withMessage("Price must be a number")
        .custom((val) => val > 0)
        .withMessage("Price must be greater than 0")
]

export default bookValidation