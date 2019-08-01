//Basic Data Types and Functions Worksheet

// Problem One:
// The number type represents both integer and floating point numbers.
// There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.

// 1. Assign a variable n to a number

var n = 99;

// 2. Log the variable n to the console
console.log(n);

// 3. Reassign n to a new number
n = 88;

// 4. Log the variable n into the console again, what happens?
console.log(n);

// 5. Try logging into the console different operations you can perform on n
console.log(n * 76);
console.log(n - 65);
console.log(n / 8 );





// Problem Two:
// A string in JavaScript must be surrounded by quotes. In JavaScript, there are 3 types of quotes.
// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.
// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

// 1. Assign a variable to a string of your choosing
var x = "anything";

// 2. Log this variable into the console.
console.log(x);

// 3. Try adding a number to the your variable, what happens? Why do you think this happens?
// 4. Try adding another string to the other your variable, what happens? Why do you think this happens?
// 5. Console log a string and add the value of the variable n from the previous problem, did you use the addition symbol or backticks? Try both
console.log(`kkkk ${n}`);





// Problem Three:
// The boolean type has only two values: true and false.
// 1. This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.
// 2. Have a variable set to true, then in the next line, set the same variable to false
// 3. Talk to the person next to you on when and why would we use true or false in javascript
var yes = true;
yes = false;


// Problem Four:
// The special null value does not belong to any of the types described above.
// It forms a separate type of its own which contains only the null value:
// The special value undefined also stands apart. It makes a type of its own, just like null.
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined

// 1. Declare a variable with a name of your choosing to null
// 2. Declare a variable with the name of your choosing but 
// do not assign it to anything, try to log this into the console, what appears?
// 3. Discuss with a partner when would we use null, undefined?

var o = null;
var p;
console.log(o);
console.log(p);


// Problem Five:
// The object type is special.
// All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities. 

// 1. Create an object of yourself with your own properties
// 2. Try to log into the console the object
// 3. Can you log individual attributes? How?
// 4. Which situations would it be better to use an object rather than a primitive type of variable data type? When would it be better to use a primitive data type rather than an object? Discuss with a partner

var student = { name: 'w', age: 23, address:"rt" };
console.log(student.age);
console.log(student.name);
console.log(student.address);
console.log(typeof student);



// Extra Credit:
// What is the output for the code below?

let name = "Khader";
console.log(`hello ${1}`); //hello 1

console.log(`hello ${"name"}`); //hello name

console.log(`hello ${name}`);//hello Khader


// Topic 4: Functions

// Write addition function using declaration

function add( x, y){
	return x+y;
}

// Write multiplication function using expression







// Extra Credit: 

// How might you replicate the rock-paper-scissors game that we played yesterday in class?
// Work with a teammate on this question, and we'll review in class






//___________________________________________________________________

// You are invited to work on this challenge in pairs.

////////////////////////////////// PART 1: FUNCTIONS 1-5 ////////////////////////////////////////

//////////////////////////////////
// input: 4 
// output: true

// input: 7
// output: false

// Returns true if number is even and false if number is odd.

/*
function isEven(num) {
if (typeof num !== "number")
	{return "please enter a number";}
if (num %2 == 0 )
	{return true;}
return false ;
}
console.log (isEven (4));
console.log (isEven (7));
//////////////////////////////////
// input: 8
// output: false

// input 15
// output: true

// Returns true if number is divisible by 3 and false if not.
function isDivisibleBy3(num) {
if (typeof num !== "number")
	{return "please enter a number";}
if (num %3 == 0 )
	{return true;}
return false ;
}
console.log (isDivisibleBy3 (8));
console.log (isDivisibleBy3 (15));


//////////////////////////////////
// input: undefined
// output: true

// input: i, where i = 4
// output: false

// returns true if value is undefined and false if not.
var i = 4;
var y ;
function isUndefined(value) {
	if (value == undefined ){
		return true;
	}
	return false;
}
console.log(isUndefined(y));
console.log(isUndefined(i));

//////////////////////////////////
// input: 16
// output: true

// input: 23
// output: false

// returns true if input number is square and false if not.
function isSquareNumber(num) {
	if(num < 0 ) {num = num * -1;}
	if (Math.sqrt(num)%1==0 )//or mod squere of number == 0
		return true;
	return false ;
}
console.log (isSquareNumber (-16));
console.log (isSquareNumber (23));
//////////////////////////////////
// input: [5, 4, 3, 2, 1], 2
// output: [2, 1]

// input: [5, 4, 3, 2, 1], 1
// output: 1

// input: ['a', 'b', 'c'], 2
// output: ['b', 'c']

//Returns the last element of an array. Passing "count" will return the last "count" elements of the array.
//she used Array.slice()
//var result = [];
function last(list, count) {
/*for (var j = list.length; i > 0 ; j--) {
 	for (var i = 0; i < count; i++) {
 		result[i] = list[j]; 
 	}
}
for (var i = 0; i < result.length; i++) {
	return result[i];
/*}*/
/*if(!Array.isArray(list)  || )
return list.slice(list.length - count, list.length);}
console.log (last([5, 4, 3, 2, 1], 2));
console.log (last([5, 4, 3, 2, 1], 1));
console.log (last(['a', 'b', 'c'], 2));


*/

////////////////////////////////// PART 2: FUNCTIONS 6-10 ////////////////////////////////////////

//////////////////////////////////
// input: ['hello', 'goodbye', 'excellent']
// output: ['he', 'go', 'ex']

// gets the first two letters of each word in thelist 
function getFirstTwoLettersOfEachWord(list) {
	for (var i = 0; i < list.length; i++) {	
		list[i] = list[i].slice(0,2);
	}
	return list;
}

console.log(getFirstTwoLettersOfEachWord(['hello', 'goodbye', 'excellent']));
//////////////////////////////////


// input: "Hello Gharam"
// output: "marahG olleH"


// reverses a string input
function reverseString(str) {
	let reversedString = "";
/*//check if input is string
if(typeof str != "String"){
	return "error";
}*/
//reverse strings
	for (var i = 0; i < str.length; i++) {
		reversedString = str[i] + reversedString;
	}
	
	return reversedString;
}
console.log(reverseString("Hello Gharam"));
//////////////////////////////////
// input: [1, 2, 3], 3
// output: true

// input: [1, 2, 3], 8
// output: false

//Returns true if the value is present in the list. 
function contains(list, value) {
	for (var i = 0; i < list.length; i++){
		
if (list[i] == value){
	return true;
}}

return false;
}
console.log(contains([1, 2, 3], 3));
console.log(contains([1, 2, 3], 8));
//////////////////////
// input: [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}], 'name'
// output: ["moe", "larry", "curly"]

// A tool for extracting a list of property values.
var nameArray = [];
var ageArray = [];
function pluck(list, propertyName) {
for (var i = 0; i < list.length;i++){
	nameArray[i] = list[i].name.value;
	ageArray[i] = list[i].age.value;
}

	switch (propertyName){
		case 'name': return nameArray;
		break;
		case 'age' :  return ageArray;
		break;
		default: return;
}
}

console.log(pluck([{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}], 'name'));

/////////////////////////////
// input: [1, 2, 3], 3
// output: 2

// input: ['a', 'b', 'c'], 'a'
// output: 0

// input: ['a', 'b', 'c'], 'e'
// output: -1

//Returns the index at which value can be found in the array, or -1 if value is not present in the array.
function indexOf(list, value) {
	for (var i = 0; i < list.length; i++) {
		if(list[i] == value){
			return i;
		}

	}
return -1;
}
console.log(indexOf([1, 2, 3], 3));
console.log(indexOf(['a', 'b', 'c'], 'a'));
console.log(indexOf(['a', 'b', 'c'], 'e'));