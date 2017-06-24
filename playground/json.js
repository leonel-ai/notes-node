// var obj = {
//   name: 'Andrew'  
// };
// var stringObj = JSON.stringify(obj); // converts JSON obj to string
// console.log(typeof stringObj);
// console.log(stringObj)

// var personString = '{"name": "Andrew", "age": 25}'; // properties require double quotes in JSON
// var person = JSON.parse(personString); // converts string back into original form - obj
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

//TO SAVE A NOTE
var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote); // convert obj to string
fs.writeFileSync('notes.json', originalNoteString); // sync contents to json file

//TO READ A NOTE
var noteString = fs.readFileSync('notes.json'); // read contents in json file
var note = JSON.parse(noteString); // convert back to obj


console.log(typeof note); // outputs obj
console.log(note.title); // outputs contents of note title