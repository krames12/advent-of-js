let timeoutFunction;
let timerIsStarted = false;
let totalTime = 123;
let timeLeft = 123;

const prettyTimeNumber = (number) => String(number).padStart(2, "0");

const getMinutesAndSeconds = time => {
  const minutes = Math.floor(time/60);
  const seconds = time % 60;

  return {minutes, seconds}
};

const minutesTimerDisplayElement = document.querySelector(".minutes");
const secondsTimerDisplayElement = document.querySelector(".seconds");
const startStopButton = document.querySelector(".start");

// Setting defaults (hard coded for now)
const {
  minutes: minutesLeft,
  seconds: secondsLeft
} = getMinutesAndSeconds(timeLeft);

minutesTimerDisplayElement.textContent = prettyTimeNumber(minutesLeft);
secondsTimerDisplayElement.textContent = prettyTimeNumber(secondsLeft);

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
      const {
        minutes: minutesLeft,
        seconds: secondsLeft
      } = getMinutesAndSeconds(timeLeft);

      minutesTimerDisplayElement.textContent = prettyTimeNumber(minutesLeft);
      secondsTimerDisplayElement.textContent = prettyTimeNumber(secondsLeft);
    } else {
      window.clearTimeout(timeoutFunction);
    }
  }, 1000);
};

/**
 * What do we actually need to do here?
 * 
 * 1. keep track of the total time left (at first without settings)
 * 2. wire up the start / stop button
 * 3. set up a setTimeout to countdown
 * 4. stop or destroy timeout on stop / reset
 */
