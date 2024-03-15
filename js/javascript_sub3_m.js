/* sub3_main_swiper */
let sub3MainSwiper = new Swiper(".sub3_main_swiper", {
    /*             autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                }, */
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        slideChangeTransitionEnd: function () {
            var activeIndex = this.realIndex + 1;
            this.el.classList.remove('slide1', 'slide2', 'slide3', 'slide4');
            this.el.classList.add('slide' + activeIndex);
            if (activeIndex === 1) {
                this.el.classList.add('slide1');
            }
        }
    }
});

let sub3PagingSwiper = new Swiper(".sub3_main_swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination2",
        type: "progressbar",
    },
});

sub3MainSwiper.controller.control = sub3PagingSwiper;


/* aside swiper */
let sub3AsideSwiper = new Swiper(".sub3_aside_swiper", {
    loop: false,
    slidesPerView: 4.5,
    spaceBetween: 0,
});











/* aside */
document.addEventListener('DOMContentLoaded', function () {
    const aside = document.querySelector('.sub3_aside_swiper');
    const asideTopOffset = aside.offsetTop;

    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;

        if (scrollTop > asideTopOffset) {
            aside.classList.add('fixed');
        } else {
            aside.classList.remove('fixed');
        }
    });

    let asideList = document.querySelectorAll('.sub3_aside_swiper .swiper-slide'); 

    window.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;

        asideList.forEach(function (li) {
            let targetSectionId = li.querySelector('a').getAttribute('href').substring(1);
            let targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                let sectionTop = targetSection.offsetTop;
                let sectionBottom = sectionTop + targetSection.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    li.classList.add('on');
                } else {
                    li.classList.remove('on');
                }
            }
        });
    });
});

/* section 의  swiper들 */
const sub3ContentsAreas = document.querySelectorAll('.sub3_contents_area');

sub3ContentsAreas.forEach(function (sub3ContentsArea) {
    new Swiper(sub3ContentsArea, {
        loop: false,
        slidesPerView: 2.5,
        spaceBetween: 20,
    });
});


