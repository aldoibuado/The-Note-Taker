// Requiring the dependencies
const path = require('path');

module.export = (app) => {
 // route to return notes.html
app.get('/notes', (req, res) => {
res.sendFile(path.join(__dirname, 'public/notes.html'))
});

// route to return index.html
app.get('*', (req, res) => { 
res.sendFile(path.join(__dirname, 'public/index.html'))
}); 
};