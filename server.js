require('dotenv').config()
const bookRoutes = require('./routes/bookRoutes')
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/books', bookRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Connected to DB and listening on port 4000");
    })
})

