// INPUT VALIDATION
// Target inputs, warnings and start button
var durationMinutesInput = document.querySelector("#duration-minutes");
var durationMinutesWarning = document.querySelector("#minutes-warning");
var durationSecondsInput = document.querySelector("#duration-seconds");
var durationSecondsWarning = document.querySelector("#seconds-warning");
var goalInput = document.querySelector("#goal-input");
var goalWarning = document.querySelector("#goal-warning");
var activityWarning = document.querySelector("#activity-warning");
var timerSection = document.querySelector(".timer-section");
var taskName = document.querySelector("#taskName");
var timerTime = document.querySelector("#time");
var timerStart = document.querySelector("#timer-start");
var leftSection = document.querySelector(".left-section");
var pageHeader = document.querySelector("#page-header");

var errorLog = [];
var i = 0;
var startButton = document.querySelector("#start-button");

// Define function to check if user inputs number
function numberOnly(inputBox, warning) {
  // Define allowed character set within brackets, in this case only numbers
  // + checks that it matches the character set at least once, ^ and $ make sure the beginning and end match
  var regex = /^[0-9]+$/;
  var testValues = inputBox.value;

  // Warnings start with hidden class, remove this if the user enters a non-number
  if (testValues.match(regex)===null) {
    warning.classList.remove("hide");
    inputBox.value = "";
  } else {
    warning.classList.add("hide");
  }
}

// Define a function to see if the user inputted anything into goal input, or if any other fields are missing
// check to see button press, check to see a number is entered
function valuesEntered(inputBox, warning) {
  var testValues = inputBox.value;
//Check if the user entered any characters to the goal input, if so show warning
//Alternatively show warning if no value is entered
  if(testValues.length === 0) {
    warning.classList.remove("hide");
    // errorLog[i] = warning.innerText;
    // i++;
    return false;
  } else {
    warning.classList.add("hide");
    return true;
  }
}

function allValidation() {
  //need to add a line for activity selection
  var goal = valuesEntered(goalInput, goalWarning);
  var minutes = valuesEntered(durationMinutesInput, durationMinutesWarning);
  var seconds = valuesEntered(durationSecondsInput, durationSecondsWarning);

  //check to see if all values are entered
  if(goal === true && minutes === true && seconds === true) {
    return true;
  } else {
    return false;
  }
}

durationMinutesInput.addEventListener("change", function() {
    numberOnly(durationMinutesInput,durationMinutesWarning);
});

durationSecondsInput.addEventListener("change", function() {
    numberOnly(durationSecondsInput,durationSecondsWarning);
});

startButton.addEventListener("click", function() {
    var validation = allValidation();
});
