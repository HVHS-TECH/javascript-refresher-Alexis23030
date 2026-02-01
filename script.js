
  alert("Congratulations!\nYou got the script running.");


const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}