//make HTML - include High score, Time, start button, question
//identify start button to link click event
//make click event start timer :
// make run-quiz function : link to click evernt , link timer && start quiz -timer many need to be linked to existing HTML tag - and start questions rolling
//make check-question function : if else - if corect give points and go to next question, else subtract time, notify wrong
//make test-if-done function : when questions === 0 || timer === 0 notify game over
//make completed-score function : alert final score and log it in storage - ask for initals to score
//check storage and add score into high scores list
//link updated high scores to click event an high scores button.
//create variables
//
//-------switch, function, task id, 


//Quiz questions 
//---------NOTE: array in list in array , this is important for 4 loop & quizQuestionEl++
var quizQuestionEl = [
    
{question:"1 is true?",answer:"yes",
        option: [
        "yes",
        "no",
         "maybe",
         "definitly not"
] },
    { question:"2 is true?",answer:"yes",
    option: [ 
         "yes",
         "radish",
        "dog",
        "dream"
    ]
},
    { question:"3 is true?",answer:"yes",
    option: [
         "yes",
         "no",
         "q",
         "z"
    ]
}
];

var mainStartButtonEl = document.querySelector("#startButton");
var questionIndex = 0;
var score = 0;
var options = quizQuestionEl[questionIndex].option;
var questionAnswer = quizQuestionEl[questionIndex].answer;
var timeLeft = 200;
var questionBoxEl = document.querySelector("#questions")//find box
var singleQuestionEl = document.createElement("h4");//define
var timerEl = document.getElementById('timer');
//var subQuestionChoicesEl = document.querySelector("#startButton");

//questionIndex++
//check to see if you reached last question
//if end game
//else startquiz()




//start function
var startQuiz = function() {
    startTimer()
    generateQuestion()          
}

//generate question function
function generateQuestion(){
        questionBoxEl.innerHTML = ""; //CLEAR!!!!!! so can append in new question
    if ( questionIndex < quizQuestionEl.length){
        singleQuestionEl.textContent = quizQuestionEl[questionIndex].question;//give question content
        questionBoxEl.appendChild(singleQuestionEl);//put in box on page 
    
        //print answers to screen loop
        for (let i = 0; i < options.length; i++) {
            var choice = document.createElement("button");

            choice.setAttribute("value", options[i]);
            choice.setAttribute("class", "option-button")
            choice.onclick = checkResponse;// This is the on click checkResponse function call
            choice.textContent = options[i];
            questionBoxEl.appendChild(choice)
        }
        return
    }
    else {
        stopQuiz()

    }
} 

//check if question chosen is correct. 
//---------this.value generates equivelent of eventListener!!!!!!!
function checkResponse(){
    var response = this.value;
    if(response !== questionAnswer){
                //subtract time 
                timeSubtractionTime();
                console.log("if is happening");
                return
    }
    else{
        questionIndex++;//move ahead cue to next question
        score++;//increase score
        generateQuestion();//start next question
    }
}

//subtract time for wrong answer
function timeSubtractionTime(){
    questionTimeLeft=timeLeft - 10;
    timeLeft=questionTimeLeft;
    timerEl.textContent = timeLeft;
    return(timeLeft)
    //Check timer, make sure its not at zeroreturn
}

//timer function
function startTimer(){
      var timeInterval = setInterval(function() {
        if (timeLeft === 1000000) {
            return}
        else if (timeLeft > 1) {
          timerEl.textContent = timeLeft;
          timeLeft = timeLeft -1;
        } else {
          timerEl.textContent = 'Times up!';
          clearInterval(timeInterval);
          stopQuiz()
        }
      }, 1000);
    }
//stopQuiz function
function stopQuiz(){
 console.log("End of quiz!!!!");
 timeLeft= 1000000;
 timerEl.textContent = 'Nice Job!';
 questionBoxEl.innerHTML = ""; //CLEAR!!!!!! so can append in new question
 singleQuestionEl.textContent = "Your final score is " + score*10 + ".";//give question content
 questionBoxEl.appendChild(singleQuestionEl);//put in box on page 
}
//record highscore function
function highScore(){

}


mainStartButtonEl.addEventListener("click", startQuiz)

//for this challenge, we will need to print to screen not alert 
//4.5.6 - must mirror past create El
//html DOM info field