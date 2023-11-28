import express from "express";
import { Book } from "../models/book.model.js";


const createBook = async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res
                .status(400)
                .send({ msg: "send all required fields: title, author, publishYear" });
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const book = await Book.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ msg: error.message });
    }
};

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({ books });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ msg: error.message });
    }
};

const getBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id); // passing 'id' as a string type
        // const book=await Book.findOne({_id:id}); // passing 'id' as a object type
        if (!book) {
            return res.status(404).json({ msg: `No book found` });
        }
        return res.status(200).json({ book });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ msg: error.message });
    }
};


const updateBook = async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                msg: "send all required fields: title, author, publishYear",
            });
        }

        const { id } = req.params;

        // const result=await Book.findOneAndUpdate({_id:id,})
        const result = await Book.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ msg: `Book Not Found` });
        }

        return res.status(200).json({ msg: `Successfully Updated the book` });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ msg: error.message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;

        // const result=await Book.findOneAndUpdate({_id:id,})
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ msg: `Book Not Found` });
        }
        return res
            .status(200)
            .json({ msg: `Successfully deleted the book`, deletedBook: result });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ msg: error.message });
    }
};



export {
    createBook,
    getAllBooks,
    getBook,
    updateBook,
    deleteBook,
};