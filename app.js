const fs = require('fs');
const _ = require('lodash'); // underscore is common lodash var name
const yargs = require('yargs');
// good to include space between ^^ 3rd party mods and your own mods below
const notes = require('./notes.js'); // stores exports from notes.js

const titleOptions = {
    describe: 'Title of note',
    demand: true, // determines whether arg is req'd, default false
    alias: 't' // sets shortcut wn terminal
};

const bodyOptions = {
    describe: 'Title of body',
    demand: true, 
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes') // no args req'd
    .command('read', 'Read a note', {
        title: titleOptions   
    })
    .command('remove', 'Remove note', {
        title: titleOptions})
    .help() // sets up yargs to return useful info when run (using --help flag)
    .argv; // parsed arg arr saved into var for use
var command = argv._[0]; // grabs command using yargs instead of process

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) { // note is obj if works, undefined if didn't
        console.log('Note created.');
        notes.logNote(note);
    } else {
        console.log('Note title taken.');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`)
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title); 
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found'; // condition ? truthy : falsy
    console.log(message);
} else {
    console.log('Command not recognized');
}

