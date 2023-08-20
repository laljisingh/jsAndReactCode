function sound() {
  var x = document.getElementById("myAudio");
  x.play();
}
function pauseMusic() {
  var x = document.getElementById("myAudio");
  x.pause();
}

document.addEventListener(
  "keyup",
  (event) => {
    var name = event.key;
    if (
      name === "l" ||
      name === "a" ||
      name === "j" ||
      name === "i" ||
      name === "s"
    ) {
      var x = document.getElementById("myAudio");
      x.play();
    }
  },
  false
);
