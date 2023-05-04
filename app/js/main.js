
$(function () {

	$(window).resize(function () {
		if ($(window).width() < 1200) {
			$(".popular__wrapper").addClass("swiper");
			$(".popular__filter-item").addClass("swiper-slide");
		} else {
			$(".popular__wrapper").removeClass("swiper");
			$(".popular__filter-item").removeClass("swiper-slide");
		}
	});

	$(document).ready(function () {
		var mySwiper = null;

		function initSwiper() {
			if ($(window).width() <= 1200) {
				if (!mySwiper) {
					mySwiper = new Swiper('.popular__wrapper', {
						loop: false,
						slidesPerView: "auto",
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




	$(document).ready(function () {
		$('.burger-open,.burger-close,.menu__list a').click(function (event) {
			$('.burger-close,.burger-close__icon,.mobile').toggleClass('active')
			$('body').toggleClass('lock');
			event.stopPropagation();
		});

		$(document).click(function (event) {
			var container = $(".mobile");
			if (!container.is(event.target) && container.has(event.target).length === 0) {
				container.removeClass('active');
				$('body').removeClass('lock');
			}
			var screenWidth = $(window).width();
			var rightOffset = screenWidth - (screenWidth * 0.21);
			if (event.pageX > rightOffset) {
				container.removeClass('active');
				$('body').removeClass('lock');
			}
		});
	});


	$(window).resize(function () {
		if ($(window).width() < 768) {
			$(".restaurants__wrapper").addClass("swiper");
			$(".restaurants__item").addClass("swiper-slide");
		} else {
			$(".restaurants__wrapper").removeClass("swiper");
			$(".restaurants__item").removeClass("swiper-slide");
		}
	});

	$(document).ready(function () {
		var mySwiper = null;

		function initSwiper() {
			if ($(window).width() <= 768) {
				if (!mySwiper) {
					mySwiper = new Swiper('.restaurants__wrapper', {
						pagination: {
							el: '.restaurants__pagination',
							clickable: true,
						},
						loop: false,
						slidesPerView: "auto",
						spaceBetween: 20,
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


	$(document).ready(function () {
		$('.header__search-form,.header__cart').hide();
		$('.header__user-btn-cart').click(function () {
			$('.header__cart').slideToggle('fast');
		});
		$('.header__search-form').css('display', 'flex').hide();
		$('.header__user-btn').click(function () {
			$('.header__search-form').slideToggle('fast');
		});
	});



	$(document).ready(function () {
		const swiper3 = new Swiper('.reviews__content', {
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


	var mixer = mixitup('.popular__list');

});















