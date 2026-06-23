import { Router } from "express";
import { deleteUser, getallUsers, getUserbyid, loginUser, registerUser, updateUser } from "../controllers/userController.js";
import userValidation from "../middlewares/user.validator.js";

const userRoutes = Router()
// register user
userRoutes.post('/register',userValidation,registerUser)

// login user
userRoutes.post('/login',userValidation,loginUser)

// get all users
userRoutes.get('/',getallUsers)

// get user 
userRoutes.get('/:id',getUserbyid)

// update user 
userRoutes.patch('/:id',updateUser)

// delete user 
userRoutes.delete('/:id',deleteUser)



export default userRoutes