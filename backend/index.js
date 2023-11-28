import express from "express";
import connectDB from "./db/connect.js";
import mongoose from "mongoose";
// import { Book } from "./models/book.model.js";
import bookRouter from "./routes/bookRoutes.js";
import cors from "cors";
import dotenv from 'dotenv'

dotenv.config();

const app = express();

// middleware for parsing request body
app.use(express.json());


// option 1: allow all origins with default of cors(*)
// app.use(cors({ origin: "http://localhost:5173" }));
app.use(cors());

// option 2: allow Custom Origins
// app.use(cors({
//     origin: "http://localhost:5000",
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// })
// )
app.use("/books", bookRouter);

app.get("/", (req, res) => {
    // console.log(req)
    res.status(201).send(`wwelcome to mern project`);
});

// mongoose
//     .connect(MONGO_URL)
//     .then(() => {
//         console.log(`app connected to MOngoDB`);
//         app.listen(PORT, () => console.log(`Server started at port : ${PORT}`));
//     })
//     .catch((error) => {
//         console.log(error);
//     });


const port = process.env.PORT || 4201;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => console.log(`Server started at ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();