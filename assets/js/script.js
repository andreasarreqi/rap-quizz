/*jshint esversion: 6 */
/*jshint -W033 */

// Array of objects with all the questions, options and correct answer
const fullQuestions = [{
        "question": "In which U.S city was the hip hop culture created?",
        "options": ["Chicago", "Los Angeles", "New York City", "Compton"],
        "correct": "New York City"
    },
    {
        "question": "Which actor and rapper is often known as Ice Cube?",
        "options": ["Kanye West", "OShea Jackson", "Calvin Broadus", "Kevin Hart"],
        "correct": "OShea Jackson"
    },
    {
        "question": "Which of the following is not a hip hop group?",
        "options": ["B2K", "Bone Thugz n Harmony", "N.W.A", "Public Enemy"],
        "correct": "B2K"
    },
    {
        "question": "The American hip hop star Dr. Dre also has a popular brand of which product with his name?",
        "options": ["Shoes", "Food", "Headphones", "Clothes"],
        "correct": "Headphones"
    },
    {
        "question": "There are four original elements of hip hop culture: break dancing, deejaying, rapping, and what else?",
        "options": ["Beatboxing", "Graffiti", "Locking", "Blues"],
        "correct": "Graffiti"
    },
    {
        "question": "What is the name of the first album by Jay-Z?",
        "options": ["The Blueprint", "Reasonable Doubt", "Watch the Throne", "Brooklyns finest"],
        "correct": "Reasonable Doubt"
    },
    {
        "question": "The UK number 1 hit “Ghetto Gospel” was a collaboration between Elton John and which hip hop legend?",
        "options": ["Lil Wayne'", "Tupac Shakur", "Eminem", "LL COOL J"],
        "correct": "Tupac Shakur"
    },
    {
        "question": "What was the first rap name of Biggie Smalls, also known as The Notorious B.I.G?",
        "options": ["M.C. Quest", "M.C. Best", "M.C. Jest", "M.C. Cheques"],
        "correct": "M.C. Quest"
    },
    {
        "question": "Which of the following record labels featured famous artists, such as Snoop Dogg, Dr. Dre, and Tupac?",
        "options": ["Def Jam", "Death Row Records", "Roc-A-Fella'", "Bad Boy Records"],
        "correct": "Death Row Records"
    },
    {
        "question": "Which artist holds the record for the most wins in the Grammy Award for Best Rap Artist?",
        "options": ["Nas", "Eminem", "Jay Z", "Snoop Dogg"],
        "correct": "Eminem"
    },
];

// Variables to set the initial state of the game
let currentQuestionIndex = -1;
let questionNumber = 0;

// Wait for the DOM to finish loading before running the game
document.addEventListener('DOMContentLoaded', pageLoaded);

/**
 * The main game 'loop', called when the script is first loaded
 * and after the user's answer has been processed
 */
function pageLoaded() {

    document.getElementById("question-number").innerHTML = questionNumber;

    shuffle(fullQuestions);

    nextQuestion();

    // Add event listeners for user click and get user answer
    getUserAnswer();


}

/** Gets and array and shuffle its elements. */
function shuffle(array) {

    array.sort(() => Math.random() - 0.5);

}

function getUserAnswer() {

    let answers = document.getElementsByClassName("answer");
    for (let answer of answers) {
        answer.addEventListener("click", checkAnswer);
    }

}
/**
 * Check the answer and respond to the user if it is correct or not.
 */
function checkAnswer() {

    const userAnswer = event.target.innerHTML;

    if (userAnswer == fullQuestions[currentQuestionIndex].correct) {
        alert("Correct!");

        incrementScore();
        nextQuestion();
    } else {
        alert("Incorrect");

        incrementWrongAnswer();
        nextQuestion();

    }

}

/** Show the question from fullQuestion. */
function nextQuestion() {

    ++currentQuestionIndex;

    if (currentQuestionIndex < fullQuestions.length) {

        let fullQuestion = fullQuestions[currentQuestionIndex];
        let question = document.getElementById('question');
        question.textContent = fullQuestion.question;

        //Shuffle options.
        shuffle(fullQuestion.options);

        //Grabs the questions and options and displays them.
        let answer1 = document.getElementById("answer1");
        answer1.textContent = fullQuestion.options[0];

        let answer2 = document.getElementById("answer2");
        answer2.textContent = fullQuestion.options[1];

        let answer3 = document.getElementById("answer3");
        answer3.textContent = fullQuestion.options[2];

        let answer4 = document.getElementById("answer4");
        answer4.textContent = fullQuestion.options[3];

    } else {

        gameOver();

    }

}

/**
 * Gets the current score from the DOM and increments it by 1. Increment question number by 1.
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;

    document.getElementById('question-number').innerText = ++questionNumber;

}

/**
 * Gets the current incorrect answers from the DOM and increments it by 1.  Increment question number by 1.
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

    document.getElementById("question-number").innerText = ++questionNumber;

}

/**Displayed The score and play again button when the game finishes.  */
function gameOver() {

    let popup = document.getElementsByClassName('popup')[0];
    popup.style.display = 'block';

    let controlsArea = document.getElementsByClassName('controls-area')[0];
    controlsArea.style.display = 'none';

    let score = parseInt(document.getElementById('score').innerText);
    document.getElementById('score2').innerText = score;

    // Event listener to refresh the page on click button 'Play again'

    const button = document.getElementById('play-again');
    button.addEventListener('click', playAgain);

}

/**Refreshes the page when play again button is clicked */

function playAgain() {

    window.location.reload();

}