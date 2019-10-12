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
    durationMinutesInput.classList.add("green-input");
    durationMinutesWarning.classList.add("green");
    durationSecondsInput.classList.add("green-input");
    durationSecondsWarning.classList.add("green");
    exercise.classList.remove("red");
    exerciseImage.src = "assets/exercise.svg";
    goalInput.classList.add("green-input");
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
    goalWarning.classList.add("purple");
    durationMinutesWarning.classList.add("purple");
    durationSecondsWarning.classList.add("purple");
    durationMinutesInput.classList.add("purple-input");
    durationSecondsInput.classList.add("purple-input");
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
    goalWarning.classList.add("red");
    durationMinutesWarning.classList.add("red");
    durationSecondsWarning.classList.add("red");
    durationMinutesInput.classList.add("red-input");
    durationSecondsInput.classList.add("red-input");
    goalInput.classList.add("red-input");
    study.classList.remove("green");
    studyImage.src = "assets/study.svg";
    meditate.classList.remove("purple");
    meditateImage.src = "assets/meditate.svg";
  }
})
