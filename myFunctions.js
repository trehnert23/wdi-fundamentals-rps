/* Temperature Calculator


var temp = process.argv.slice(2);

if ((temp>60) && (temp<80)) {
	console.log("Enjoy the day! Lets have a picnic :)");
}

else if (temp>=80) {
	console.log("Too darn hot! I'm shvitzing over here.");
}

else if (temp<=60) {
	console.log("Brrrr.... no, get back inside!");
}

*/

/* The bridge of death

var answer = process.argv.slice(2);

var answer1 = answer[0];
var answer2 = answer[1];
var answer3 = answer[2];

if (((answer1 === "blue")||(answer1 === "red")||(answer1 === "green")||(answer1 === "yellow")||(answer1 === "purple")||(answer1 === "orange")||(answer1 === "pink"))&&(answer2 === "Assur")&&(answer3 === "24mph")){
	console.log("You may pass");
}
else {
	console.log("You have been cast into the gorge of eternal peril!");
}

*/

/* Rock paper scissors

var choice1 = process.argv.slice(2);
var choice = choice1[0];

var randomNumber = Math.random();

if (randomNumber < 0.33) {
    computerChoice = "rock";
} 
else if (randomNumber < 0.66) {
    computerChoice = "paper";
} 
else {
    computerChoice = "scissors";
}


if (computerChoice === choice) {
	console.log("It's a tie!");
}
else if (((choice === "rock") && (computerChoice === "scissors"))||
	((choice === "paper") && (computerChoice === "rock"))||
	((choice === "scissors") && (computerChoice === "paper"))){
	console.log("Computer chose " + computerChoice + ", you win!");
}
else {
	console.log("Computer chose " + computerChoice + ", you lose...");
}

*/

/* Hello Everybody

var array = process.argv.slice(2);

for (var i = 0; i<array.length; i++){
	console.log("Hello " + array[i]);

}

*/

/* Common Divisor

var numbers = process.argv.slice(2);
var array1 = [];

var n1 = parseInt(numbers[0]);
var n2 = parseInt(numbers[1]);

while(n2<=n1){
	array1.push(n2);
	n2=n2+parseInt(numbers[1]);
}

console.log(array1);


*/

/* Bonus 

var word1 = process.argv.slice(2);
var word = word1[0];
console.log(word);
var array = [];
var array2 = [];

for (var i=0; i < word.length; i++) {
	array.push(word[i]);
}

for (var i=(array.length-1); i>=0; (i-=1)) {
	array2.push(array[i]);
}

finalWord = array2.join([separator = ""]);
console.log(finalWord);

*/

/* Countdown and Countup

var number = process.argv.slice(2);
var n1 = parseInt(number[0]);
var n2 = parseInt(number[0]);

function countDown(num,num2){
    while(num>=0){
        console.log(num);
        num-=1;
    }
    num+=1;
    while((num>=0)&&(num<=num2)){
        console.log(num);
        num+=1;
    }
}

countDown(n1,n2);

*/

var numbers = process.argv.slice(2);
var n1 = parseInt(numbers[0]);
var n2 = parseInt(numbers[1]);

function add(a,b) {
	console.log(a+b);
}

add(n1,n2);
















