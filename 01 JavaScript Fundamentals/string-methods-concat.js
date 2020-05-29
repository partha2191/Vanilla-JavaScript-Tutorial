const firstName = 'Partha';
const lastName = 'Ghosh';
const age = 28;
const str = 'Hello we are having a good day';
const tags = 'web desgining, web development, programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName; // '.' is used in PHP

// Append
val = firstName +' ';
val += lastName;

val = 'Hello my name is ' + firstName +' and my age is ' + age;

// Escaping
val = 'That\'s awesome I can\'t wait';

// Length
val = firstName.length;

// concat() Methods
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// IndexOf() - Returns the index number
val = firstName.indexOf('a');
val = firstName.lastIndexOf('a');

// CharAt() - Returns the char
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0,4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = str.split(','); // Gives us the whole array
val = tags.split(',');

// Replace
val = str.replace('Hello', 'Good');

// includes
val = str.includes('loost');

console.log(val);
