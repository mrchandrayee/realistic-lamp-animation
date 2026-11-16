// The checkbox controls the lamp through CSS sibling selectors.
// This script adds a small accessibility/status enhancement.
const lampSwitch = document.getElementById("lamp-switch");
const hint = document.querySelector(".hint");

function updateLampState() {
  const isOn = lampSwitch.checked;
  hint.textContent = isOn ? "Click lamp to turn off" : "Click to interact";
  document.querySelector(".room").setAttribute("data-lamp", isOn ? "on" : "off");
}

lampSwitch.addEventListener("change", updateLampState);
updateLampState();
