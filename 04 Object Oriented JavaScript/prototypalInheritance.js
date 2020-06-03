// Person Constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
} 

// Greeting
Person.prototype.gretting = function() {
  return `Hello ${this.firstName} ${this.lastName}`;
}

// Create Person
const person1 = new Person('Jhon', 'Doe');

console.log(person1.gretting());

// Customer constructor
function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer prototype returns customer
Customer.prototype.constructor = Customer;

// Create Customer
const customer1 = new Customer('Tom', 'Day', '011254785', 'Standard');

// Customer Greeting
Customer.prototype.gretting = function () {
  return `Hello ${this.firstName} ${this.lastName} welcome to the company`;
}

console.log(customer1);
console.log(customer1.gretting());