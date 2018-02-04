// Loading nodejs module
const fs = require('fs');
// Loading 3rd party Library
const _ = require('lodash');
const yargs =  require('yargs');
const argv = yargs.argv;
// Loading our custom files
const notes = require('./notes.js');

if(argv._[0] === 'add'){
  var note = notes.addNote(argv.title,argv.body);
  if(note){
    console.log("Note Added Successfully");
    notes.logNote(note);
  }else{
    console.log(argv.title," Title Already Exists !!");
  }
}else if(argv._[0] === 'list'){
  var allNotes = notes.getAllNotes();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note)=> notes.logNote(note));
}else if(argv._[0] === 'read'){
  var note  = notes.readNote(argv.title);
  if(note){
    console.log("Note Found Successfully");
    notes.logNote(note);
  }else{
    console.log(argv.title," Node does not Exist !!");
  }
}else if(argv._[0]=== 'remove'){
  var noteRemoved = notes.deleteNote(argv.title);
  var message = noteRemoved ? 'Note was Removed' : 'Note was not found';
  console.log(message);
}else{
  console.log('Command not recognized');
}
