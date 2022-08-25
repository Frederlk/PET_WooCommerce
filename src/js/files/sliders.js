import Swiper, { Navigation, Keyboard } from "swiper";
import "../../scss/base/swiper.scss";

function initSliders() {
    if (document.querySelector(".slider-testi__swiper")) {
        new Swiper(".slider-testi__swiper", {
            modules: [Navigation, Keyboard],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: false,
            watchOverflow: true,
            adaptiveHeight: true,
            speed: 800,
            direction: "vertical",
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
            navigation: {
                nextEl: ".page__testi .testi__item_next",
                prevEl: ".page__testi .testi__item_prev",
            },
        });
    }
}

window.addEventListener("load", function (e) {
    initSliders();
});
