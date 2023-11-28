import express from "express";
import { Book } from "../models/book.model.js";
import {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook
} from "../controllers/book.js";
const router=express.Router();


// Route for save a new book
// get all books list
router.route('/').post(createBook).get(getAllBooks)

// get one book by id
// Update book by id
// Delete book by id
router.route('/:id').get(getBook).put(updateBook).delete(deleteBook)

// router.get("/:id", );

// router.put("/:id", );
// router.delete("/:id", );

export default router;