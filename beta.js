// Classes project - in groups of 2, create a class for a type you imagine: Animal, Person, Country...anything!
// Must have 3 methods and 5 properties
// Start with using the functional way of creating an object. If you have time, write it again using the class keyword

//======================Object literals==========================//

//write a literal object that contains at least 3 different properties and one method.

//the object can be anything you want: car, animal, country, person

//add a new property to your object using bracket-notation.

//change one of your object's properties using dot-notation.

//add a new property to your object using bracket-notation and a variable.

//The method can do anything you want. Call it.

//BONUS: write another method that -when called- logs one of the properties to the console using the 'this' keyword.

// write your code below this line

console.log("first ex");

var person = {
		name: 'alma', 
		age: 12,
		likesSport: true,
		printHiPerson: function(){
			console.log(`Hi ${person.name}`);
		}
	};

	person["Hieght"] = 140;

	person.age = 13;

	var favNum = "favNumber";
	person[favNum] = 4;

	console.log(person);//for testing

	person.printHiPerson();

//bonusThing
	// var newMethod = function(object){
	// 	console.log(this.name);
	// }

	// newMethod(person);


//===============================CLASSES====================================//

//write your previous object using a class. Make 3 different instances of your class.

//Also, add and change properties on your object using:

//1. dot notation.
//2. bracket notation.
//3 variable with bracket notation.

//BONUS: write another method that -when called- logs one of the properties to the console using the 'this' keyword.

//write your code here

console.log("\n\nsecond ex");
class Person{
	constructor(name, age, likesSport){
		this.name = name;
		this.age = age;
		this.likesSport = likesSport;
	}

	changesName(){
		return this.name = "Esra";
	}

}


	var myPerson = new Person("Isra", 20, true);

	myPerson.age = 22;

	myPerson["likesSport"] = false;

	var newName = "name";
	myPerson[newName] = "Bara";

	console.log(myPerson);
	console.log(myPerson.changesName());

//===============================functional classes=========================//

//write a function that returns an object (animal, car, person) each time it's called with 3 properties and two methods.

//call your function, and log the returned object to the console.

//write your code here.

console.log("\n\nthird ex");

function Animal(name, favFood, sleepHours){
	var animal = {};
	animal.name = name;
	animal.favFood = favFood;
	animal.sleepHours = sleepHours;

	animal.eats = function() {
    console.log(`${animal.name} always eating XD`);
  };

  animal.plays = function() {
    console.log(`${this.name} never stop playing XD`);
  };
	return animal;
}

console.log(Animal("Sushi", "row meet", 24.7));

//====

//write a class-based function that has three different properties and two methods which returns an object (animal, car, person) each time an instance is made.

//log each one of your instances to the console.

//BONUS: define another method on your class that -when called- logs one of the properties to the console using the 'this' keyword.

//write your cvar newMethod = function(object){
	// 	console.log(this.name);
	// }


	// newMethod(person);ode here.

console.log("\n\nfourth ex");


function Animal(name, favFood, sleepHours){
	this.name = name;
	this.favFood = favFood;
	this.sleepHours = sleepHours;

	this.eats = function() {
    console.log(`${this.name} always eating XD`);
  };

    this.plays = function() {
    console.log(`${this.name} never stop playing XD`);
  };
}


var cat = new Animal("Sushi", "row meet", 24.7);
console.log(cat);
// console.log(cat.name);
// console.log(cat.favFood);
// console.log(cat.sleepHours);
cat.eats();
cat.plays();