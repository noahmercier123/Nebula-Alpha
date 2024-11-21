function opengame() {
	var win = window.open()   
	var url = "https://tutoring.calculusfordummies.store/" 
	var iframe = win.document.createElement('iframe')
	iframe.style.width = "100%";
	iframe.style.height = "100%";
	iframe.src = url;
	win.document.body.style.margin = "0"; 
	win.document.body.style.padding = "0"; 
	win.document.body.appendChild(iframe);

 }
// Check if user is authenticated
if (!sessionStorage.getItem('authenticated')) {
    window.location.href = 'password.html'; // Redirect to password page if not authenticated
}
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}