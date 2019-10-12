// INPUT VALIDATION
//Target inputs, warnings and start button
var durationMinutesInput = document.querySelector("#duration-minutes");
var durationMinutesWarning = document.querySelector("#minutes-warning");
var durationSecondsInput = document.querySelector("#duration-seconds");
var durationSecondsWarning = document.querySelector("#seconds-warning");
var goalInput = document.querySelector("#goal-input");
var goalWarning = document.querySelector("#goal-warning");
var startButton = document.querySelector("#start-button");

// Define function to check if user inputs number
function numberValidation(inputBox, warning) {
  // Define allowed character set within brackets, in this case only numbers
  // + checks that it matches the character set at least once, ^ and $ make sure the beginning and end match
  var regex = /^[0-9]+$/;
  var testValues = inputBox.value;

  // Warnings start with hidden class, remove this if the user enters a non-number
  if (testValues.match(regex)===null) {
    warning.classList.remove('hide');
    inputBox.value = "";
  } else {
    warning.classList.add('hide');
  }
}

// Define a function to see if the user inputted anything into goal input
function valueEntered(inputBox, warning) {
  var testValues = inputBox.value;

  //Check if the user entered any characters to the goal input, if so show warning, else hide
  if(testValues.length === 0) {
    warning.classList.remove('hide');
  } else {
    warning.classList.add('hide');
  }
}

// Execute functions based on user input field interaction, or start button click
durationMinutesInput.addEventListener("change", function() {
    numberValidation(durationMinutesInput, durationMinutesWarning);
});

durationSecondsInput.addEventListener("change", function() {
    numberValidation(durationSecondsInput, durationSecondsWarning);
});

//Error if user hasn't filled in field or clicked button
  //change number inputs, to have an error under buttons to say select one

//If those cases are passed
  // log the time and goal inputs, and assign to innertext
  //
startButton.addEventListener("click", function() {
    //display warning if clicked, error
    valueEntered(goalInput, goalWarning);
    //swap to timer display if checks pass

    //set userTime, make global or chained nest?
});

// TIMER
var taskPara = document.querySelector("#taskName");
var time = document.querySelector("#time");
var timerStart = document.querySelector("#timer-start");

var inputSeconds = convertInputSeconds();

// Define input times and conver to date format
// Convert user input to seconds for smoother operation
function convertInputSeconds() {
  //Fetch minute and second inputs
  var minutes = durationMinutesInput.value;
  var seconds = durationSecondsInput.value;

  //Convert to seconds
  var totalSeconds = (minutes * 60) + seconds;
  return totalSeconds;
}

// Looped counter and display function
function countDisplay(inputSeconds) {
    // Convert time back to display valuse
    var minutes = Math.floor(inputSeconds / 60);
    var seconds = inputSeconds % 60;

    // Assign display values to innerText
    time.innerText = `${minutes} : ${seconds}`;

    // Decriment by 1
    inputSeconds = inputSeconds - 1;

    // Stop setInterval counter when time hits 0
    if (inputSeconds === 0) {
      clearInterval(counter);
    }
}

// When user clicks start button
// Use setInterval to run each second
// Might need to move this around to adjust variable scope
timerStart.addEventListener("click", function() {
    var counter = setInterval(countDisplay, 1000);
});
