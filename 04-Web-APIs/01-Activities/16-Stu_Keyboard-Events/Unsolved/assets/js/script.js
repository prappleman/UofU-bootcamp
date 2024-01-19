function keydownAction(event) {
  // TODO: Complete keydown function
document.querySelector("#status").textContent = "KEYDOWN event";
document.querySelector("#key").textContent = event.key;
document.querySelector("#code").textContent = event.keycode;

if (event.keycode === 32) {
  document.querySelector("#key").textcontent = "space";
}
}

function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

