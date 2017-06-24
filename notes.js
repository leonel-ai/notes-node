const fs = require('fs');

var fetchNotes = () => {
    // try catch statement to fetch files and test for errors
    try {
        var notesString = fs.readFileSync ('notes-data.json');
        return JSON.parse(notesString); // will no longer remove notes already in json file when add new note
                                        // parses string into array 
    } catch (e) {
        // runs if one of error in try occurs
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes)); // save notes to the screen
};

// create static variables
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title); // ensure all titles are unique

    if (duplicateNotes.length === 0) { // check length > 0, don't save note
        notes.push(note); // update notes with new note
        saveNotes(notes);
        return note; // returned to whoever calls main function, in this case app.js
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filterNotes = notes.filter((note) => note.title === title);
    return filterNotes[0];
};

var removeNote = (title) => {
    // fetch notes
    var notes = fetchNotes();
    // filter notes, remove one with title of argument
    var filterNotes = notes.filter((note) => note.title !== title);
    // save new notes array
    saveNotes(filterNotes);

    return notes.length !== filterNotes.length;
};

var logNote = (note) => {
    debugger; // break on this line and use repl to output note
    // use read command with --title
    console.log('---');
    console.log(`Title: ${note.title}`); // ES6 vs ES5 concat
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote, // in ES6 if key/value same, just list once
    getAll,
    getNote,
    removeNote,
    logNote
};