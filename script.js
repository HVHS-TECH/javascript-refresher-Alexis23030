const element = document.getElementById("myBtn");
element.addEventListener("click", func);
function func() {
  alert("Congratulations!\nYou got the script running.");
}


// Get the button element by its ID
const myButton = document.getElementById("btn");


// Add a 'click' event listener
myButton.addEventListener("click", function() {
  const textinp = document.getElementById("textinp").value;
  document.getElementById("welcomeMessage").textContent = textinp;
});
