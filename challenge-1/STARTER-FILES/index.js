let timeoutFunction;
let timerIsStarted = false;
let totalTime = 10;
let timeLeft = 10;

const minutesTimerDisplayElement = document.querySelector(".minutes");
const secondsTimerDisplayElement = document.querySelector(".seconds");
const startStopButton = document.querySelector(".start");

// Setting defaults (hard coded for now)
minutesTimerDisplayElement.textContent = "00";
secondsTimerDisplayElement.textContent = totalTime;

// Start / Stop functionality
startStopButton.addEventListener("click", () => {
  timerIsStarted = !timerIsStarted;
  startStopButton.textContent = timerIsStarted ? "stop" : "start";
  timerIsStarted && timeLeft >= 0 ? startCountDown() : window.clearTimeout(timeoutFunction);;
});

const startCountDown = () => { 
  timeoutFunction = setInterval(() => {
    if(timeLeft > 0) {
      timeLeft--
      secondsTimerDisplayElement.textContent = prettyTimeNumber(timeLeft);
    } else {
      window.clearTimeout(timeoutFunction);
    }
  }, 1000);
};

const prettyTimeNumber = (number) => String(number).padStart(2, "0");

/**
 * What do we actually need to do here?
 * 
 * 1. keep track of the total time left (at first without settings)
 * 2. wire up the start / stop button
 * 3. set up a setTimeout to countdown
 * 4. stop or destroy timeout on stop / reset
 */
