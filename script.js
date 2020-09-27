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
var questionBoxEl = document.querySelector("#questions");//find box
var singleQuestionEl = document.createElement("h4");//define
var timerEl = document.getElementById('timer');
var highScoreEl = document.getElementById("#high-score");

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
                singleQuestionEl.textContent = "Please try again.";//give question content
                questionBoxEl.appendChild(singleQuestionEl);//put in box on page 
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
        if (timeLeft === -11111111) {
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


//building form
var nameEnteryEl = document.querySelector("#high-score"); 
var taskIdCounter = 0;
function makePlayerNameForm() { 

    // Create a form synamically 
    var form = document.createElement("form"); 

    // Create an input element for Name
    var PlayerEl = document.createElement("input"); 
    PlayerEl.setAttribute("type", "text"); 
    PlayerEl.setAttribute("name", "player"); 
    PlayerEl.setAttribute("data-task-id", taskIdCounter);

    // Create a submit button 
    var s = document.createElement("input"); 
    s.setAttribute("type", "submit"); 
    s.setAttribute("value", "Submit"); 
    s.onclick = logScores;// This is the on click checkResponse function call


    // Append the player name input to the form 
    form.append(PlayerEl);  
    // Append the button to the form 
    form.append(s);  
    
   nameEnteryEl.appendChild(form); 
}
var logScores = function(){
    console.log("test")
    taskIdCounter++;
}


//stopQuiz function
function stopQuiz(){
    console.log("End of quiz!!!!");
    timeLeft= -11111111;
    timerEl.textContent = 'Nice Job!';
    questionBoxEl.innerHTML = ""; //CLEAR!!!!!! so can append in new question
    singleQuestionEl.textContent = "Your final score is " + score + ".";//give question content
    questionBoxEl.appendChild(singleQuestionEl);//put in box on page 
    makePlayerNameForm()
   }


//record highscore function
function highScore(){

 //   highScoreEl.innerHTML="Enter your name and hit return to save your high score!<input type='text'><input/>";
 //   questionBoxEl.appendChild(highScoreEl);//put in box on page 
 //   questionBoxEl.addEventListener("submit", saveQuiz)
}
function saveQuiz(){
    console.log()
}


//give question content
mainStartButtonEl.addEventListener("click", startQuiz)
questionBoxEl.addEventListener("submit",logScores)

//for this challenge, we will need to print to screen not alert 
//4.5.6 - must mirror past create El
//html DOM info field