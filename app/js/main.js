
$(function () {



	$(document).ready(function () {
		var mySwiper = null;

		function initSwiper() {
			if ($(window).width() <= 1200) {
				$(".popular__wrapper").addClass("swiper");
				$(".popular__filter-item").addClass("swiper-slide");

				if (!mySwiper) {
					mySwiper = new Swiper('.popular__wrapper', {
						loop: false,
						slidesPerView: "auto",
					});
				}
			} else {
				$(".popular__wrapper").removeClass("swiper");
				$(".popular__filter-item").removeClass("swiper-slide");

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
		$('.burger-open,.close-btn,.menu__list a').click(function (event) {
			$('.mobile-menu,.close-btn').toggleClass('active')
			$('body').toggleClass('lock');
			event.stopPropagation();
		});

		$(document).click(function (event) {
			var container = $(".mobile-menu");
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


	$(document).ready(function () {
		var mySwiper = null;

		function initSwiper() {
			if ($(window).width() <= 768) {
				$(".restaurants__wrapper").addClass("swiper");
				$(".restaurants__item").addClass("swiper-slide");
				if (!mySwiper) {
					mySwiper = new Swiper('.restaurants__wrapper', {
						pagination: {
							el: '.restaurants__pagination',
							clickable: true,
						},
						loop: true,
						slidesPerView: 1,
						spaceBetween: 20,
					});
				}
			} else {
				$(".restaurants__wrapper").removeClass("swiper");
				$(".restaurants__item").removeClass("swiper-slide");

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
		$('.header__search-form, .header__cart').hide();
		$('.header__user-btn-cart').click(function () {
			$('.header__search-form').slideUp('fast');
			$('.header__cart').slideToggle('fast');
		});
		$('.header__search-form').css('display', 'flex').hide();
		$('.header__user-btn').click(function () {
			$('.header__cart').slideUp('fast');
			$('.header__search-form').slideToggle('fast');
		});

		$(document).on('click', function (event) {
			if (!$(event.target).closest('.header__user-btn, .header__search-form, .header__user-btn-cart, .header__cart').length) {
				$('.header__search-form, .header__cart').slideUp('fast');
			}
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















