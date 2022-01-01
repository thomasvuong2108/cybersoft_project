function xuatThuTu() {
  var soThuNhat = document.getElementById("soThuNhat").value * 1;
  var soThuHai = document.getElementById("soThuHai").value * 1;
  var soThuBa = document.getElementById("soThuBa").value * 1;
  if (soThuNhat > soThuHai && soThuNhat > soThuBa) {
    if (soThuHai > soThuBa) {
      alert(soThuNhat + "_" + soThuHai + "_" + soThuBa);
    } else {
      alert(soThuNhat + "_" + soThuBa + "_" + soThuHai);
    }
  } else if (soThuHai > soThuNhat && soThuHai > soThuBa) {
    if (soThuNhat > soThuBa) {
      alert(soThuHai + "_" + soThuNhat + "_" + soThuBa);
    } else {
      alert(soThuHai + "_" + soThuBa + "_" + soThuNhat);
    }
  } else if (soThuBa > soThuNhat && soThuBa > soThuHai) {
    if (soThuNhat > soThuHai) {
      alert(soThuBa + "_" + soThuNhat + "_" + soThuHai);
    } else {
      alert(soThuBa + "_" + soThuHai + "_" + soThuNhat);
    }
  }
}
