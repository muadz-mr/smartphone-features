// Get all elements needed
const portraitSwitch = document.querySelector(".state-buttons__portrait");
const landscapeSwitch = document.querySelector(".state-buttons__landscape");
const phone = document.querySelector(".smartphone");
const upperBody = document.querySelector(".body__upper");
const display = document.querySelector(".screen");

portraitSwitch.addEventListener("click", (e) => {
  console.log(e);
  portraitSwitch.classList.add("active");
  landscapeSwitch.classList.remove("active");
  phone.classList.remove("to-landscape");
  upperBody.classList.remove("slide-out");
  display.classList.remove("screen-2-in");
  phone.classList.add("to-portrait");
  upperBody.classList.add("slide-in");
  display.classList.add("screen-1-in");
});

landscapeSwitch.addEventListener("click", (e) => {
  console.log(e);
  portraitSwitch.classList.remove("active");
  landscapeSwitch.classList.add("active");
  phone.classList.remove("to-portrait");
  upperBody.classList.remove("slide-in");
  display.classList.remove("screen-1-in");
  phone.classList.add("to-landscape");
  upperBody.classList.add("slide-out");
  display.classList.add("screen-2-in");
});
