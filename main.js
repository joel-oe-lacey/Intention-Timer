
var durationMinutesInput = document.querySelector("#duration-minutes");
var durationMinutesWarning = document.querySelector("#minutes-warning");
var durationSecondsInput = document.querySelector("#duration-seconds");
var durationSecondsWarning = document.querySelector("#seconds-warning");
var goalInput = document.querySelector("#goal-input");
var goalWarning = document.querySelector("#goal-warning");
var startButton = document.querySelector("#start-button");

function numberValidation(inputBox, warning) {
  // Define allowed character set within brackets, in this case only numbers
  // + checks that it matches the character set at least once, ^ and $ make sure the beginning and end match
  var regex = /^[0-9]+$/;
  var testValues = inputBox.value;

  if (testValues.match(regex)===null) {
    warning.classList.toggle('show');
  }
}

function valueEntered(inputBox) {
  var testValues = inputBox.value;

  if(testValues.length === 0) {
  console.log("hit case");
  } else {
  console.log("miss case");
  }
}

durationMinutesInput.addEventListener("change", function() {
    numberValidation(durationMinutesInput, durationMinutesWarning);
});

durationSecondsInput.addEventListener("change", function() {
    numberValidation(durationSecondsInput, durationSecondsWarning);
});

startButton.addEventListener("click", function() {
    valueEntered(goalInput);
});
