const person = {
  firstName: 'Partha',
  lastName: 'Ghosh',
  age: 28,
  email: 'partha@gmail.com',
  hobbies: ['football', 'cricket'],
  address: {
    city: 'Naihati',
    state: 'WB'
  },
  // this is reffering to this object.
  // We can declare function within Object
  getBirthYear: function(){
    return 2019 - this.age;
  }
}

let val;

val = person;
val = person.firstName;
val = person.hobbies[1];
val = person.address.city;
val = person.getBirthYear();

console.log(val);

// Arrays of objects
const people = [
  {name: 'Mike', age: 30},
  {name: 'Julian', age: 36},
  {name: 'Partha', age: 28}
]

for(let i=0; i<people.length; i++){
  console.log(people[i].name);
}