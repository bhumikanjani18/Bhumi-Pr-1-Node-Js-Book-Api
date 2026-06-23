import express from "express"
import envConfigs from "./configs/envConfigs.js"
import database from "./configs/database.js"
import bodyParser from "body-parser"
import User from "./models/userModel.js";
import Book from "./models/bookModel.js";
import { validationResult } from "express-validator"
import userRoutes from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

const port = envConfigs.PORT || 8081

const app = express()

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use('/api/user', userRoutes);
app.use('/api/book', bookRoutes);

app.listen(port, (error) => {
    if (!error) {
        console.log("server started")
        console.log("http://localhost:" + port)
    }
})