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
    timeStructure(durationMinutesInput.value, durationSecondsInput.value);
  } else {
    timerSection.classList.add("remove");
    leftSection.classList.remove("remove");
    alert("Please fix the errors");
  }
}

durationMinutesInput.addEventListener("change", function() {
    numberOnly(durationMinutesInput,durationMinutesWarning);
});

durationSecondsInput.addEventListener("change", function() {
    numberOnly(durationSecondsInput,durationSecondsWarning);
});

//set a global second count to allow timer count, check if validations pass to show timer
startButton.addEventListener("click", function() {
    window.inputSeconds = convertInputSeconds();
    var validation = allValidation();
    toggleTimer(validation);
});

//launch timer function to run each second
timerStart.addEventListener("click", function() {
  timerStart.disabled = true;
  window.timerExecute = setInterval(function() { countDisplay(); }, 1000);
});

// TIMER

//convert to total second count for timer iteration
function convertInputSeconds() {
  var minutes = durationMinutesInput.value;
  var seconds = durationSecondsInput.value;

  //Fetch minute and second inputs, convert to number and floor if decimal
  minutes = Math.floor(parseInt(minutes,10));
  seconds = Math.floor(parseInt(seconds,10));

  //Convert to total second count
  var totalSeconds = (minutes * 60) + seconds;
  return totalSeconds;
}

//display structure function
function timeStructure() {
    //seperate out into minutes and seconds
    var minutes = Math.floor(inputSeconds / 60);
    var seconds = inputSeconds % 60;

    //display and add 0s when single digit
    if (minutes < 10 && seconds < 10) {
    time.innerText = `0${minutes} : 0${seconds}`;
  } else if (minutes < 10) {
    time.innerText = `0${minutes} : ${seconds}`;
  } else if (seconds < 10) {
    time.innerText = `${minutes} : 0${seconds}`;
  } else {
    time.innerText = `${minutes} : ${seconds}`;
  }
}

// Looped counter and display function
function countDisplay() {
    // Stop setInterval counter when time hits 0
    if (inputSeconds === 0) {
      clearInterval(timerExecute);
      alert('The timer is up!');
    }
    //round and display values to innerText
    timeStructure();
    // Decriment by 1
    inputSeconds = inputSeconds - 1;
}

// COLOR CHANGE
//create an event.target.innerText of button name, can we grab whole object and consolidate study and studyImage fetch?
var study = document.querySelector('#study-button');
var meditate = document.querySelector('#meditate-button');
var exercise = document.querySelector('#exercise-button');
var studyImage = document.querySelector('#study-image');
var meditateImage = document.querySelector('#meditate-image');
var exerciseImage = document.querySelector('#exercise-image');


function removeColor(btn, color){
  //removing selected button and image color
  btn.classList.remove(color);
  `${btn}Image`.src = `assets/${btn}.svg`;

  //removing the color of the other inputs based on selected color
  goalWarning.classList.remove(`${color}`);
  activityWarning.classList.remove(`${color}`);
  durationMinutesWarning.classList.remove(`${color}`);
  durationSecondsWarning.classList.remove(`${color}`);
  durationMinutesInput.classList.remove(`${color}-input`);
  durationSecondsInput.classList.remove(`${color}-input`);
  goalInput.classList.remove(`${color}-input`);
}

function addColor(btn, color) {
  //changing selected button and image color
  btn.classList.add(color);
  `${btn}Image`.src = `assets/${btn}-active.svg`;

  //changing the color of the other inputs based on selected color
  activityWarning.classList.add(`${color}`);
  durationMinutesInput.classList.add(`${color}-input`);
  durationMinutesWarning.classList.add(`${color}`);
  durationSecondsInput.classList.add(`${color}-input`);
  durationSecondsWarning.classList.add(`${color}`);
  goalInput.classList.add(`${color}-input`);
  goalWarning.classList.add(`${color}`);
}

study.addEventListener('click', function(){
    if  (study.classList.contains("green")) {
      removeColor(study,'green');
    } else {
      addColor(study,'green');
      removeColor(exercise,'red');
      removeColor(meditate,'purple');
    }
  })

meditate.addEventListener('click', function(){
    if  (meditate.classList.contains("purple")) {
      removeColor(meditate,'purple');
    } else {
      addColor(meditate,'purple');
      removeColor(study,'green');
      removeColor(exercise,'red');
    }
  })

exercise.addEventListener('click', function(){
    if  (exercise.classList.contains("red")) {
      removeColor(exercise,'red');
    } else {
      addColor(exercise,'red');
      removeColor(meditate,'purple');
      removeColor(study,'green');
    }
  })
