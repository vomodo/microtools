const POMODORO_TIME = 25 * 60; // 25 minutes
const BREAK_TIME = 5 * 60; // 5 minutes

let timer = POMODORO_TIME;
let timerInterval = null;
let isRunning = false;
let isBreak = false;
let sessionsCompleted = 0;

// Load sessions completed from LocalStorage
sessionsCompleted = parseInt(localStorage.getItem('sessionsCompleted')) || 0;

const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

const sessionCountDisplay = document.getElementById('session-count');

const audio = document.getElementById('audio');

function updateTimerDisplay() {
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      isRunning = false;
      if (!isBreak) {
        sessionsCompleted++;
        localStorage.setItem('sessionsCompleted', sessionsCompleted);
        sessionCountDisplay.textContent = `Sessions Completed: ${sessionsCompleted}`;
      }
      isBreak = !isBreak;
      timer = isBreak ? BREAK_TIME : POMODORO_TIME;
      startTimer();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  timer = isBreak ? BREAK_TIME : POMODORO_TIME;
  updateTimerDisplay();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

updateTimerDisplay();
sessionCountDisplay.textContent = `Sessions Completed: ${sessionsCompleted}`;

// Sound control - simplified for now
const soundOptions = document.querySelectorAll('.sound-options input[name="sound"]');
soundOptions.forEach(input => {
  input.addEventListener('change', () => {
    const val = input.value;
    if (val === 'none') {
      audio.pause();
    } else if (val === 'white-noise') {
      audio.src = '/assets/sounds/white-noise.mp3';
      audio.play();
    } else if (val === 'classical') {
      audio.src = '/assets/sounds/classical.mp3';
      audio.play();
    }
  });
});
