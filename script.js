//object literals

/*var person = {
	name: 'Isra',
	age: 20,
	occupation: 'student',
	talk: function(){
		console.log('Isra plays');
	}//function withen an object is method
};
person.name = "bara"; //wallahi mnha XD
person['name'] = 'Melanie';

person.sing = function(){
	console.log('isra sings');
};

console.log(person);
*/

// classes
//ES6
/*class Person{
	constructor(name, age, occupation){
		this.name = name;
		this.age = age;
		this.occupation = occupation;//this the keyWord that set on the object
	}//method gives properties to our object


	breath(){
		console.log(`${this.name} is breathing`);
	}//its a function but without the keyWord function


}
//instances
var chef = new Person('Jhon Smith', 23, 'Cook');
var teacher = new Person('Melanie Gen', 25, 'Teacher');

console.log(chef);
console.log(teacher);//creat an empty object... then tells this that this is your values... then it tells the constructor to fill these values withen

chef.breath();
teacher.breath();*/

//functional classes //the old way of classes
//ES5

function Person(name, age, occupation){
	this.name = name;
	this.age = age;
	this.occupation = occupation;
}

var teacher = new Person('Samantha', 25, "Teacher");//without the new word it will console log undefiend because the Person function returns nothing

console.log(teacher);
changesName
//second way to do the above

function Developer(name, age, position){
	var person = {};
	person.name = name;
	person.age = age;
	person.position = position;
	return person;
}

var maha = Developer('Maha', 22, 'Assestant');

console.log(maha);

