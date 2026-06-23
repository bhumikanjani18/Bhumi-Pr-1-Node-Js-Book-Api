import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        lowercase: true
    },
    email: {
        type: String,
        require: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true
    },
    Cnfrmpassword: {
        type: String,
        require: true
    }
})

const User = mongoose.model('user', userSchema)

export default User;