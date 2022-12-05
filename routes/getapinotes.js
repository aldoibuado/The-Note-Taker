const router = require("express").Router();
const notes = require("../db/notes.js");

// route to get /api/notes
router.get("/notes", function (req, res) {
  notes
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});
// route to post /api/notes
router.post("/notes", function (req, res) {
  notes
    .addNotes(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// bonus delete api notes
router.delete("/notes/:id", (req, res) => {
  notes
    .deleteNotes(req.params.idDum)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
