	// Var, let, const
	
	// var name = 'Jhon Doe';
	// console.log(name);
	// name = 'Steve Smith';
	// console.log(name);
	
	// letters, numbers, _, $
	// Can not start with number
	
	// var 1name = 'jhon';
	// var _name = 'Jhon';

	// Multi word vars
	// var firstname = 'jhon'; // Camel case
	// var first_name = 'Sara'; // Underscore case
	// var FirstName = 'Partha'; // Pascal case

	// let, const
	/* 
		let age;
		age = 30; // It can be reassigned so is 'var'
		age = 35;
		console.log(age);

	// Have to assign a value
		const num = 30;  
		//num = 35; // It can't be resigned 
		console.log(num);
	*/
	// We can assign value through array
	/*
		const person = {
			name : 'Jhon',
			age : '30'
		}
		person.name = 'Sara';
		console.log(person);

		const number = [1,2,3,4,5];
		number.push(6);
		console.log(number);
	*/	

	// Datatypes in JavaScript
	// Primitivie Datatypes
	
	//String
	const name = 'Jhon';
	// Number
	const number = 56;
	// Number	
	const rating = 4.5;
	// Boolean	
	const isCool = true;
	// NULL	
	const car = null;
	// Undefined
	const y = undefined;
	// Symbol	
	const sym = Symbol();
	
	// Reference Type - Objects
	// Array
		const hobbies = ['movies', 'playing'];
	// Object literals
		const address = {
			city: 'Boston',
			state: 'MA'
		}	
		const today = new Date();


	console.log(hobbies);
	console.log(typeof address);
	
	/*
		const name = 'jhon';
		const age = 28;
		// Concatenation
		console.log('My name is '+ name +' and age is '+ age);
		
		// Template String
		console.log(`My name is ${name} and age is ${age}`);
		const value = `My name is ${name} and age is ${age}`;

		console.log(value);	
	*/
	
	// Array
	// console.log([1,2,3,4]);
	// Object
	// console.log({a:1, b:2});
	// Table
	// console.table({a:1, b:2});
	// Error
	// console.error('This is an error');
	// Time takes to run the below code
	// console.time('Hello');
	// 	console.log('Hello world');
	// 	console.log('Hello world');
	// 	console.log('Hello world');
	// 	console.log('Hello world');
	// 	console.log('Hello world');
	// 	console.log('Hello world');
	// console.timeEnd('Hello');