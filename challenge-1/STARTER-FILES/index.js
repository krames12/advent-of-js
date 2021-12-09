let timeoutFunction;
let timerIsStarted = false;
let totalTime = 15;
let timeLeft = 15;

const prettyTimeNumber = (number) => String(number).padStart(2, "0");

const getMinutesAndSeconds = time => {
  const minutes = Math.floor(time/60);
  const seconds = time % 60;

  return {minutes, seconds}
};

const timerRing = document.querySelector(".ring");
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
  timerIsStarted && timeLeft >= 0 ? startCountDown() : stopCountDown(false);
});

const startCountDown = () => { 
  timeoutFunction = setInterval(() => {
    timeLeft--;
    if(timeLeft > 0) {
      updateTimer(timeLeft);
      if(timeLeft <= 10 && !timerRing.classList.contains("ending")) {
        timerRing.classList.add("ending");
      }
    } else {
      stopCountDown(true);
    }
  }, 1000);
};

const stopCountDown = ended => {
  window.clearTimeout(timeoutFunction)
  if(ended) alert("YOU'RE TIME IS UP! STOP WORKING AND GO HYDRATE!")
}

const updateTimer = timeLeft => {
  const {
    minutes: minutesLeft,
    seconds: secondsLeft
  } = getMinutesAndSeconds(timeLeft);

  minutesTimerDisplayElement.textContent = prettyTimeNumber(minutesLeft);
  secondsTimerDisplayElement.textContent = prettyTimeNumber(secondsLeft);
}

/**
 * What do we actually need to do here?
 * 
 * 1. keep track of the total time left (at first without settings)
 * 2. wire up the start / stop button
 * 3. set up a setTimeout to countdown
 * 4. stop or destroy timeout on stop / reset
 */
