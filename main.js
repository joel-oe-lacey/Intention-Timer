
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




var study = document.querySelector('#study-button');
var meditate = document.querySelector('#meditate-button');
var exercise = document.querySelector('#exercise-button');
var green = document.querySelector('.green');
var purple = document.querySelector('.purple');
var red = document.querySelector('.blue');
var studyImage = document.querySelector('#study-image');
var meditateImage = document.querySelector('#meditate-image');
var exerciseImage = document.querySelector('#exercise-image');

study.addEventListener('click', function(){
  if  (study.classList.contains("green")) {
    study.classList.remove("green");
    studyImage.src = "assets/study.svg";
    goalWarning.classList.remove("green");
    durationMinutesWarning.classList.remove("green");
    durationSecondsWarning.classList.remove("green");
    durationMinutesInput.classList.remove("green-input");
    durationSecondsInput.classList.remove("green-input");
    goalInput.classList.remove("green-input");
  } else {
    durationMinutesInput.classList.remove("red-input");
    durationMinutesInput.classList.remove("purple-input");
    durationMinutesInput.classList.add("green-input");
    durationMinutesWarning.classList.remove("red");
    durationMinutesWarning.classList.remove("purple");
    durationMinutesWarning.classList.add("green");
    durationSecondsInput.classList.remove("red-input");
    durationSecondsInput.classList.remove("purple-input");
    durationSecondsInput.classList.add("green-input");
    durationSecondsWarning.classList.remove("red");
    durationSecondsWarning.classList.remove("purple");
    durationSecondsWarning.classList.add("green");
    exercise.classList.remove("red");
    exerciseImage.src = "assets/exercise.svg";
    goalInput.classList.remove("red-input");
    goalInput.classList.remove("purple-input");
    goalInput.classList.add("green-input");
    goalWarning.classList.remove("red");
    goalWarning.classList.remove("purple");
    goalWarning.classList.add("green");
    meditate.classList.remove("purple");
    meditateImage.src = "assets/meditate.svg";
    study.classList.add("green");
    studyImage.src = "assets/study-active.svg";
  }
})

meditate.addEventListener('click', function(){
  if  (meditate.classList.contains("purple")) {
    meditate.classList.remove("purple");
    meditateImage.src = "assets/meditate.svg";
    goalWarning.classList.remove("purple");
    durationMinutesWarning.classList.remove("purple");
    durationSecondsWarning.classList.remove("purple");
    durationMinutesInput.classList.remove("purple-input");
    durationSecondsInput.classList.remove("purple-input");
    goalInput.classList.remove("purple-input");
  } else {
    meditate.classList.add("purple");
    meditateImage.src = "assets/meditate-active.svg";
    goalWarning.classList.remove("red");
    goalWarning.classList.remove("green");
    goalWarning.classList.add("purple");
    durationMinutesWarning.classList.remove("red");
    durationMinutesWarning.classList.remove("green");
    durationMinutesWarning.classList.add("purple");
    durationSecondsWarning.classList.remove("red");
    durationSecondsWarning.classList.remove("green");
    durationSecondsWarning.classList.add("purple");
    durationMinutesInput.classList.remove("red-input");
    durationMinutesInput.classList.remove("green-input");
    durationMinutesInput.classList.add("purple-input");
    durationSecondsInput.classList.remove("red-input");
    durationSecondsInput.classList.remove("green-input");
    durationSecondsInput.classList.add("purple-input");
    goalInput.classList.remove("red-input");
    goalInput.classList.remove("green-input");
    goalInput.classList.add("purple-input");
    study.classList.remove("green");
    studyImage.src = "assets/study.svg";
    exercise.classList.remove("red");
    exerciseImage.src = "assets/exercise.svg";
  }
})

exercise.addEventListener('click', function(){
  if  (exercise.classList.contains("red")) {
    exercise.classList.remove("red");
    exerciseImage.src = "assets/exercise.svg";
    goalWarning.classList.remove("red");
    durationMinutesWarning.classList.remove("red");
    durationSecondsWarning.classList.remove("red");
    durationMinutesInput.classList.remove("red-input");
    durationSecondsInput.classList.remove("red-input");
    goalInput.classList.remove("red-input");
  } else {
    exercise.classList.add("red");
    exerciseImage.src = "assets/exercise-active.svg";
    goalWarning.classList.remove("green");
    goalWarning.classList.remove("purple");
    goalWarning.classList.add("red");
    durationMinutesWarning.classList.remove("green");
    durationMinutesWarning.classList.remove("purple");
    durationMinutesWarning.classList.add("red");
    durationSecondsWarning.classList.remove("green");
    durationSecondsWarning.classList.remove("purple");
    durationSecondsWarning.classList.add("red");
    durationMinutesInput.classList.remove("green-input");
    durationMinutesInput.classList.remove("purple-input");
    durationMinutesInput.classList.add("red-input");
    durationSecondsInput.classList.remove("green-input");
    durationSecondsInput.classList.remove("purple-input");
    durationSecondsInput.classList.add("red-input");
    goalInput.classList.remove("green-input");
    goalInput.classList.remove("purple-input");
    goalInput.classList.add("red-input");
    study.classList.remove("green");
    studyImage.src = "assets/study.svg";
    meditate.classList.remove("purple");
    meditateImage.src = "assets/meditate.svg";
  }
})
