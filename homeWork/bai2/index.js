function xinChao() {
  var nguoiSuDungEl = document.getElementById("nguoiSuDung").value;
  switch (nguoiSuDungEl) {
    case "bố" || "ba":
      alert("Chào bố");
      break;
    case "mẹ" || "má":
      alert("Chào mẹ");
      break;
    case "anh":
      alert("chào anh trai");
      break;
    case "em":
      alert("Chào em gái");
      break;
    default:
      alert("Hello");
  }
}
