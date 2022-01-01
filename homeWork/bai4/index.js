function tinhTamGiac() {
  var canh1 = document.getElementById("canh1").value * 1;
  var canh2 = document.getElementById("canh2").value * 1;
  var canh3 = document.getElementById("canh3").value * 1;
  var binhPhuongCanh1 = canh1 * canh1;
  var binhPhuongCanh2 = canh2 * canh2;
  var binhPhuongCanh3 = canh3 * canh3;
  if (canh1 > 0 && canh2 > 0 && canh3 > 0) {
    if (canh1 == canh2 && canh1 == canh3) {
      alert("Tam giác đều");
    } else if (
      (canh1 == canh2 && canh1 != canh3) ||
      (canh1 == canh3 && canh1 != canh2) ||
      (canh3 == canh2 && canh1 != canh3)
    ) {
      alert("Tam giác cân");
    } else if (
      binhPhuongCanh1 == binhPhuongCanh2 + binhPhuongCanh3 ||
      binhPhuongCanh2 == binhPhuongCanh1 + binhPhuongCanh3 ||
      binhPhuongCanh3 == binhPhuongCanh2 + binhPhuongCanh1
    ) {
      alert("Tam giác vuông");
    } else {
      alert("Tam giác thường");
    }
  } else {
    alert("Mời nhập độ dài cạnh");
  }
}
