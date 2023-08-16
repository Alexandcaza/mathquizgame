const finalScoreElement = document.getElementById('finalScore');
const playAgainButton = document.querySelector('.btn[href="/gamemult.html"]');
const homeButton = document.querySelector('.btn[href="/"]');

const mostRecentScore = localStorage.getItem('mostRecentScore');
const CONGRATS_SCORE = 70;
const OK_SCORE = 60;
const OK_SCORE2 = 40;
const OK_SCORE3 = 50;
const congratulatoryMessages = [
    "Great job! You nailed it!",
    "Congratulations! You're a math whiz!",
    "Wow, you're on fire! Awesome score!",
    "Superb! Keep up the excellent work!",
    "Fantastic work! Keep challenging yourself!"
];
const okMessages = [
    "Good job! You're on the right track!",
    "Nice effort! Keep practicing to improve!",
    "Not bad! Keep working on your skills!",
    "You're making progress! Keep it up!",
    "You're getting there! Keep challenging yourself!"
];
const encouragementMessages = [
    "Don't worry, practice makes perfect!",
    "Mistakes happen, keep learning!",
    "Keep trying, you'll get better!",
    "Keep practicing, you'll improve!",
    "Don't give up, keep learning and growing!"
];

// Display the score
finalScoreElement.innerText = `${mostRecentScore}/100`;

// Check if the score is over 70 and display a congratulatory message
if (mostRecentScore > CONGRATS_SCORE) {
    const congratsMessage = document.createElement('h2');
    const randomMessageIndex = Math.floor(Math.random() * congratulatoryMessages.length);
    congratsMessage.textContent = congratulatoryMessages[randomMessageIndex];
    document.getElementById('end').insertBefore(congratsMessage, playAgainButton);
}
else if (mostRecentScore == OK_SCORE2) {
    const goodMessage = document.createElement('h2');
    const randomMessageIndex = Math.floor(Math.random() * okMessages.length);
    goodMessage.textContent = okMessages[randomMessageIndex];
    document.getElementById('end').insertBefore(goodMessage, playAgainButton);
}
else if (mostRecentScore == OK_SCORE) {
    const goodMessage = document.createElement('h2');
    const randomMessageIndex = Math.floor(Math.random() * okMessages.length);
    goodMessage.textContent = okMessages[randomMessageIndex];
    document.getElementById('end').insertBefore(goodMessage, playAgainButton);
}
else if (mostRecentScore == OK_SCORE3) {
    const goodMessage = document.createElement('h2');
    const randomMessageIndex = Math.floor(Math.random() * okMessages.length);
    goodMessage.textContent = okMessages[randomMessageIndex];
    document.getElementById('end').insertBefore(goodMessage, playAgainButton);
}
else {
    const encouragementMessage = document.createElement('h2');
    const randomMessageIndex = Math.floor(Math.random() * encouragementMessages.length);
    encouragementMessage.textContent = encouragementMessages[randomMessageIndex];
    document.getElementById('end').insertBefore(encouragementMessage, playAgainButton);
}
