// var nameObj = {
// name : 'Gaurav'
// };
// var nameString = JSON.stringify(obj);
// console.log(nameString);
// console.log(typeof nameString);

// var personString = '{"name":"Gaurav","Age":33}';
// var personObj = JSON.parse(personString);
// console.log(personObj);
// console.log(typeof personObj);


const fs = require('fs');
var originalNote = {
  title: 'Some Title',
  body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var noteObj = JSON.parse(noteString);

console.log(typeof noteObj);
console.log(noteObj.title);
