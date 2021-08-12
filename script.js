 'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!'; //setting/chamgeing the text to something elese

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// Selecting and manupilating Elements
document.querySelector('.guess').value=24;

console.log(document.querySelector('.guess').value);
*/

//const secretNumber = 22;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent=message
}

document.querySelector('.check').addEventListener('click', function () {
    const guess =Number(document.querySelector('.guess').value);
    console.log(guess);
 // When their is no input
    if (!guess) {
        //document.querySelector('.message').textContent = '⛔️ No number!'
        displayMessage('⛔️ No number!')


        //When Player Wins
    } else if (guess === secretNumber) {
        //document.querySelector('.message').textContent = '🎉 Correct Number!'; 
        displayMessage('🎉 Correct Number!')
        
        document.querySelector('body').style.backgroundColor = '#60b347'; // the body is the entire visible part of the website

        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //When Guess is wrong
    } else if (guess !== secretNumber) {
        
         if (score > 1) {
           // document.querySelector('.message').textContent = guess > secretNumber ?'📈Too High!' :'📉Too Low!' ; // refactor used turnkey   
           displayMessage(guess > secretNumber ?'📈Too High!' :'📉Too Low!')
            score--;
            document.querySelector('.score').textContent = score;
        } else { 
             //document.querySelector('.message').textContent = '👎🏽 You Lost the Game!'; 
             
                     displayMessage('👎🏽 You Lost the Game!')

            document.querySelector('.score').textContent = 0;
}
        
    }
//     //When Guess is to High
//     else if (guess > secretNumber) {   
        
//         if (score > 1) {
//             document.querySelector('.message').textContent = '📈Too High!'; 
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else { 
//             document.querySelector('.message').textContent = '👎🏽 You Lost the Game!'; 
//             document.querySelector('.score').textContent = 0;
// }
//         //When guess is too low
//     } else if (guess < secretNumber) {
        
//         if (score > 1) {
//             document.querySelector('.message').textContent = '📉Too Low!'; 
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else { 
//             document.querySelector('.message').textContent = '👎🏽 You Lost the Game!'; 
//             document.querySelector('.score').textContent = 0;
// }
//     }
})


document.querySelector('.again').addEventListener('click', function () { // known as a handler (anonymous)function(becouse it doesnt have a name and noramlly a function gets assigned to a variable) as the event listener takes in a function
    

   // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...')
    
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
     document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = "?";
})


