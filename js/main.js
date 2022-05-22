const facilities = document.querySelector('.facilities-list');

facilities.addEventListener('click', (evt) => {
    const facilitieId = evt.target.id;
    const facilitiesList = facilities.querySelectorAll('li');
    for (let i = 0; i < facilitiesList.length; i++) {
        const el = facilitiesList[i];
        if (el.classList.contains('active')) {
            el.classList.remove('active')
        }
    }
    evt.target.classList.add('active');
    facilities.style.backgroundImage = `url(../img/facilities_${facilitieId}.jpg)`
})


const introducingSwiper = new Swiper('.introducing-slider', {
    loop: false,
    slidesPerView: 1,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
    },

    // autoplay: {
    //     delay: 3000,
    //     disabledOnInteraction: false,
    // },

    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
});

const spacesSwiper = new Swiper('.space-cards-slider', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    autoHeight: true,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '0<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: false,
        dragSize: 40,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 1
        }
    }
});


const gallerySwiper = new Swiper('.gallery', {
    loop: false,
    slidesPerView: 3.6,
    spaceBetween: 30,
    initialSlide: 1,
    centeredSlides: false,
    grabCursor: true,
    freeMode: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1000 : {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});


const reviewsSwiper = new Swiper('.reviews-slider', {
    loop: false,
    slidesPerView: 2.5,
    spaceBetween: 30,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: false,
        dragSize: 40,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});