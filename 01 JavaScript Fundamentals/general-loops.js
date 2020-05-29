// FOR Loops
for(let i=0; i<10; i++){
  if(i==2){
    console.log('2 is a number');
    continue;
  }
  if(i==6){
    console.log('Stop the loop');
    break;
  }
  console.log(i);
}

// While Loop
let i=5;
while(i<10){
  console.log(i);
  i++;
}

// Do-While loop
i=100;
do {
  console.log(i);
  i++;
}
while(i<10);

// Loop through array
const cars = ['Audi', 'BMW', 'Bus'];

for(let i=0; i<cars.length;i++){
  console.log(cars[i]);
}

cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
});

// Map
const users = [
  {id:1, name:'jhon' },
  {id:2, name:'kunal'},
  {id:3, name:'kartick'}
];
const ids = users.map(function(user){
  return user.id;
});
console.log(ids);

// For IN loop - Basicaly Used For Objects
const user = {
  firstName: 'Partha',
  lastName: 'Ghosh',
  age: '28'
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}