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
let currentQuestionIndex = 1;
let questionNumber = 0;

// Wait for the DOM to finish loading before running the game
document.addEventListener('DOMContentLoaded', pageLoaded);

/**
 * The main game 'loop', called when the script is first loaded
 * and after the user's answer has been processed
 */
function pageLoaded() {
    document.getElementById("question-number").innerHTML = currentQuestionIndex;
}