


/****
 Variable and Data types 
 * 
 **********/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 26;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job); 


/*****
 * Variable Mutation and type Coercion
 ****/
/*
var firstName = 'John';
var age = 28; 

console.log(firstName + ' ' + age)

var job, isMarried;
job = 'Teacher'
isMarried = false

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried); 

//Variable Mutation
age = 'twenty eight';
job = 'Driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried); 

var lastName = prompt('What is his last name?'); 
console.log(firstName + ' ' + lastName); 


/***
 * Basic Operators
 * ***/
/*
var year, yearJohn, yearMark
year = 2018
ageJohn = 28
ageMark = 33
//math operators
yearJohn = year - ageJohn;
yearMark = year - ageMark; 
console.log(yearJohn); 
console.log(year + 2); 
console.log(year / 10); 

//logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder); 

// typeof operator
console.log(typeof johnOlder); 
console.log(typeof 'Mark is Older than John');
console.log(typeof x);



 /***Operator Precedence***/ 
 /*
var now = 2018;
var year = 1989;
var fullAge = 18;
//Multiple Operators
var isFullAge = now - year >= fullAge; //true
console.log(isFullAge); 
/*
//Grouping
var ageJohn = now - year
var ageMark = 35
var average = (ageJohn + ageMark) / 2 ; //32
console.log(average); 
/*
//Multiple Assignments
var x, y;
x=y= (3 +5) * 4 - 6; // 8*4 - 6//32 - 6 //26
console.log(x,y); //y isnt undefined because the precedent for the assignment operators worked from right to left. y = 26 first then x = y
/*
//More operators
x *= 2; 
console.log(x);
x += 10;
console.log(x);
x++; 
console.log(x);
x--; 
console.log(x);
*/

/**
 * Coding Challenge 1
 */
/*
var heightJohn, heightMark, weightJohn, weightMark;
heightJohn = 1.75 ;
heightMark = 1.65;
weightJohn = 100;
weightMark = 98;

var bmiMark, bmiJohn, isHigherBMI; 
bmiMark = weightMark/(heightMark**2); //36
bmiJohn = weightJohn/(heightJohn**2); //32.7
isHigherBMI = bmiMark > bmiJohn // True

console.log(isHigherBMI); 

console.log('Is Mark\'s BMI higher than John\'s?'+ " " + isHigherBMI); 
*/

/**
 * IF/ELSE Statements
 */

 var firstName = 'John';
 var civilStatus = 'single';

 if (civilStatus === 'married') {
     console.log(firstName + ' is married.');
 } else {
     console.log(firstName + ' will hopefully marry soon.');
 }

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' will hopefully marry soon.');
}


var heightJohn, heightMark, weightJohn, weightMark;
heightJohn = 1.75 ;
heightMark = 1.65;
weightJohn = 100;
weightMark = 98;

var bmiMark, bmiJohn, isHigherBMI; 
bmiMark = weightMark/(heightMark**2); //36
bmiJohn = weightJohn/(heightJohn**2); //32.7

if (bmiMark > bmiJohn){
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s');
}










