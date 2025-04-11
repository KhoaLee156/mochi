let emotion = localStorage.getItem('mochiEmotion') || '😊';
document.getElementById('emotion').textContent = emotion;

function updateEmotion(newEmotion) {
  emotion = newEmotion;
  localStorage.setItem('mochiEmotion', emotion);
  document.getElementById('emotion').textContent = emotion;
}

function feed() {
  updateEmotion('😋');
}

function play() {
  updateEmotion('😄');
}

function sleep() {
  updateEmotion('😴');
}
