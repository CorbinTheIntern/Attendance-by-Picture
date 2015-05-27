function hasGetUserMedia() {
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if (hasGetUserMedia()) {
  console.log("Good to go!");
} else {
  alert('getUserMedia() is not supported in your browser');
}