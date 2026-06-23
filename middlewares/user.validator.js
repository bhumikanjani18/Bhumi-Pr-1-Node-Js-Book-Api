import { body } from "express-validator"

const userValidation = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage("Name is required"),
    body('email')
        .trim()
        .notEmpty()
        .withMessage("Email is required.")
        .isEmail()
        .withMessage("Enter proper email"),
    body('password')
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isLength()
        .withMessage("Password must be 8 characters")
        .isStrongPassword()
        .withMessage("Strong Password Required")
]

export default userValidation