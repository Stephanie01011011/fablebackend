const Book = require('../models/bookModel');
const mongoose = require('mongoose');

//get all books
const getAllBooks = async (req, res) => {
    const books = await Book.find({}).sort({title: "asc"})

    res.status(200).json(books)
}

//get a single book
const getBook = async (req, res) => {
    const {id} = req.params;

    const book = await Book.findById(id);

    if(!book){
        return res.status(400).json({error: "no such book"})
    }
    res.status(200).json(book);
}



//create a book
const createBook = async (req, res) => {
    const {title, author, genre, publisher, pages, price, description} = req.body;

    try {
        const book = await Book.create({title, author, genre, publisher, pages, price, description})

        res.status(200).json(book)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAllBooks,
    createBook,
    
    getBook
}

