let userName = "Giovanni"
userName ? console.log(`Hello ${userName}!`) : console.log("Hello!")

let userQuestion = "Is it going to rain tomorrow?"
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
let eightBalls

if (randomNumber === 0) {
    eightBalls = "It is certain";
} else if (randomNumber === 1) {
    eightBalls = "It is decidedly no";
} else if (randomNumber === 2) {
    eightBalls = "Reply hazy try again";
} else if (randomNumber === 3) {
    eightBalls = "Cannot predict now";
} else if (randomNumber === 4) {
    eightBalls = "Do not count on it";
} else if (randomNumber === 5) {
    eightBalls = "My sources say no";
} else if (randomNumber === 6) {
    eightBalls = "Outlook not so good";
} else if (randomNumber === 7) {
    eightBalls = "Signs point to yes";
} else {
    eightBalls = "Come back tomorrow";
}

console.log(eightBalls);