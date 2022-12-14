// Requiring the dependencies
const express = require("express");
// routes to get api notes/notes html
const apiroutes = require("./routes/getapinotes");
const htmlroutes = require("./routes/getnoteshtml");

// Will initialze app variable
const app = express();

// environment variable
const PORT = process.env.PORT || 3000;

app.use(express.json());
// express app to handle data parsing
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));
app.use('/api', apiroutes);
app.use('/', htmlroutes);

app.listen(PORT, () => {
  console.log(`Server is available at http://localhost:${PORT}`);
});
