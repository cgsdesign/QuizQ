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


var mainStartButtonEl = document.querySelector("#startButton");
var ButtonBoxEl = document.querySelector("#Button-Box");
var questionIndex = 0;
var score = 0;
//var options = quizQuestionEl[questionIndex].option;
var questionAnswer = quizQuestionEl[questionIndex].answer;
var timeLeft = 200;
var questionBoxEl = document.querySelector("#questions");//find box
var singleQuestionEl = document.createElement("h4");//define
var timerEl = document.getElementById('timer');
var nameEnteryEl = document.querySelector("#high-score"); 
var enterEl = document.querySelector("#playerFormID"); 
var count = 1;
var taskIdCounter = 0;
var currentItem = document.querySelector("#scoreList");
var correctFalse = document.querySelector("#correct");
//var subQuestionChoicesEl = document.querySelector("#startButton");

var listItem = {
    name: "fill",
    playerScore: "fill",
}

var PlayAgain = function() {
    location.reload();

}

//pull past winners
function pullPastQuizes(){
    count = window.localStorage.getItem("count",count)
    currentItem.innerHTML = ""; //CLEAR!!!!!! so can append in new question
    var listItem = 0;
    for(var i=0; i<count; i++){
        listItem = window.localStorage.getItem("pastPlayer"+i);
       if(listItem !== null){
            var element = document.createElement('li');
            console.log(listItem)
            listItem = listItem.split('"');
            var listItemName = listItem.splice(3,1);//get name
            var listItemScore = listItem.splice(5,1);//get score
            element.textContent = listItemName + listItemScore;//put together
            //element.textContent = listItem.name;
            currentItem.append(element)//currentItem.appendChild(listItem);
       }
        //console.log(listItem.name);
        //}
    }
}

//start function
var startQuiz = function() {
    startTimer()
    ButtonBoxEl.innerHTML ="";
    generateQuestion()          
}

//save the player info as an object and store on local storage 
var logScores = function(){
    var playerNameInput = document.querySelector("input[name='playerName']").value;
    const playerDataObj = {
        name: playerNameInput,
        playerScore: score
    }
    console.log(playerDataObj)
    if (!playerNameInput) {
        alert("Please choose a name.")
        return false
    }
    else{
        console.log(`value of count; ${count}`)
    window.localStorage.setItem("pastPlayer"+count, JSON.stringify(playerDataObj));
    count++;
    console.log(count)
    window.localStorage.setItem("count",count)
    PlayAgain()
    return false
    }
}

//generate question function
function generateQuestion(){
    questionBoxEl.innerHTML = ""; //CLEAR!!!!!! so can append in new question
    var options = quizQuestionEl[questionIndex].option;

    if ( questionIndex < quizQuestionEl.length-1){
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
    if(response !== quizQuestionEl[questionIndex].answer){
                //subtract time 
                timeSubtractionTime();
                // var tryAgain = ""
                // tryAgain.textContent = "Please try again.";//give question content
                // correctFalse.append(tryAgain);//put in box on page 
                return
    }
    else{
        questionIndex++;//move ahead cue to next question
        questionBoxEl.innerHTML = ""; //CLEAR!!!!!! so can append in new question
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
          timeLeft = 0
          clearInterval(timeInterval);
          stopQuiz()
        }
      }, 1000);
    }

//building form
function makePlayerNameForm() { 
    var form = document.createElement("form"); 
    form.setAttribute("id", "playerFormID");
    form.onsubmit = logScores;// This is the on click checkResponse function call

    // Create an input element for Name
    var PlayerEl = document.createElement("input"); 
    PlayerEl.setAttribute("type", "text"); 
    PlayerEl.setAttribute("name", "playerName"); 


    // Create a submit button 
    var s = document.createElement("input"); 
    s.setAttribute("type", "submit"); 
    s.setAttribute("value", "Submit"); 


    // Append the player name input to the form 
    form.append(PlayerEl);  
    // Append the button to the form 
    form.append(s);  

   nameEnteryEl.appendChild(form); 
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
    //enterEl.addEventListener("submit", saveQuiz)
   }

//give question content
mainStartButtonEl.addEventListener("click", startQuiz)
pullPastQuizes()
//for this challenge, we will need to print to screen not alert 
//4.5.6 - must mirror past create El
//html DOM info field