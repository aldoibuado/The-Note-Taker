// Requiring the dependencies
const express = require("express");
// routes to get api notes/notes html
const apiroutes = require("./routes/getapinotes");
const htmlroutes = require("./routes/getnoteshtml");
// helper method to generate unique ids
const uuid = require('./helpers/uuid');
// Will initialze app variable
const app = express();

// environment variable
const PORT = process.env.PORT || 3001;

// express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use('/api', apiroutes);
app.use('/', htmlroutes);
app.listen(PORT, () => {
  console.log(`Server is available at http://localhost:${PORT}`);
});
