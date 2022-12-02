// Requiring the dependencies 
const express = require('express');

// Will initialze app variable
const app = express();

// environment variable
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is available at http://localhost:${PORT}`)
})










