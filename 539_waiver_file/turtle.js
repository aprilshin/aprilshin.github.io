document.addEventListener("click", myFunction);

var div;

function myFunction() {
  var canvas = document.getElementById("april")
  div = document.createElement("div");
  // div.style.position = "absolute";
  div.style.width = "30px";
  div.style.height = "30px";
  div.style.backgroundColor = "red";

  canvas.appendChild(div);

};

