
import { Autoplay } from "swiper/modules";

export const defaultSliderOptions = {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: true,
    centeredSlides:true,
    
    breakpoints: {
        767 : {
            slidesPerView: 6,
            centeredSlides:false
        },
    }
}

export const mobileSliderOptions = {
    slidesPerView: 1.2,
    spceBetween: 10,
}

// flow slider
export const flowSliderOptions = {
    modules: [Autoplay],
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    spaceBetween: 24,
    speed: 4000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    breakpoints: {
        767 : {
            slidesPerView: 7
        },
    }
}