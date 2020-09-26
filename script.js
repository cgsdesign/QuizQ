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
var mainStartButtonEl = document.querySelector("#startButton");
var answerResponseEL = document.querySelector("#option");
//???var questionsBoxEl = document.querySelector("#questions");//grandparent <ul>

//var questionLineEl = questions.createElement("div");
//.forEach



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
         "no",
        "no",
        "no"
    ]
},
    { question:"3 is true?",answer:"yes",
    option: [
         "yes",
         "no",
         "no",
         "no"
    ]
}
] ;


var questionIndex = 0;
var options = quizQuestionEl[questionIndex].option;
var questionAnswer = quizQuestionEl[questionIndex].answer;




//questionIndex++
//check to see if you reached last question
//if end game
//else startquiz()





var startQuiz = function() {
    generateQuestion()         
   
}

function generateQuestion(){
    var questionBoxEl = document.querySelector("#questions")//find box
        questionBoxEl.innerHTML = ""; 
    var singleQuestionEl = document.createElement("h4");//define and put in box
        singleQuestionEl.textContent = quizQuestionEl[questionIndex].question;


   // var questionAnswersEl = document.querySelector("#options")//find questions
    questionBoxEl.appendChild(singleQuestionEl);//put in box   
   
    console.log(options)
    for (let i = 0; i < options.length; i++) {
        var btn = document.createElement("BUTTON");
      
        btn.setAttribute("value", options[i]);
        btn.setAttribute("class", "option-button")
        btn.onclick = checkResponse;
        btn.textContent = options[i];
        questionBoxEl.appendChild(btn)
    }
    checkResponse()   // questionAnswersEl.innerHTML = "<p> quiz
    return
} 

function checkResponse(){
    console.log("working", this.value )
    var response = this.value;
    if(response !== questionAnswer){
        console.log("wrong")
        return
        //subtract time 
        //Check timer, make sure its not at zero
    
    }
    else{
        questionIndex++;
        console.log("right");
        startQuiz()
    }
}




mainStartButtonEl.addEventListener("click", startQuiz)
//pageContentEl.addEventListener("click", taskButtonHandler)

//for our challenge, we will need to print to screen not alert 