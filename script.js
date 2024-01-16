let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel');
    const progressItems = document.querySelectorAll('.progress-item');

    if (index < 0) {
        index = slides.children.length - 1;
    } else if (index >= slides.children.length) {
        index = 0;
    }

    currentSlide = index;

    slides.style.transform = `translateX(${-index * 100}%)`;

    progressItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

function changeSlide(offset) {
    showSlide(currentSlide + offset);
}

document.addEventListener('DOMContentLoaded', showSlide(currentSlide));
