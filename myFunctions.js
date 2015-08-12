/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////




// Temperature Calculator


// var temp = process.argv.slice(2);

// if ((temp>60) && (temp<80)) {
// 	console.log("Enjoy the day! Lets have a picnic :)");
// }

// else if (temp>=80) {
// 	console.log("Too darn hot! I'm shvitzing over here.");
// }

// else if (temp<=60) {
// 	console.log("Brrrr.... no, get back inside!");
// }


/////////////////////////////////////////////////////////


// The bridge of death

// var answer = process.argv.slice(2);

// var answer1 = answer[0];
// var answer2 = answer[1];
// var answer3 = answer[2];

// if (((answer1 === "blue")||(answer1 === "red")||(answer1 === "green")||(answer1 === "yellow")||(answer1 === "purple")||(answer1 === "orange")||(answer1 === "pink"))&&(answer2 === "Assur")&&(answer3 === "24mph")){
// 	console.log("You may pass");
// }
// else {
// 	console.log("You have been cast into the gorge of eternal peril!");
// }


/////////////////////////////////////////////////////////


// Rock paper scissors

// var choice1 = process.argv.slice(2);
// var choice = choice1[0];

// var randomNumber = Math.random();

// if (randomNumber < 0.33) {
//     computerChoice = "rock";
// } 
// else if (randomNumber < 0.66) {
//     computerChoice = "paper";
// } 
// else {
//     computerChoice = "scissors";
// }


// if (computerChoice === choice) {
// 	console.log("It's a tie!");
// }
// else if (((choice === "rock") && (computerChoice === "scissors"))||
// 	((choice === "paper") && (computerChoice === "rock"))||
// 	((choice === "scissors") && (computerChoice === "paper"))){
// 	console.log("Computer chose " + computerChoice + ", you win!");
// }
// else {
// 	console.log("Computer chose " + computerChoice + ", you lose...");
// }


/////////////////////////////////////////////////////////


// Hello Everybody

// var array = process.argv.slice(2);

// for (var i = 0; i<array.length; i++){
// 	console.log("Hello " + array[i]);

// }


/////////////////////////////////////////////////////////


//Common Divisor

// var numbers = process.argv.slice(2);
// var array1 = [];

// var n1 = parseInt(numbers[0]);
// var n2 = parseInt(numbers[1]);

// while(n2<=n1){
// 	array1.push(n2);
// 	n2=n2+parseInt(numbers[1]);
// }

// console.log(array1);


/////////////////////////////////////////////////////////


//Bonus 

// var word1 = process.argv.slice(2);
// var word = word1[0];
// console.log(word);
// var array = [];
// var array2 = [];

// for (var i=0; i < word.length; i++) {
// 	array.push(word[i]);
// }

// for (var i=(array.length-1); i>=0; (i-=1)) {
// 	array2.push(array[i]);
// }

// finalWord = array2.join([separator = ""]);
// console.log(finalWord);


/////////////////////////////////////////////////////////


// Countdown and Countup

// var number = process.argv.slice(2);
// var n1 = parseInt(number[0]);
// var n2 = parseInt(number[0]);

// function countDown(num,num2){
//     while(num>=0){
//         console.log(num);
//         num-=1;
//     }
//     num+=1;
//     while((num>=0)&&(num<=num2)){
//         console.log(num);
//         num+=1;
//     }
// }

// countDown(n1,n2);


/////////////////////////////////////////////////////////


// Recursive Functions

// var number = process.argv.slice(2);
// var n1 = parseInt(number[0]);

// function countDown(num) {
// 	if(num < 0) {
// 		return;
// 	}
// 	else {
// 		console.log(num);
// 		num = num - 1;
// 		countDown(num);
// 	}
// }

// countDown(n1);

/////////////////////////////////////////////////////////


// Thermometer Stretch Challenge

// var number = process.argv.slice(2);
// var kind = number[0];
// var n1 = parseInt(number[1]);

// function temp(type,num) {
// 	if(type === "celcius"){
// 		degreesF = num * (9/5) + 32;
// 		kelF = (num + 273.15);
// 		console.log("C to F " + degreesF);
// 		console.log("C to K " + kelF);
// 	}
// 	else if(type === "fahr"){
// 		degreesC = (num - 32)* (5/9);
// 		kelC = ((num + 459.67)*(5/9));
// 		console.log("F to C " + degreesC);
// 		console.log("F to K " + kelC);
// 	}
// }

// temp(kind,n1);

/////////////////////////////////////////////////////////


// Comparator stretch challenge 

// var number = process.argv.slice(2);
// var type = typeof number[0];
// if(type === "string"){
// 	var n1 = number[0];
// 	var n2 = number[1];
// }
// else if(type==="number"){
// 	var n1 = parseInt(number[0]);
// 	var n2 = parseInt(number[1]);
// }

// function compare(a,b){
// 	if(a>b){
// 		var randomPos = Math.random();
// 		console.log(randomPos);
// 	}
// 	else if(a<b){
// 		var random1 = Math.random();
// 		var randomNeg = (random1 * -1);
// 		console.log(randomNeg);
// 	}
// 	else if(a===b){
// 		console.log(0);
// 	}
// }

// compare(n1,n2);

/////////////////////////////////////////////////////////


//  A man, a plan, a canal: Panama!

// var input = process.argv.slice(2);
// var word = input[0];
// var reverse;

// function isPalindrome(a,b) {
// 	var b = a.split('').reverse().join('');
// 	if(a===b){
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }
// console.log(isPalindrome(word,reverse));


/////////////////////////////////////////////////////////

// Palindrome extra stretchy goal

var input = process.argv.slice(2);
var word = input[0];
var length = word.length;

for(i=0;i<length;i++){
	if(word[i]===word[length-(1*(i+1))]){
		console.log("It's a Palindrome!");
	}
	else{
		console.log("Try again!");
	}
}


///////////////////////////////////////////////////////

























