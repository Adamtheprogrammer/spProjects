//user name to be determined later
let userName = '';
//ternary expression/condition for user name
userName === 'Jane' ? console.log('Hello ' + userName) : console.log('Hello');
//eightball variable to be determined later
let eightBall = '';
//primary question from user
let userQuestion = 'How will the rest of the year fair out?';
//generate random number 0-7 rounded to whole# 
const randomNumber = Math.floor(Math.random() * 8);
//log the question to console
console.log(`The user asked: ${userQuestion}`);

if(randomNumber == 0){
  eightBall = 'It is certain';
  console.log(eightBall);
}else if(randomNumber == 1){
  eightBall = 'It is decidedly so';
  console.log(eightBall);
}else if(randomNumber == 2){
  eightBall = 'Reply hazy try again';
  console.log(eightBall);
}else if(randomNumber == 3){
  eightBall = 'Cannot predict now';
  console.log(eightBall);
}else if(randomNumber == 4){
  eightBall = 'Do not count on it';
  console.log(eightBall);
}else if(randomNumber == 5){
  eightBall = 'My sources say no';
  console.log(eightBall);
}else if(randomNumber == 6){
  eightBall = 'Outlook not so good';
  console.log(eightBall);
}else if(randomNumber == 7){
  eightBall ='Signs point to yes';
  console.log(eightBall);
}else{
  console.log('Your future is picture perfect!');
}



/*
switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    console.log(eightBall);
    break;
  case 1:
    eightBall = 'It is decidedly so';
    console.log(eightBall);
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    console.log(eightBall);
    break;
  case 3:
    eightBall = 'Cannot predict now';
    console.log(eightBall);
    break;
  case 4:
    eightBall = 'Do not count on it';
    console.log(eightBall);
    break;
  case 5:
    eightBall = 'My sources say no';
    console.log(eightBall);
    break;
  case 6:
    eightBall = 'Outlook not so good';
    console.log(eightBall);
    break;
  case 7:
    eightBall = 'Signs point to yes';
    console.log(eightBall);
    break;
  default:
    eightBall = 'Sorry Nothing Now';
    console.log(eightBall);
    break;
}
*/



