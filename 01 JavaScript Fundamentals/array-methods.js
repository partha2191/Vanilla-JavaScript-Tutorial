const number = [20, 52, 85, 45, 96, 35];
const number2 = new Array(45, 52, 65, 85, 96);
const fruits = ['apple', 'banana', 'onion', 'mango'];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Checks if is array
val = Array.isArray(number);
// Insert into array
number[2] = 100;
// Find index of value
val = number.indexOf(35);

// Mutating Array
// Add on to end
number.push(250);
// Add on to front
number.unshift(120);
// Remove from end
number.pop();
// Remove from front
number.shift();

// Concatenate array
val = number.concat(number2);

// Sorting Array
val = fruits.sort();
val = number.sort();

// Use the compare function
// ASC order
val = number.sort(function(x, y){
  return x-y;
});
// DESC order
val = number.sort(function(x, y){
  return y-x;
});

// Find Function
function over50(num){
  return num>50
}

val = number.find(over50);

// console.log(number);
console.log(val);
console.log(123);