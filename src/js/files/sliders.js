/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from "swiper";

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
  if (document.querySelector(".swiper")) {
    new Swiper(".swiper", {
      modules: [Navigation, Pagination, Autoplay, EffectFade],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      // preloadImages: false,
      // lazy: true,

      // Эффекты
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      // Пагинация

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      // navigation: {
      //   prevEl: ".swiper-button-prev",
      //   nextEl: ".swiper-button-next",
      // },

      // Брейкпоинты
      /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // События
      on: {},
    });
  }
  if (document.querySelector(".swiper-activities-history")) {
    new Swiper(".swiper-activities-history", {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 0,
      // autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      loop: false,
      // preloadImages: false,
      // lazy: true,

      // Эффекты
      // effect: "fade",
      // fadeEffect: {
      //   crossFade: true,
      // },
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },

      // Пагинация

      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      // navigation: {
      //   prevEl: ".swiper-button-prev",
      //   nextEl: ".swiper-button-next",
      // },

      // Брейкпоинты

      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 15,
          // autoHeight: true,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },

      // События
      on: {},
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
