import mongoose from "mongoose"
import envConfigs from "./envConfigs.js"
const db = async () => {
    try {
        await mongoose.connect(envConfigs.MONGODB_URL)
        console.log("Database Connected")
        
    } catch (error) {
        console.log(error.message)
    }
}

export default db()