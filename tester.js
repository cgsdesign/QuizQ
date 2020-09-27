
      //building form
var nameEnteryEl = document.querySelector("#high-score"); 
var taskIdCounter = 0;
function makePlayerNameForm() { 
    // Create a form synamically 
    var form = document.createElement("form"); 
    form.onsubmit = logScores;// This is the on click checkResponse function call

    // Create an input element for Name
    var PlayerEl = document.createElement("input"); 
    PlayerEl.setAttribute("type", "text"); 
    PlayerEl.setAttribute("name", "player"); 
    PlayerEl.setAttribute("data-task-id", taskIdCounter);


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
var logScores = function(){
    console.log("test")
    taskIdCounter++;
}