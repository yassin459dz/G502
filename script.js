const swiper = new swiper(".gallerySwiper" , {
    sliderPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakponts: {
        800: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        600: {
            sliderPerView: 2,
            spaceBetween:20,
        },
    },
});


//Navbar
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});