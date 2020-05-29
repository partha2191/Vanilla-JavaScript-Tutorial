const name = 'Jhon';
const age = 30;
const city = 'Miami';
const job = 'Web Developer';

let html;

html = '<ul><li>Name:' + name + '</li><li>age:' + age + '</li><li>City:' + city + '</li><li>Job:' + job + '</li></ul>';

html = '<ul>' +
      '<li> Name: ' + name + '</li>' + 
      '<li> Age: ' + age + '</li>' + 
      '<li> City: ' + city + '</li>' + 
      '<li> Job: ' + job + '</li>' + 
      '</ul>';

function hello(){
  return 'Hello';
}

html = `
  <ul>
    <li> Name: ${name} </li>
    <li> Age: ${age} </li>
    <li> City: ${city} </li>
    <li> Job: ${job} </li>
    <li> ${2+2} </li>
    <li> ${hello()} </li>
    <li> ${age>30 ? 'Over 30' : 'Under 30'} </li>
  </ul>
`;

document.body.innerHTML = html;