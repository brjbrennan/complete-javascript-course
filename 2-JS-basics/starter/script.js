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

/*** Coding Challenge 1 ***/
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

/***IF/ELSE Statements****/
/*
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
*/

//******* Boolean Logic ******/

/*

var firstName = 'John';
var age = 21;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20 ) { //between 13 and 20. Both need to be TRUE
    console.log(firstName + ' is a teenager');
} else if(age >= 20 && age < 30) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a man');
}



//******* Ternary Operator and Switch Statements******/
/*
var firstName = 'John';
var age = 21;

age >= 18 ? console.log(firstName + ' drinks beer')
    : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Switch Statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber');
        break;
    case 'desinger':
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else');
}

var age = 10;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
}
*/

//*** Truthy and Falsy Values and Equality Operators ***/
/*
var height; //undefined is a falsy value
height = 23; // defined is truthy
if (height || height === 0) { //height is defined or 0
    console.log('variable is defined');
}else {
    console.log('Variable has NOT been defined');
}

//Equality operators
if (height == "23") {
    console.log('the == operator does type coercion');
}

//** Coding Challenge 2 */
/*
//Johns team scored 89, 120, and 103 points
//Marks team scored 116, 94, and 123 points
//Marys team 97, 134, 105 points
//Calculate average score for each team and what team has the highest average score
var johnTeamScore, markTeamScore, maryTeamScore;
johnTeamScore = (1 + 1 + 1) / 3;
markTeamScore = (12 + 1 + 1) / 3;
maryTeamScore = (50 + 1 + 1) / 3;
console.log(markTeamScore, johnTeamScore, maryTeamScore);

if (johnTeamScore > markTeamScore && johnTeamScore > maryTeamScore) {
    console.log("John's team wins with " + ' points!');
} else if (markTeamScore > johnTeamScore && markTeamScore > maryTeamScore) {
    console.log("Mark's team wins with " + markTeamScore + ' points!');
} else if (maryTeamScore > johnTeamScore && maryTeamScore > markTeamScore) {
    console.log("Mary's team wins with " + maryTeamScore + ' points!');
} else {
    console.log('Everyone is tied!');
}

*/

//** Functions */
/*
function calculateAge(birthyear) {
    return 2020 - birthyear;
}

var ageJohn = calculateAge(1986);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is retired');
    }
}

yearsUntilRetirement(1986, 'Brian');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

//** */
