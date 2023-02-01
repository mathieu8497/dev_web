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
var countDownDate = new Date("Apr 1, 2023 14:00:00").getTime();

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



animateSlides();
