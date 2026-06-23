import { validationResult } from "express-validator";
import User from "../models/userModel.js";


// register user
export const registerUser = async (req, res) => {
    try {

        const error = validationResult(req);

        if (error.array().length > 0) {
            return res.status(400).json(error.array());
        }

        const { name, email, password, Cnfrmpassword } = req.body;

        if (!name || !email || !password || !Cnfrmpassword)
            return res.status(400).json(
                {
                    msg: "Enter all details"
                }
            )


        const existUser = await User.findOne({ email })

        if (existUser)
            return res.status(400).json(
                {
                    msg: "User Already Exists"
                }
            )


        if (password != Cnfrmpassword)
            return res.status(400).json(
                {
                    msg: "Invalid Password"
                }
            )

        const user = await User.create(req.body)

        return res.status(200).json(
            {
                success: true,
                msg: "User Registered", userId: user.id

            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                msg: error.message

            }
        )
    }
}

// login user
export const loginUser = async (req, res) => {
    try {

        const error = validationResult(req);

        if (error.array().length > 0) {
            return res.status(400).json(error.array());
        }

        const { email, password } = req.body;

        const user = await User.findOne({ email })

        if (!user) return res.status(400).json(
            {
                msg: "User not found"
            }
        )

        if (user.password != password) return res.status(400).json(
            {
                msg: "Password is incorrect"
            }
        )
        return res.status(200).json(
            {
                success: true,
                msg: "Login Successfully"
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                msg: error.message
            }
        )
    }
}

// get all users
export const getallUsers = async (req, res) => {
    try {
        const data = await User.find({})
        return res.status(200).json(
            {
                success: true,
                msg: "User Found", data
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

// get user by id
export const getUserbyid = async (req, res) => {
    try {
        const { id } = req.params
        const data = await User.findById(id)
        return res.status(200).json(
            {
                success: true,
                msg: "User Found", data
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

// update users by id
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const data = await User.findByIdAndUpdate(id, req.body)
        return res.status(200).json(
            {
                success: true,
                msg: "User Updated", data

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

// delete user by id
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params

        const data = await User.findByIdAndDelete(id)

        return res.status(200).json(
            {
                success: true,
                msg: "User Deleted", data

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