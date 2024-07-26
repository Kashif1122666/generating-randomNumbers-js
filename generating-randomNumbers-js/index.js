// Chapter 27: Generating Random numbers

// Method we're gonna discuss in this chapter
// random Math.random();
// random is a function that always return a random number between 0(inclusive) and 1(exclusive).
// always return a number lower than 1.
// always  deliver a sixteen place decimal that ranges form 0.0000000000000000 to 0.9999999999999999

// generating a random Number
// const randomNumber = Math.random();
// console.log(randomNumber);

// converting a randomNumber to an integer 
// There is no such things in js as integer
// we are talking about numbers with no decimal



// var randomNumber = Math.random();
// randomNumber = Math.floor(randomNumber);
// console.log(randomNumber);

// converting to an interger geting whole number
// var randomDecimal = Math.random() ;
// var randomInteger = randomDecimal * 100000000000000000;
// console.log(randomDecimal);
// console.log(randomInteger);

// geting only integer removing all the numbers after decimal point
// var randomNumber = Math.random();
// var integerNumber = Math.floor(randomNumber);
// console.log(integerNumber);

// generating a random number form 0.0000000000000000 to 5.9999999999999999
// var randomNumber = Math.random();
// var randomNumberINRange = randomNumber*6;    //uppler limit will remain exclusive
// console.log({randomNumberINRange,randomNumber});

// genrating interger upto 9
// const n =10;
// const randomNumber = Math.random() * n;
// const randomInteger = Math.floor(randomNumber);
// console.log({randomNumber,randomInteger});

// ludo dice example
// let bigdecimal = Math.random();
// var improvedNumber = bigdecimal*6 +1; //one point something to 6 point something
// let numberOnDice= Math.floor(improvedNumber);
// console.table({bigdecimal,improvedNumber,numberOnDice});

// guess the number 1 to 3 improved version
const randomNumber = (Math.ceil(Math.random()*3));
const  userinput = +prompt("please guess number from 1 to 3");
console.log({randomNumber});

if (userinput === randomNumber){
    alert(`you won! the random number is =  ${randomNumber}`);
    
}else{
    alert(`Try next time! the random number is = ${randomNumber} `);
}





