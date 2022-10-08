$(document).ready(function() {


    // const comments = new Swiper('.comments-swiper-js', {
    //     loop: true,
    //     slidesPerView: 1,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     pagination: {
    //         el: '.comments__dotted',
    //     },
    //     navigation: {
    //         nextEl: '.icon-drop_right',
    //         prevEl: '.icon-drop_left',
    //     },
    //     spaceBetween: 10,
    // });

    // const certificate = new Swiper('.certificate-swiper-js', {
    //     // loop: true,
    //     slidesPerView: 1,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     pagination: {
    //         el: '.certificate__dotted',
    //     },
    //     navigation: {
    //         nextEl: '.icon-arrow_long_right',
    //         prevEl: '.icon-arrow_long_left',
    //     },
    //     spaceBetween: 10,
    // });

    // const youtube = new Swiper('.youtubeBox-swiper-js', {
    //     loop: true,
    //     slidesPerView: 1,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     pagination: {
    //         el: '.youtubeBox__dotted',
    //     },
    //     navigation: {
    //         nextEl: '.icon-arrow_long_right',
    //         prevEl: '.icon-arrow_long_left',
    //     },
    //     spaceBetween: 10,
    // });

    // const blog = new Swiper('.blog-swiper-js', {
    //     loop: true,
    //     slidesPerView: 1,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     pagination: {
    //         el: '.blog__dotted',
    //     },
    //     navigation: {
    //         nextEl: '.icon-arrow_long_right',
    //         prevEl: '.icon-arrow_long_left',
    //     },
    //     spaceBetween: 22,
    //     breakpoints: {
    //         768: {
    //             spaceBetween: 38,
    //             slidesPerView: 2,
    //         },
    //     }
    // });

    // const logoSlider = new Swiper('.logoSlider-swiper-js', {
    //     // loop: true,
    //     slidesPerView: 1,
    //     speed: 500,
    //     autoplay: {
    //       delay: 5000,
    //     },
    //     grabCursor: true,
    //     pagination: {
    //         el: '.logoSlider__doted',
    //     },
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 4,
    //         },
    //     }
    // });

    // const teamSlider = new Swiper('.team-swiper-js', {
    //     loop: true,
    //     slidesPerView: 1,
    //     speed: 500,
    //     autoplay: {
    //       delay: 5000,
    //     },
    //     pagination: {
    //         el: '.team__dotted',
    //     },
    //     dynamicBullets: true,
    //     navigation: {
    //         nextEl: '.icon-arrow_long_right',
    //         prevEl: '.icon-arrow_long_left',
    //     },
    //     spaceBetween: 22,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2,
    //             spaceBetween: 34,
    //         },
    //     }
    // });

    function mobilSlider () {
        let aboutusSlider = null;
        let mediaQuerySize = 767;

        function initSlider () {
            if (!aboutusSlider) {
                aboutusSlider = new Swiper('.aboutusSlider-js', {
                    loop: true,
                    speed: 500,
                     autoplay: {
                       delay: 5000,
                     },

                    pagination: {
                        el: ".swiper-pagination",
                        type: "progressbar",
                    },
                    scrollbar: {
                        el: ".swiper-scrollbar",
                        // hide: true,
                    },

                    slidesPerView: 1,
                    spaceBetween: 22,

                    observer: true,
                    observeParents: true,
                    observeSlideChildren: true,
                });
            }
        }

        function destroySlider () {
            if (aboutusSlider) {
                aboutusSlider.destroy();
                aboutusSlider = null;
            }
        }

        $(window).on('load resize', function () {
            let windowWidth = $(this).innerWidth();
            if (windowWidth <= mediaQuerySize) {
                initSlider();
                // console.log('init');
            } else {
                destroySlider();
                // console.log('destroy');
            }
        });
    }
    mobilSlider();


    // const steps = new Swiper('.steps-swiper-js', {
    //     // loop: true,
    //     slidesPerView: 1,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     // grabCursor: true,
    //     pagination: {
    //         el: '.steps__dotted',
    //     },
    //     dynamicBullets: true,
    //
    //     spaceBetween: 22,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 3,
    //             spaceBetween: 0,
    //             navigation: {
    //                 nextEl: '.icon-arrow_long_right',
    //                 prevEl: '.icon-arrow_long_left',
    //             },
    //         },
    //     }
    // });

    // const tariffs = new Swiper('.tariffs-swiper-js', {
    //     // loop: true,
    //     slidesPerView: 1,
    //     initialSlide: 1,
    //     autoHeight: true,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     // grabCursor: true,
    //     pagination: {
    //         el: '.tariffs__dotted',
    //     },
    //     // dynamicBullets: true,
    //
    //     spaceBetween: 22,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 4,
    //             spaceBetween: 30,
    //             // navigation: {
    //             //     nextEl: '.icon-arrow_long_right',
    //             //     prevEl: '.icon-arrow_long_left',
    //             // },
    //         },
    //     }
    // });

    // const moreServices = new Swiper('.moreServices-swiper-js', {
    //     // loop: true,
    //     slidesPerView: 1,
    //     autoHeight: true,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     // grabCursor: true,
    //     pagination: {
    //         el: '.moreServices__dotted',
    //     },
    //     // dynamicBullets: true,
    //
    //     spaceBetween: 22,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 5,
    //             spaceBetween: 16,
    //             // navigation: {
    //             //     nextEl: '.icon-arrow_long_right',
    //             //     prevEl: '.icon-arrow_long_left',
    //             // },
    //         },
    //     }
    // });

    // const payment = new Swiper('.payment-swiper-js', {
    //     // loop: true,
    //     slidesPerView: 1,
    //     autoHeight: true,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     // grabCursor: true,
    //     pagination: {
    //         el: '.payment__dotted',
    //     },
    //     // dynamicBullets: true,
    //
    //     spaceBetween: 22,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2,
    //             spaceBetween: 84,
    //             // navigation: {
    //             //     nextEl: '.icon-arrow_long_right',
    //             //     prevEl: '.icon-arrow_long_left',
    //             // },
    //         },
    //     }
    // });

    // const more = new Swiper('.more-swiper-js', {
    //     // loop: true,
    //     slidesPerView: 1,
    //     autoHeight: true,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     // grabCursor: true,
    //     pagination: {
    //         el: '.more__dotted',
    //     },
    //     // dynamicBullets: true,
    //
    //     spaceBetween: 22,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 3,
    //             spaceBetween: 0,
    //             autoHeight: false,
    //
    //         },
    //     }
    // });

    // const gallery = new Swiper('.gallery-swiper-js', {
    //     loop: true,
    //     slidesPerView: 1,
    //     // autoHeight: true,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     // grabCursor: true,
    //     // pagination: {
    //     //     el: '.more__dotted',
    //     // },
    //     // dynamicBullets: true,
    //
    //     spaceBetween: 22,
    //     navigation: {
    //         nextEl: '.icon-arrow_right',
    //         prevEl: '.icon-arrow_left',
    //     },
    //     // breakpoints: {
    //     //     768: {
    //     //         slidesPerView: 3,
    //     //         spaceBetween: 0,
    //     //         autoHeight: false,
    //     //
    //     //     },
    //     // }
    // });

});

// jQuery(function($){
//   let windowWidth = $(window).width();
//   let windowHeight = $(window).height();
//
//   $(window).resize(function() {
//     if(windowWidth != $(window).width() || windowHeight != $(window).height()) {
//       location.reload();
//       return;
//     }
//   });
// });
