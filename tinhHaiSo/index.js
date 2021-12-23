function cal() {
  var numEl = document.getElementById("number");
  var num = numEl.value * 1;
  var num1 = parseInt(num / 10);
  var num2 = parseInt(num % 10);
  if (num <= 99 && num >= 10) {
    var total = num1 + num2;
    alert("Tổng=" + total);
  } else {
    alert("Nhập số có 2 chữ số");
  }
}
