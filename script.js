let startTime, updatedTime, difference, timerInterval;
let isRunning = false;
let lapCounter = 0;

function updateDisplay() {
  const display = document.getElementById('display');
  const currentTime = Date.now();
  difference = currentTime - startTime;
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return num < 10 ? '0' + num : num;
}

function start() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - (difference || 0);
    timerInterval = setInterval(updateDisplay, 1000);
  }
}

function pause() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timerInterval);
  }
}

function reset() {
  isRunning = false;
  clearInterval(timerInterval);
  difference = 0;
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('laps').innerHTML = '';
  lapCounter = 0;
}

function lap() {
  if (isRunning) {
    lapCounter++;
    const lapTime = document.getElementById('display').textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
    document.getElementById('laps').appendChild(lapItem);
  }
}
