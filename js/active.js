// Get the container element
var btnContainer = document.getElementById("tamanho");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("modelo");

// Loop through the buttons and add the active-btn class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-btn");
    current[0].className = current[0].className.replace(" active-btn", "");
    this.className += " active-btn";
  });
}

