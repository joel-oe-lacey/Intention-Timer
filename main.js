
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

startButton.addEventListener("click", function() {
    valueEntered(goalInput, goalWarning);
});
