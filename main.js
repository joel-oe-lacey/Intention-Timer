//VARIABLES
  //INPUT VALIDATION
var durationMinutesInput = document.querySelector('#duration-minutes');
var durationMinutesWarning = document.querySelector('#minutes-warning');
var durationSecondsInput = document.querySelector('#duration-seconds');
var durationSecondsWarning = document.querySelector('#seconds-warning');
var goalInput = document.querySelector('#goal-input');
var goalWarning = document.querySelector('#goal-warning');
var activityWarning = document.querySelector('#activity-warning');
  //TIMER
var timerSection = document.querySelector('.timer-section');
var taskName = document.querySelector('#task-name');
var timerTime = document.querySelector('#time');
var timerStart = document.querySelector('#timer-start');
  //COLOR CHANGE
var study = document.querySelector('#study-button');
var meditate = document.querySelector('#meditate-button');
var exercise = document.querySelector('#exercise-button');
var studyImage = document.querySelector('#study-image');
var meditateImage = document.querySelector('#meditate-image');
var exerciseImage = document.querySelector('#exercise-image');
  //MEDIA QUERY
var leftSection = document.querySelector('.left-section');
var pageHeader = document.querySelector('#page-header');
var startButton = document.querySelector('#start-button');

// INPUT VALIDATION
// Define function to check if user inputs number
function numberOnly(inputBox, warning) {
  // Define allowed character set within brackets, in this case only numbers
  // + checks that it matches the character set at least once, ^ and $ make sure the beginning and end match
  var regex = /^[0-9]+$/;
  var testValues = inputBox.value;

  // Warnings start with hidden class, remove this if the user enters a non-number
  if (testValues.match(regex)===null) {
    warning.classList.remove('hide');
    inputBox.value = '';
  } else {
    warning.classList.add('hide');
  }
}

//test if number has been entered on each input box change
durationMinutesInput.addEventListener('change', function() {
    numberOnly(durationMinutesInput,durationMinutesWarning);
});

durationSecondsInput.addEventListener('change', function() {
    numberOnly(durationSecondsInput,durationSecondsWarning);
});

function valuesEntered(inputBox, warning) {
  var testValues = inputBox.value;
  //Check if the user entered any characters to the goal input, if so show warning
  if (testValues.length === 0) {
    warning.classList.remove('hide');
    return false;
  } else {
    //Alternatively show warning if no value is entered
    warning.classList.add('hide');
    return true;
  }
}

function activitySelected() {
  //fetch boolean values of contains checks
  var studyClass = study.classList.contains('green');
  var meditateClass = meditate.classList.contains('purple');
  var exerciseClass = exercise.classList.contains('red');
  var warninghide = activityWarning.classList.add('hide');

  //check if each contains equals true, and if so add to timer and return a boolean indication that a value was selectedf
  if (studyClass) {
    timerStart.classList.add('green');
    warninghide;
    return true;
  } else if (meditateClass) {
    timerStart.classList.add('purple');
    warninghide;
    return true;
  } else if (exerciseClass) {
    timerStart.classList.add('red');
    warninghide;
    return true;
  } else {
    //if none are selected return false and show warning
    activityWarning.classList.remove('hide');
    return false;
    }
  }

function allValidation() {
  //check that each input has been successfully enterered, and assign boolean for each
  var activity = activitySelected();
  var goal = valuesEntered(goalInput, goalWarning);
  var minutes = valuesEntered(durationMinutesInput, durationMinutesWarning);
  var seconds = valuesEntered(durationSecondsInput, durationSecondsWarning);

  //check to see if all boolean values === true
  if (activity && goal && minutes && seconds) {
    return true;
  } else {
    return false;
  }
}

function toggleTimer(validation) {
  //check if all validations were passed, and the timer section is not currently present
  if (validation === true && timerSection.classList.contains('remove')) {
    //if so show timer section, hide left section, and assign values to the placeholders based on user input
    timerSection.classList.remove('remove');
    leftSection.classList.add('remove');
    taskName.innerText = goalInput.value;
    pageHeader.innerText = 'Current Activity';
    timeStructure(durationMinutesInput.value, durationSecondsInput.value);
  } else {
    //otherwise show error
    timerSection.classList.add('remove');
    leftSection.classList.remove('remove');
    alert('Please fix the errors');
  }
}



//set a global second count to allow timer count, check if validations pass to show timer
startButton.addEventListener('click', function() {
  window.inputSeconds = convertInputSeconds();
  var validation = allValidation();
  toggleTimer(validation);
});

//launch timer function to run each second
timerStart.addEventListener('click', function() {
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
function imgColorRemove(btn) {
    var btnType = btn.innerText.toLowerCase();
    //as interpolation didn't work on filepath, set path explicity based on color
    switch (btnType) {
      case ('study'):
      studyImage.src = 'assets/study.svg';
      break;
      case ('meditate'):
      meditateImage.src = 'assets/meditate.svg';
      break;
      case ('exercise'):
      exerciseImage.src = 'assets/exercise.svg';
      break;
    }
}

function removeColor(btn, color) {
  //removing selected button and image color
  btn.classList.remove(color);
  imgColorRemove(btn);

  //removing the color of the other inputs based on selected color
  goalWarning.classList.remove(`${color}`);
  activityWarning.classList.remove(`${color}`);
  durationMinutesWarning.classList.remove(`${color}`);
  durationSecondsWarning.classList.remove(`${color}`);
  durationMinutesInput.classList.remove(`${color}-input`);
  durationSecondsInput.classList.remove(`${color}-input`);
  goalInput.classList.remove(`${color}-input`);
}

function imgColorAdd(btn) {
  var btnType = btn.innerText.toLowerCase();
  //as interpolation didn't work on filepath, set path explicity based on color
  switch (btnType) {
    case ('study'):
    studyImage.src = 'assets/study-active.svg';
    break;
    case ('meditate'):
    meditateImage.src = 'assets/meditate-active.svg';
    break;
    case ('exercise'):
    exerciseImage.src = 'assets/exercise-active.svg';
    break;
  }
}

function addColor(btn, color) {
  //changing selected button and image color
  btn.classList.add(color);
  imgColorAdd(btn);

  //changing the color of the other inputs based on selected color
  activityWarning.classList.add(`${color}`);
  durationMinutesInput.classList.add(`${color}-input`);
  durationMinutesWarning.classList.add(`${color}`);
  durationSecondsInput.classList.add(`${color}-input`);
  durationSecondsWarning.classList.add(`${color}`);
  goalInput.classList.add(`${color}-input`);
  goalWarning.classList.add(`${color}`);
}

study.addEventListener('click', function() {
    if (study.classList.contains('green')) {
      removeColor(study,'green');
    } else {
      addColor(study,'green');
      removeColor(exercise,'red');
      removeColor(meditate,'purple');
    }
  })

meditate.addEventListener('click', function() {
    if (meditate.classList.contains('purple')) {
      removeColor(meditate,'purple');
    } else {
      addColor(meditate,'purple');
      removeColor(study,'green');
      removeColor(exercise,'red');
    }
  })

exercise.addEventListener('click', function() {
    if (exercise.classList.contains('red')) {
      removeColor(exercise,'red');
    } else {
      addColor(exercise,'red');
      removeColor(meditate,'purple');
      removeColor(study,'green');
    }
  })
