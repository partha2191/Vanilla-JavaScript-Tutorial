
// Person Constructor
function person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);

  this.calculateAge = () => {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getFullYear() - 1970)
  }
}

const partha = new person('Partha', '07-21-1991');
console.log(partha.calculateAge());