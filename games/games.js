// Check if user is authenticated
if (!sessionStorage.getItem("authenticated")) {
  window.location.href = "../password.html"; // Redirect to password page if not authenticated
}
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}