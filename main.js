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

function activitySelected() {
  var studyClass = study.classList.contains("green");
  var meditateClass = meditate.classList.contains("purple");
  var exerciseClass = exercise.classList.contains("red");

  if(studyClass === true) {
    timerStart.classList.add("green");
    return true;
  } else if (meditateClass === true) {
    timerStart.classList.add("purple");
    return true;
  } else if (exerciseClass === true) {
    timerStart.classList.add("red");
    return true;
  } else {
    activityWarning.classList.remove("hide");
    return false;
    }
  }


function allValidation() {
  //need to add a line for activity selection
  var activity = activitySelected();
  var goal = valuesEntered(goalInput, goalWarning);
  var minutes = valuesEntered(durationMinutesInput, durationMinutesWarning);
  var seconds = valuesEntered(durationSecondsInput, durationSecondsWarning);

  //check to see if all values are entered
  if(activity === true && goal === true && minutes === true && seconds === true) {
    return true;
  } else {
    return false;
  }
}

//Swap windows and display timerStart
function toggleTimer(validation) {
  if(validation === true && timerSection.classList.contains("remove")) {
    timerSection.classList.remove("remove");
    leftSection.classList.add("remove");
    taskName.innerText = goalInput.value;
    pageHeader.innerText = "Current Activity";
    time.innerText = `${durationMinutesInput.value} : ${durationSecondsInput.value}`;
  } else {
    timerSection.classList.add("remove");
    leftSection.classList.remove("remove");
    alert("Please fix the errors");
  }
}

// function generateAlert() {
//   var uniqueWarnings = Array.from(new Set(errorLog));
//   for (var i = 0; i < uniqueWarnings.size; i++) {
//     //use string methods to add warnings to single block string
//   }
// }

durationMinutesInput.addEventListener("change", function() {
    numberOnly(durationMinutesInput,durationMinutesWarning);
});

durationSecondsInput.addEventListener("change", function() {
    numberOnly(durationSecondsInput,durationSecondsWarning);
});

startButton.addEventListener("click", function() {
    var validation = allValidation();
    toggleTimer(validation);
    window.inputSeconds = convertInputSeconds();
});

timerStart.addEventListener("click", function() {
  setInterval(function() {
    countDisplay();
  }, 1000);
});

// TIMER

// Define input times and conver to date format
// Convert user input to seconds for smoother operation
function convertInputSeconds() {
  //Fetch minute and second inputs
  var minutes = parseInt(durationMinutesInput.value,10);
  var seconds = parseInt(durationSecondsInput.value);

  //Convert to seconds
  var totalSeconds = (minutes * 60) + seconds;
  return totalSeconds;
}

// Looped counter and display function
function countDisplay() {
    // Convert time back to display valuse
    var minutes = Math.floor(inputSeconds / 60);
    var seconds = inputSeconds % 60;

    // Assign display values to innerText
    if (mi)
    time.innerText = `${minutes} : ${seconds}`;

    // Decriment by 1
    inputSeconds = inputSeconds - 1;

    // Stop setInterval counter when time hits 0
    if (inputSeconds === 0) {
      clearInterval(counter);
    }
}

// COLOR CHANGE
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
    activityWarning.classList.remove("green");
    durationMinutesWarning.classList.remove("green");
    durationSecondsWarning.classList.remove("green");
    durationMinutesInput.classList.remove("green-input");
    durationSecondsInput.classList.remove("green-input");
    goalInput.classList.remove("green-input");
  } else {
    activityWarning.classList.remove("red");
    activityWarning.classList.remove("purple");
    activityWarning.classList.add("green");
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
    activityWarning.classList.remove("purple");
    durationMinutesWarning.classList.remove("purple");
    durationSecondsWarning.classList.remove("purple");
    durationMinutesInput.classList.remove("purple-input");
    durationSecondsInput.classList.remove("purple-input");
    goalInput.classList.remove("purple-input");
  } else {
    meditate.classList.add("purple");
    meditateImage.src = "assets/meditate-active.svg";
    activityWarning.classList.remove("green");
    activityWarning.classList.remove("red");
    activityWarning.classList.add("purple");
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
    activityWarning.classList.remove("red");
    durationMinutesWarning.classList.remove("red");
    durationSecondsWarning.classList.remove("red");
    durationMinutesInput.classList.remove("red-input");
    durationSecondsInput.classList.remove("red-input");
    goalInput.classList.remove("red-input");
  } else {
    exercise.classList.add("red");
    exerciseImage.src = "assets/exercise-active.svg";
    activityWarning.classList.remove("green");
    activityWarning.classList.remove("purple");
    activityWarning.classList.add("red");
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
