var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//objetos JSON desde el formulario

function toObject(){
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var json = {
        Nombre : name,
        Apellido : surname,
        email : email
    }
    console.log(json);
}


/*
Crea con programación orientada a objetos un sistema de gestión del avión, recoge por el formulario si quiere un asiento normal o bussines y aplicale las tasas correspondientes

también si es vuelo nacional e internacional
y le aplicas las tasas de modo que al final salga por pantalla los detalles de la reserva
*/

var passenger_name = document.getElementById('passenger_name');
var passenger_surname1 = document.getElementById('passenger_surname1');
var passenger_surname2 = document.getElementById('passenger_surname2');
var depart = document.getElementById('depart');
var arrival = document.getElementById('arrival');
var depart_date = document.getElementById('depart_date');
var arrival_date = document.getElementById('arrival_date');
var seat_class = document.getElementById('seat_class');
var intercontinental_tax = 1.21;
var bussines_tax = 220;
var total_price = 0;

class Aircraft_seats {
    constructor (passenger_name,passenger_surname1,passenger_surname2,depart, arrival, depart_date, arrival_date, seat_class){
        this.passenger_name = passenger_name;
        this.passenger_surname1 = passenger_surname1;
        this.passenger_surname2 = passenger_surname2;
        this.depart = depart;
        this.arrival = arrival;
        this.depart_date = depart_date;
        this.arrival_date = arrival_date;
        this.seat_class = seat_class;
    }

    seats_resume(){
        let is_intercontinental = false;
        let is_bussines_tax = false;
        let pre_price = 0;

        if(this.arrival.value == "Miami" || this.arrival.value == "Buenos Aires"){
           is_intercontinental = true;
        }

        if(this.seat_class.value == "Bussines"){
            total_price += bussines_tax;
        }

        if(this.arrival.value == "Londres"){
            pre_price = 125;
        }else if(this.arrival.value == "Paris"){
            pre_price = 89;
        }else if(this.arrival.value == "Miami"){
            pre_price = 499;
        }else if(this.arrival.value == "Buenos Aires"){
            pre_price = 799;
        }
        
        total_price += pre_price;

        if(is_intercontinental){
            total_price * intercontinental_tax;
        }

        console.log(total_price);

        let seat_row = Math.floor(Math.random()* (30-1)+1);
        let seat_letter = String.fromCharCode(Math.floor(Math.random()* (46-41)+41));

        document.getElementById('resume').style.display = "block";  
        
        document.getElementById('resume_depart').value = this.depart;
        document.getElementById('resume_arrival').value = this.arrival;
        document.getElementById('resume_date_depart').value = this.depart_date;
        document.getElementById('resume_date_arrival').value = this.arrival_date;
        document.getElementById('resume_ticket_class').value = this.seat_class;

    }
}

function new_resume(){
    var resume1 = new Aircraft_seats(passenger_name,passenger_surname1,passenger_surname2,depart, arrival, depart_date, arrival_date, seat_class);

    resume1.seats_resume();


}