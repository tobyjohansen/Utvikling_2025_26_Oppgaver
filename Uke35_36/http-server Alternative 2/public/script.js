// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("myButton");
  const message = document.getElementById("message");

  button.addEventListener("click", function () {
    message.textContent = "You clicked the button!";
    message.style.color = "blue";
  });
});
