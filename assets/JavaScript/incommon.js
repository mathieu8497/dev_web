/*Insertion Header*/
function HeaderFct() {
  let Header =
    '\
    <nav id="task">\
    <ul id="task_bar">\
      <a href="../../index.html"><img\
        src="../Images/CPELYON.png"\
        alt="Logo CPE Lyon"\
        id="logo_cpe"\
        class="button_task"\
      /></a>\
      <li id="social_media">\
        <a href="https://facebook.com/"\
          ><i class="fab fa-facebook-f"></i\
        ></a>\
        <a href="https://instagram.com/"\
          ><i class="fab fa-instagram"></i\
        ></a>\
        <a href="https://youtube.com/"><i class="fab fa-youtube"></i></a>\
        <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>\
      </li>\
      <img\
        src="../Images/running_stickman.gif"\
        alt="Logo_stickman"\
        id="logo_stickman"\
      />\
      <li class="button_task" class="active" id="trigger">\
        <a href="./inscriptions.html">Inscriptions</a>\
      </li>\
      <li class="button_task">\
        <a href="./evenement.html">Evenement</a>\
      </li>\
      <li class="button_task">\
        <a href="./infos.html">Infos Pratiques</a>\
      </li>\
      <li class="button_task">\
        <a href="./preparer.html">Se préparer</a>\
      </li>\
      <li>\
        <div id="weather">\
        <p id="Temp">Météo à Lyon: <span id="temperature"></span></p>\
        <div id="weather-icon"></div>\
      </div></li>\
    </ul>\
  </nav>';
  document.querySelector("header").innerHTML = Header;
}
function Back_to_topFct() {
  const goToTopBtn = document.getElementById("back_top");
  // Lorsque l'utilisateur fait défiler vers le bas 20 pixels à partir du haut du document, affichez le bouton
  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      goToTopBtn.style.display = "block";
    } else {
      goToTopBtn.style.display = "none";
    }
  };
  // When the user clicks on the button, scroll to the top of the document
  goToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
}
/*Insertion Footer*/

function FooterFct() {
    let Footer =
      '\
      <div id="footer">\
            <div id="footer_content">\
            <div id="footer_content_left">\
                <h3>CONTACT</h3>\
                <p>\
                <i class="fas fa-map-marker-alt"></i> 2 rue de la Doua, 69100 Villeurbanne\
                </p>\
                <p>\
                <i class="fas fa-phone-alt"></i><a href="tel:+33123456789"> +33 1 23 45 67 89 </a>\
                </p>\
                <p>\
                <i class="fas fa-envelope"></i>\
                <a href="mailto:mathieu8497@gmail.com">mathieu8497@gmail.com</a>\
                </p>\
      ';
    document.querySelector("footer").innerHTML = Footer;
  }
FooterFct();
HeaderFct();
Back_to_topFct();

