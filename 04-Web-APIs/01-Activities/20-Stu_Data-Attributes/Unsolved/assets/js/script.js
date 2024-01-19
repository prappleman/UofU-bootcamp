var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function

  if (element.matches(".box")) {
  var state = element.getAttribute("data-state");
  var number = element.getAttribute("data-number");

    if (state === "hidden") {
      element.setAttribute("data-state", "visible");
      element.innerText = number;

    } else {
      element.setAttribute("data-state", "hidden");
      element.innerText = "";
    }
  }
});
