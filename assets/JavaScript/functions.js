function animateSlides (){
    const course = document.querySelector('.home');

    let slideIndex = 0;
    let nbSlides = 4;

    function moveSlide() {
        slideIndex++;

        if(slideIndex >= nbSlides) {
            slideIndex = 0;
        }

        course.firstElementChild.style.marginLeft = `calc(-${100 * (slideIndex)}% - ${30 * (slideIndex)}px)`;
    }

    setInterval(() => {
        moveSlide();
    }, 3000);
}

animateSlides()