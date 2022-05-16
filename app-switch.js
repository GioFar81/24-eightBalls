let userName = "Giovanni"
userName ? console.log(`Hello ${userName}!`) : console.log("Hello!")

let userQuestion = "Is it going to rain tomorrow?"
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
let eightBalls

switch (randomNumber) {
    case 0:
        eightBalls = "It is certain";
        break;
    case 1:
        eightBalls = "It is decidedly so";
        break;
    case 2:
        eightBalls = "Reply hazy try again";
        break;
    case 3:
        eightBalls = "Cannot predict now";
        break;
    case 4:
        eightBalls = "Do not count on it";
        break;
    case 5:
        eightBalls = "My sources say no";
        break;
    case 6:
        eightBalls = "Outlook not so good";
        break;
    case 7:
        eightBalls = "Signs point to yes";
        break;
    default:
        eightBalls = "Come back tomorrow";
        break;
}

console.log(eightBalls);