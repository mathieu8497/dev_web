function animateSlides() {
  const course = document.querySelector(".home");

  let slideIndex = 0;
  let nbSlides = 4;

  function moveSlide() {
    slideIndex++;

    if (slideIndex >= nbSlides) {
      slideIndex = 0;
    }

    course.firstElementChild.style.marginLeft = `calc(-${100 * slideIndex}% - ${
      30 * slideIndex
    }px)`;
  }

  setInterval(() => {
    moveSlide();
  }, 3000);
}

// Set the date we're counting down to
var countDownDate = new Date("Apr 22, 2023 14:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days + " /";
  document.getElementById("hours").innerHTML = hours + " / ";
  document.getElementById("minutes").innerHTML = minutes + " / ";
  document.getElementById("seconds").innerHTML = seconds + "";
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var firstName = document.querySelector("#firstName").value;
  var lastName = document.querySelector("#lastName").value;
  var email = document.querySelector("#email").value;
  var mobilePhone = document.querySelector("#mobilePhone").value;
  var postalAddress = document.querySelector("#postalAddress").value;
  var dob = document.querySelector("#dob").value;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !mobilePhone ||
    !postalAddress ||
    !dob
  ) {
    alert("All fields are required!");
    return;
  }

  alert("Form submitted successfully!");
});
// Add Google Maps API code here
function initMap() {
  var raceLocation = { lat: 45.784283551133456, lng: 4.86973004232585 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: raceLocation,
  });
  var myLatlng = new google.maps.LatLng(45.78494, 4.870582);
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    label: {
      color: 'black',
      fontWeight: 'bold',
      text: 'Start',
    }});
    var myLatlng2 = new google.maps.LatLng(45.784781, 4.870113);
    var marker = new google.maps.Marker({
      position: myLatlng2,
      map: map,
      label: {
        color: 'black',
        fontWeight: 'bold',
        text: 'Finish',
      }});

  var racePath = [
    { lat: 45.78494, lng: 4.870582 },
    { lat: 45.785402, lng: 4.873176 },
    { lat: 45.786161, lng: 4.876638 },
    { lat: 45.784951, lng: 4.877158 },
    { lat: 45.784529, lng: 4.877018 },
    { lat: 45.783571, lng: 4.877428 },
    { lat: 45.783897, lng: 4.879299 },
    { lat: 45.783009, lng: 4.879239 },
    { lat: 45.782625, lng: 4.87722 },
    { lat: 45.782425, lng: 4.877145 },
    { lat: 45.781194, lng: 4.87184 },
    { lat: 45.784781, lng: 4.870113 },

    // Add more Latitude and Longitude coordinates here to define the race path
  ];

  var racePathLine = new google.maps.Polyline({
    path: racePath,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
    
  });

  racePathLine.setMap(map);
}
initMap();
animateSlides();
