const router = require('express').Router();
const fs = require('fs');
const notes = require("../db/notes.js");

// route to get /api/notes
router.get('/api/notes', function (req, res) {
    notes.getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err))
})
// route to post /api/notes
router.post('/api/notes', function (req, res) {
    notes.addNotes(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err))
})


module.exports = router;
