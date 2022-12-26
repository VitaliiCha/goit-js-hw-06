const slider = document.getElementById("font-size-control");
const output = document.getElementById("text");
slider.oninput = function () {
  output.style.fontSize = this.value + 'px';
}