function openClose(controlId) {
	if (document.getElementById(controlId).style.display == "block")
		document.getElementById(controlId).style.display = "none"; 
	else
		document.getElementById(controlId).style.display = "block";
}

// Modal - close on click
var x = document.getElementById("modal");

window.onclick = function clickEvent(event) {
    if (event.target == x ) {
		openClose("modal");
    }
}

// Modal - close on press esc
window.onkeyup = function keyUpEvent(e) {
    var key = e.which || e.keyCode;
    if (key == 27 && x.style.display == 'block' ) {  
        openClose("modal");
    }
}

// Slideshow - manual/automatic 
var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
	clearTimeout(timer);
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	clearTimeout(timer);
	showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("image_container");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex} //sta je ovo?
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activedot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activedot";
  timer = setTimeout(showSlides, 5000); 
}

// Alert messages on submit
function alertMessage() {
	var inpObj = document.getElementById("contact_form");
    if (inpObj.checkValidity()) {
		alert("Your message has been sent.");
	}
}

function alertMessage1() {
    var inp = document.getElementById("findRoom");
    if (inp.checkValidity()) {
        alert("Not available.");
	}
}

function alertMessage2() {
    var inpObj = document.getElementById("subscribe");
    if (inpObj.checkValidity()) {
        alert("You are successfully subscribed.");
    }
}

// Calendar dates 
function minDateIn(myDateIn) {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	if(dd<10){
		dd='0'+dd;
	} 
	if(mm<10){
		mm='0'+mm;
	} 
	var today = yyyy+'-'+mm+'-'+dd;
	var myDateIn = document.getElementById(myDateIn);
	myDateIn.setAttribute("min",today);
}

function minDateOut(myDateIn,myDateOut) {
	var dateIn = document.getElementById(myDateIn);
	var myDateOut = document.getElementById(myDateOut);
    myDateOut.setAttribute("min", dateIn.value);
}

function openModal() {
	minDateIn('searchDateIn');
	openClose('modal');
}
window.onresize = function closeLinks() {
	document.getElementById("links").style.display = "none";
}


function responsiveNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}