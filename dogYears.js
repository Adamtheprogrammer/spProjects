//myAge is set to my Age
const myAge = 27;
//this variable is for the early years.
let earlyYears = 2;
//early years is multiplied by 10.5.
earlyYears *= 10.5;
//later years will equal my age - 2.
let laterYears = myAge - 2;
//multiply later years by 4 and reassign var.
laterYears *= 4;
//log early years plus later years for result.
let myAgeInDogYears = earlyYears + laterYears;
//my name in lower case.
const myName = 'AdamiYah'.toLowerCase();

console.log('My name is ' + myName + '. I am ' + myAge + ' years old in human years which is ' + myAgeInDogYears + ' years old in dog years.');

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);