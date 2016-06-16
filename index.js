//Rock,Paper or Scissors


//Variable for user and for computer using math.random, which assigns a random number between 0 and 1.

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

//Use of if, else if and if statements for conditions according to the math.random results

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

//Function with two parameters that returns the winning choice

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
  else if (choice1 === "rock") {
    
    if (choice2 === "scissors") {
    return "rock wins";
    }
    else {
       return "paper wins";
    }
  }
 else if (choice1 === "paper") {
     if (choice2 === "rock"){
     return "paper wins";
     }
 else {
     return "scissors wins";
 }
 }
 else if (choice1 === "scissors") {
     if(choice2 === "rock") {
         return "rock wins";
     }
 else {
     return "scissors wins"; 
 }   
}
};
console.log (compare(userChoice, computerChoice));

