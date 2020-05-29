const today = new Date();

let val;
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today;

val = today.getDay();
val = today.getMonth();
val = today.getSeconds();
val = today.getFullYear();

birthday.setDate(5);
birthday.setFullYear(2015);

console.log(val);
console.log(birthday);