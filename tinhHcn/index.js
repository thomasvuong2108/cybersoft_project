function tinh() {
  var lengthEl = document.getElementById("length");
  var length = lengthEl.value * 1;
  var widthEl = document.getElementById("length");
  var width = widthEl.value * 1;
  var area = length * width;
  var peri = (length + width) * 2;
  alert("Diện tích=" + area + "m2" + " " + "Chu vi=" + peri + "m");
}
