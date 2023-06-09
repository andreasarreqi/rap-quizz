# Rap Quiz

![Alt text](assets/images/responsive.PNG)

[Live Web Application Link](https://andreasarreqi.github.io/rap-quizz/)


## Introduction

Welcome to my very own [Rap Quiz](https://andreasarreqi.github.io/rap-quizz/). 

### How To Play
1. Click on the "How To Play" Button
2. After reading the rules/instructions click the "Ready" button.
3. After that you can click "Start Game" button.
4. You only get one chance to choose an answer so choose wisely.
5. Enjoy.

### Features



<details>
<summary>Favicon</summary>

- The icon on the Browser tab next to the website name.
- There to help the user navigate easier through the browser tab.

![Alt text](assets/images/favicon.PNG)

</details>



<details>
<summary>Main Page</summary>

- The main page of the website.
- Consist of a Welcome header, Start Game button and How To Play button and a footer.


![Alt text](assets/images/main-page.PNG)

</details>



<details>
<summary>Start Button</summary>

- The Start Game button.
- When clicked the user can start to play the quiz.

![Alt text](assets/images/start-button.PNG)

</details>



<details>
<summary>How To Play Button</summary>

- The How To Play button.
- When clicked the user can read through the rules/instructions.

![Alt text](assets/images/instructions-button.PNG)

</details>




<details>
<summary>Rules</summary>

- Game rules/instructions.
- There so the user has an understanding on how the game works and when ready can click the Ready button.

![Alt text](assets/images/game-rules.PNG)

</details>



<details>
<summary>Quiz Area</summary>

- The actual Quiz Game.
- The quiz area consists of a question, 4 choices to choose from.

![Alt text](assets/images/qui-area.PNG)

</details>




<details>
<summary>Question Number</summary>

- The question count.
- The question count show the questions answered out of 10 questions.

![Alt text](assets/images/question-number.PNG)

</details>



<details>
<summary>Correct Answer score & Modal</summary>

- The Correct answer score.
- Incremented when the right answer is clicked and a congratulating modal is shown.


![Alt text](assets/images/correct-answer.PNG)

![Alt text](assets/images/correct-modal.PNG)

</details>






<details>
<summary>Incorrect Answer score & Modal</summary>

- The Incorrect answer score.
- Incremented when the wrong answer is clicked and a Wrong answer modal is shown along with the correct answer to 
  that particular question.


![Alt text](assets/images/incorrect-answer.PNG)

![Alt text](assets/images/incorrect-modal.PNG)

</details>




<details>
<summary>Game Over</summary>

- The game over pop-up
- Showing the accumulated score and a Play Again button.

![Alt text](assets/images/fame-over.PNG)

</details>




<details>
<summary>Play Again Button</summary>

- Restart game button
- Shown alongside the game over pop-up. Gives the user the choice to play again.


![Alt text](assets/images/play-again.PNG)

</details>



## Technologies used
- HTML 
- CSS
- JavaScript
- Git
- Github



### Future Features
- Add a user tab so the user can input a desired name.

##  Testing 

<details>

<summary>Rap Quiz - Manual Testing</summary>

## Functionality

<table>
  <tr>
   <td>
<strong>Test Label</strong>
</li>
</ol>
   </td>
   <td><strong>Test Action</strong>
   </td>
   <td colspan="2" ><strong>Expected Outcome</strong>
   </td>
   <td><strong>Test Outcome </strong>
   </td>
  </tr>
  <tr>
   <td>Site loading
   </td>
   <td>Navigate to the home
   </td>
   <td colspan="2" >Start and How to play Buttons.
   </td>
   <td>PASS
   </td>
  </tr>
  <tr>
   <td>Access homepage
   </td>
   <td>Instructions before playing the game.
   </td>
   <td colspan="2" >Rules on how to play the game
   </td>
   <td>PASS
   </td>
  </tr>
  <tr>
   <td>Answer question 1
   </td>
   <td>Correct Answer Feedback.
   </td>
   <td colspan="2" >Modal is displayed with the green Tick and congratulating the user and score automatically incremented.
   </td>
   <td>PASS
   </td>
  </tr>
  <tr>
   <td>Answer question 2
   </td>
   <td>Incorrect Answer Feedback.
   </td>
   <td colspan="2" >Modal is displayed with the red X and displaying the correct answer and automatic score incremented.
   </td>
   <td>PASS
   </td>
  </tr>
  <tr>
   <td>Question count
   </td>
   <td>Navigate to any question
   </td>
   <td colspan="2" >Current question number with total question is showed
   </td>
   <td>PASS
   </td>
  </tr>
  <tr>
   <td>Load next question
   </td>
   <td>Answer some question
   </td>
   <td colspan="2" >The next random question is loaded with the options shuffled each time.
   </td>
   <td>PASS
   </td>
  </tr>
  <tr>
   <td>End game
   </td>
   <td>Last Question Answered.
   </td>
   <td colspan="2" >The Game Over message is displayed with a total of the score.
   </td>
   <td>PASS
   </td>
  </tr>
  <tr>
   <td>Game Over.
   </td>
   <td>Game over Pop-up.
   </td>
   <td colspan="2" >Play again button is displayed
   </td>
  <tr>
   <td>Play again
   </td>
   <td>Choose to Play Again
   </td>
   <td colspan="2" >Quiz is reset including the score count.
   </td>
   <td>PASS
   </td>
  </tr>
</table>
<ol>

## Browser Compatibility

The website works on different browsers: <strong>Chrome, Firefox and Edge.</strong>

### Responsiveness

- Responsiveness was tested using: Chrome Dev Tools.

- Responsiveness was  tested using: [AM i Respnsive?](https://ui.dev/amiresponsive?url=https://andreasarreqi.github.io/rap-quizz/)

## User Stories 

All user stories were successfully performed.

1. As a player, I want to read through the rules/instructions quiz.
2. As a player, I want to answer the question with random ordered options.
3. As a player, I want to know if my answer is correct.
4. As a player, I want to know if my answer is incorrect.
5. As a player, I want to know how many questions the game has.
6. As a player, I want to know how many questions I answered in total.
7. As a player, I want to know how many questions I answered correcly.
8. As a player, I want to know how many questions I answered incorrectly.
9. As a player, I want to see my final score and know that the game has finished.
10. As a player, I want to be able to play again.
</details>







## Validator Testing 

<details>
<summary>HTML</summary>
HTML validator.

![Alt text](assets/images/html-validator.PNG)

</details>




<details>
<summary>CSS</summary>
CSS validator.

![Alt text](assets/images/css-validator.PNG)

</details>




<details>
<summary>JavaScript</summary>
JS HINT  validator.

![Alt text](assets/images/jshint.PNG)

</details>




<details>
<summary>Lighthouse</summary>
Lighthouse.

![Alt text](assets/images/lighthouse.PNG)

</details>




<details>
<summary>WAVE</summary>
WAVE validator.

![Alt text](assets/images/WAVE.PNG)

</details>


### Unfixed Bugs / Other

- The only warning was on the JSHint showing that the Swal variable is not defined and there is a Script source  
  link on the HTML file allowing the use of the Modal when an answer is clicked , other than that there were no bugs found.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon 
    display to indicate the successful deployment. 
  - The deployed app can be found [here](https://andreasarreqi.github.io/rap-quizz/)



## Credits 
- [Font Awesome.](https://fontawesome.com/)

    ![Alt text](assets/images/font-awesome.PNG)

- [Makeuseof.com](https://www.makeuseof.com/css-background-gradients/#background-gradients-using-css)  (Linear 
  gradient for background, buttons + Hover)

    ![Alt text](assets/images/linear%20gradient.PNG)

- [SweetAlert 2](https://sweetalert2.github.io/) (Correct & Incorrect Modal)

    ![Alt text](assets/images/correct-modal.PNG)

    ![Alt text](assets/images/incorrect-modal.PNG)

## Acknowledgements
- I would like to thank my mentor Daisy for guiding me.

