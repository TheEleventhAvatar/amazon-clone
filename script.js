document.addEventListener('DOMContentLoaded', function() {
    const nextArrows = document.querySelectorAll('.next');
    const prevArrows = document.querySelectorAll('.prev');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Function to handle showing the next slide
    function showNextSlide(e) {
        e.preventDefault(); // Prevent default anchor behavior
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Function to handle showing the previous slide
    function showPrevSlide(e) {
        e.preventDefault(); // Prevent default anchor behavior
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Attach event listeners to the next arrows
    nextArrows.forEach(arrow => {
        arrow.addEventListener('click', showNextSlide);
    });

    // Attach event listeners to the previous arrows
    prevArrows.forEach(arrow => {
        arrow.addEventListener('click', showPrevSlide);
    });
});
