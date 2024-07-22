const express = require('express');
const {getAllBooks, createBook, getBook} = require('../controllers/bookController')
const router = express.Router()

router.get('/', getAllBooks);

router.get('/:id', getBook);

router.post('/', createBook);



module.exports = router;