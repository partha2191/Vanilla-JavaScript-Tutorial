class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getFullYear() - 1970)
  }

  getsMarried(newlastName) {
    this.lastName = newlastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person('Mary', 'Doe', '07-21-1991');


console.log(mary.greeting());
console.log(mary.calculateAge());

mary.getsMarried('Williamson');

console.log(mary);
console.log(mary.greeting());

console.log(Person.addNumbers(2, 4));