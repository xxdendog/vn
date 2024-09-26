function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

function isPortrait() {
    return window.innerHeight > window.innerWidth;
}

function isMobile() {
    return window.innerWidth <= 768;
}

window.addEventListener("orientationchange", function() {
    document.location.reload();
});

const observer = lozad();
observer.observe();

const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
});

/* Start video BG on Safari Low Power Mode */

document.body.addEventListener('click', () => {
    document.querySelectorAll('.video-bg video').forEach(function (e) {
        e.play();
    });
}, { once: true });

document.body.addEventListener('touchstart', () => {
    document.querySelectorAll('.video-bg video').forEach(function (e) {
        e.play();
    });
}, { once: true });


/* Custom scroll */

gsap.registerPlugin(ScrollTrigger);

const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
        smoothWheel: true,
        smoothTouch: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
    },
});

/* Слайдер "сфера применения" */

const applicationsSlider = new Swiper('.aplications-slider .swiper', {
    speed: 450,
    grabCursor: true,
    lazyPreloadPrevNext: 1,
    parallax: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    navigation: {
        prevEl: ".aplications-button-prev",
        nextEl: ".aplications-button-next",
    },
    on: {
        slideChange: function () {
            applicationsNav.forEach(function (e) {
                e.classList.remove('active')
            });
            applicationsNav[this.realIndex].classList.add('active')
            applicationsTitle.slideTo([this.realIndex])
        },
    },
});

const applicationsTitle = new Swiper('.aplications-title .swiper', {
    speed: 400,
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    on: {
        slideChange: function () {
            applicationsSlider.slideTo([this.realIndex]);

            let currentSlide = this.slides[this.realIndex],
                currentSlideHeadline = currentSlide.querySelectorAll('.headline-m .s-line'),
                currentSlideText = currentSlide.querySelectorAll('.body-l .s-line');

            gsap.timeline()
                .fromTo(currentSlideHeadline, { y: "100%", opacity: '0'}, {  y: "0%", opacity: '1', duration: 1.5, ease: 'power4.out'}, "<")
                .fromTo(currentSlideText, { y: "100%", opacity: '0'}, {  y: "0%", opacity: '1', duration: 1, ease: 'power4.out'}, "<+.3");
        },
    },
});

let applicationsNav = document.querySelectorAll('.aplications .slider-nav li')

applicationsNav.forEach(function (e) {
    e.addEventListener('click', function(el) {
      el.preventDefault()
      applicationsSlider.slideTo([...el.target.parentNode.children].indexOf(el.target), 400)

      locomotiveScroll.scrollTo('.aplications-slider', {offset: -40});
    });
 });


/* Слайдер "характеристики" */

const characteristicsTitle = new Swiper('.characteristics-title .swiper', {
    speed: 400,
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    on: {
        slideChange: function () {
            characteristicsNav.forEach(function (e) {
                e.classList.remove('active')
            });
            characteristicsNav[this.realIndex].classList.add('active')

            let currentSlide = this.slides[this.realIndex],
                currentSlideHeadline = currentSlide.querySelectorAll('.headline-m .s-line'),
                currentSlideText = currentSlide.querySelectorAll('.body-l .s-line');

            gsap.timeline()
                .fromTo(currentSlideHeadline, { y: "100%", opacity: '0'}, {  y: "0%", opacity: '1', duration: 1.5, ease: 'power4.out'}, "<")
                .fromTo(currentSlideText, { y: "100%", opacity: '0'}, {  y: "0%", opacity: '1', duration: 1, ease: 'power4.out'}, "<+.3");
        },
    },
});

let characteristicsNav = document.querySelectorAll('.characteristics .slider-nav li')

characteristicsNav.forEach(function (e) {
    e.addEventListener('click', function(el) {
      el.preventDefault()
      characteristicsTitle.slideTo([...el.target.parentNode.children].indexOf(el.target), 400)

      locomotiveScroll.scrollTo('.characteristics-title', {offset: -40});
    });
});

let characteristicsPins = document.querySelectorAll('.characteristics .pins .pin')

characteristicsPins.forEach(function (e) {
    e.addEventListener('click', function(el) {
      el.preventDefault()
      characteristicsTitle.slideTo([...el.target.parentNode.children].indexOf(el.target), 400)

      locomotiveScroll.scrollTo('.characteristics-title', {offset: -40});
    });
});

/* Открытие мобильного меню */

if ( isPortrait() && isMobile()) {
    document.querySelector('.menu-icon').addEventListener('click', function () {
        document.querySelector('.menu').classList.toggle('open');
        this.classList.toggle('open');

        if (hasClass(this, 'open')) {
            tlMenu.timeScale(1).play();
            tlMenuIcon.timeScale(1).play();
        } else {
            tlMenu.timeScale(2).reverse();
            tlMenuIcon.timeScale(2).reverse();
        }
    });

    tlMenuIcon = gsap.timeline({paused: true});
    tlMenuIcon
        .to('.menu-icon .line:nth-child(1)', {yPercent: 250, duration: .7, ease: 'power4.out'})
        .to('.menu-icon .line:nth-child(3)', {yPercent: -220, duration: .7, ease: 'power4.out'}, "<")
        .to('.menu-icon .line:nth-child(2)', {opacity: 0, duration: 0.1}, "<")
        .to('.menu-icon .line:nth-child(1)', {rotate: '45deg', duration: .7, ease: 'power4.out'}, "<+.2")
        .to('.menu-icon .line:nth-child(3)', {rotate: '-45deg', duration: .7, ease: 'power4.out'}, "<");

    tlMenu = gsap.timeline({ paused: true});
    tlMenu
        .fromTo('.menu .menu-nav li,.menu .popup-contacts .title-m, .menu .popup-contacts li, .menu .popup-contacts .socials', 
            { y: '15%', opacity: 0}, 
            { y: '0%', opacity: 1, duration: 1.5, stagger: 0.07, ease: 'Expo.easeOut'}, "<")
}

/* Открытие модального окна */

let modal = document.querySelector('#modal-callback');

document.querySelectorAll(".js-open-modal-callback").forEach(function (e) {
    e.addEventListener('click', function () {
        modal.classList.add("open")
    });
});

document.querySelectorAll(".js-close-modal-callback").forEach(function (e) {
    e.addEventListener('click', function () {
        modal.classList.remove("open")
    });
});

/* Открытие popup окна "Связаться" */

let popupContacts = document.querySelector('.popup-contacts');

document.querySelectorAll(".js-open-popup-contacts").forEach(function (e) {
    e.addEventListener('click', function () {
        popupContacts.classList.add("open")
    });
});

document.querySelectorAll(".js-close-popup-contacts").forEach(function (e) {
    e.addEventListener('click', function () {
        popupContacts.classList.remove("open")
    });
});

/* Слайдер в фортфолио работ */

const workSliderThumbs = new Swiper('.work-slider-thumbs', {
    slidesPerView: 4,
    spaceBetween: '1.2%',
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        767: {
            spaceBetween: '2.4%'
        }
    }
});

const workSlider = new Swiper('.work-slider', {
    spaceBetween: '2.4%',
    speed: 450,
    grabCursor: true,
    lazyPreloadPrevNext: 1,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    thumbs: {
        swiper: workSliderThumbs,
    }
});




