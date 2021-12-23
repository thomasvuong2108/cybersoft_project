function tinhTB() {
  var num1El = document.getElementById("num1");
  var num1 = num1El.value * 1;
  var num2El = document.getElementById("num2");
  var num2 = num2El.value * 1;
  var num3El = document.getElementById("num3");
  var num3 = num3El.value * 1;
  var num4El = document.getElementById("num4");
  var num4 = num4El.value * 1;
  var num5El = document.getElementById("num5");
  var num5 = num5El.value * 1;
  var avg = (num1 + num2 + num3 + num4 + num5) / 5;
  alert(avg);
}
