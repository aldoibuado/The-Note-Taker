const util = require("util");
const fs = require("fs");
const readFileasync = util.promisify(fs.readFile);
const writeFileasync = util.promisify(fs.writeFile);
class Notes {
  constructor() {
    this.idDum = 0;
  }
  read() {
    return readFileasync("db/db.json", "UTF-8");
  }
  write(note) {
    return writeFileasync("db/db.json", JSON.stringify(note));
  }
  getNotes() {
    return this.read().then((notes) => {
      let notesArray;
      try {
        notesArray = [].concat(JSON.parse(notes));
      } catch (error) {
        notesArray = [];
      }
      return notesArray;
    });
  }
  addNotes(note) {
    const { title, text } = note;
    const newNote = { title, text, id: ++this.idDum };
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updateNotes) => this.write(updateNotes))
      .then(() => newNote);
  }
  // bonus to delete notes
  deleteNotes(idDum) {
    console.log(idDum);
    return this.getNotes()
      .then((notes) => notes.filter((note) => note.id != idDum))
      .then((filteredNotes) => { this.write(filteredNotes)
      console.log(filteredNotes);
      });
  }
}

module.exports = new Notes();
