
$(function () {
	var mixer = mixitup('.popular__list');
	$(document).ready(function () {
		$('.header__user-form').hide();
		$('.header__user-btn-cart').click(function () {
			$('.header__cart-content').slideToggle('fast');
		});
		$('.header__user-form').css('display', 'flex').hide();
		$('.header__user-btn').click(function () {
			$('.header__user-form').slideToggle('fast');
		});
	});


	$(document).ready(function () {

		const swiper = new Swiper('.restaurants__slider', {
			loop: true,
			pagination: {
				el: '.restaurants__pagination',
				clickable: true,
			},
			breakpoints: {
				992: {

				},
			}
		});
		if (window.innerWidth > 992) {
			swiper.destroy();
		}
	});

	$(document).ready(function () {
		var $window = $(window);
		var $swiperContainer = $('.restaurants__slider');
		var swiper;

		function initSwiper() {
			swiper = new Swiper($swiperContainer, {
			});
		}

		function disableSwiper() {
			if (swiper) {
				swiper.destroy();
				swiper = undefined;
			}
		}
		function checkWindowSize() {
			if ($window.width() <= 992) {
				if (!swiper) {
					initSwiper();
				}
			} else {
				disableSwiper();
			}
		}

		checkWindowSize();
		$window.on('resize', checkWindowSize);
	});

	$(document).ready(function () {
		const swiper2 = new Swiper('.reviews__slider', {
			loop: true,
			effect: 'flip',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.reviews__pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.reviews__arrow-right',
				prevEl: '.reviews__arrow-left',
			},
		});
	});
});












