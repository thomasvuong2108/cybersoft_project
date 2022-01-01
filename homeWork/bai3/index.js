function ketQua() {
  var soThuNhat = document.getElementById("soThuNhat").value * 1;
  var soThuHai = document.getElementById("soThuHai").value * 1;
  var soThuBa = document.getElementById("soThuBa").value * 1;
  if (soThuNhat % 2 == 0 && soThuHai % 2 == 0 && soThuBa % 2 == 0) {
    alert("3 số chẵn");
  } else if (soThuNhat % 2 != 0 && soThuHai % 2 != 0 && soThuBa % 2 != 0) {
    alert("3 số lẻ");
  } else if (soThuNhat % 2 != 0) {
    if (soThuHai % 2 == 0 && soThuBa % 2 == 0) {
      alert("2 số chẵn và 1 số lẻ");
    } else {
      alert("2 số lẻ và 1 số chẵn");
    }
  } else if (soThuHai % 2 != 0) {
    if (soThuNhat % 2 == 0 && soThuBa % 2 == 0) {
      alert("2 số chẵn và 1 số lẻ");
    } else {
      alert("2 số lẻ và 1 số chẵn");
    }
  } else {
    if (soThuNhat % 2 == 0 && soThuHai % 2 == 0) {
      alert("2 số chẵn và 1 số lẻ");
    } else {
      alert("2 số lẻ và 1 số chẵn");
    }
  }
}
