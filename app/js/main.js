
$(function () {


	$(window).resize(function () {
		if ($(window).width() < 800) {
			$(".restaurants__wrapper").addClass("swiper");
		} else {
			$(".restaurants__wrapper").removeClass("swiper");
		}
	});

	$(document).ready(function () {
		var mySwiper = null;

		function initSwiper() {
			if ($(window).width() <= 800) {
				if (!mySwiper) {
					mySwiper = new Swiper('.restaurants__wrapper', {
						loop: true,
						pagination: {
							el: '.restaurants__pagination',
							clickable: true,
						},
					});
				}
			} else {
				if (mySwiper) {
					mySwiper.destroy();
					mySwiper = null;
				}
			}
		}

		initSwiper();

		$(window).resize(function () {
			initSwiper();
		});
	});

	var mixer = mixitup('.popular__list');
	$(document).ready(function () {
		$('.header__user-form').hide();
		$('.header__user-btn-cart').click(function () {
			$('.header__cart').slideToggle('fast');
		});
		$('.header__user-form').css('display', 'flex').hide();
		$('.header__user-btn').click(function () {
			$('.header__user-form').slideToggle('fast');
		});
	});



	$(document).ready(function () {
		const swiper2 = new Swiper('.reviews__content', {
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












