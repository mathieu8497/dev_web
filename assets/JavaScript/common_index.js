function HeaderFct() {
    let Header =
      '\
<nav id="task">\
        <ul id="task_bar">\
          <a href="index.html"><img\
            src="./assets/Images/CPELYON.png"\
            alt="Logo CPE Lyon"\
            id="logo_cpe"\
            class="button_task"/></a>\
          <li id="social_media">\
            <a href="https://www.facebook.com/cperunlyon/"\
              ><i class="fab fa-facebook-f"></i\
            ></a>\
            <a href="https://www.instagram.com/runcpe/?hl=en"\
              ><i class="fab fa-instagram"></i\
            ></a>\
            <a href="https://www.strava.com/clubs/995864?oq=cpe"><i class="fab fa-strava"></i></a>\
            <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>\
          </li>\
          <img\
            src="./assets/Images/running_stickman.gif"\
            alt="Logo_stickman"\
            id="logo_stickman"\
          />\
          <li class="button_task" class="active" id="trigger">\
            <a href="./assets/HTML/inscriptions.html">Inscriptions</a>\
          </li>\
          <li class="button_task">\
            <a href="./assets/HTML/evenement.html">Evenement</a>\
          </li>\
          <li class="button_task">\
            <a href="./assets/HTML/infos.html">Infos Pratiques</a>\
          </li>\
          <li class="button_task">\
            <a href="./assets/HTML/preparer.html">Se préparer</a>\
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
          <i class="fas fa-phone-alt"></i> 04 72 43 00 00\
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