var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

btn.onclick = function () {
  modal.style.display = "block";
}

var okBtn = document.getElementById("btnOk");

okBtn.onclick = function () {
  modal.style.display = "none";
}