const fs = require('fs');

var fetchNotes = () =>{
  // Putting try-catch to make sure read error is handled when file is not present
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  }catch(e){
    return [];
  }
};

var saveNotes = (notes) =>{
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

// Adding the Specified Note
var addNote = (title,body)=>{
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  // Make sure duplicate notes are not saved.
  var duplicateNotes = notes.filter((note) => note.title === title);
  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}
// Returning complete list of Notes
var getAllNotes = ()=>{
  return fetchNotes();
}
// Reading the Specific Note
var readNote = (title)=>{
  var notes = fetchNotes();
  var matchingNote = notes.filter((note) => note.title === title);
  return matchingNote[0];
}
// Deleting the Specified Note matching title
var deleteNote = (title)=>{
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
}

var logNote = (note) =>{
  console.log('--');
  console.log(`Title:${note.title}`);
  console.log(`Body:${note.body}`);
};


module.exports = {
  addNote,
  getAllNotes,
  readNote,
  deleteNote,
  logNote
};
