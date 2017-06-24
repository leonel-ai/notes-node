var person = {
    name: 'Andrew',
};

person.age = 25;

debugger; // node inspector will stop here using 'c'

person.name = 'Mike';

console.log(person);