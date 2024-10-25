let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    document.querySelector('.slides').style.transform = `translateX(${-currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

setInterval(() => {
    changeSlide(1);
}, 5000);
