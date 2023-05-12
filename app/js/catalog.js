var rangeSlider = document.getElementById('range-slider'), input0 = document.getElementById('input-0'), input1 = document.getElementById('input-1'), inputs = [input0, input1], minRange = parseInt(input0.getAttribute('data-min')), maxRange = parseInt(input1.getAttribute('data-max')); noUiSlider.create(rangeSlider, { start: [parseInt(input0.getAttribute('data-from')), parseInt(input1.getAttribute('data-to'))], connect: !0, step: 1, range: { min: minRange, max: maxRange } }), rangeSlider.noUiSlider.on('update', function (e, r) { inputs[r].value = Math.round(e[r]) }); var setRangeSlider = function (e, r) { var t = [null, null]; t[e] = r, rangeSlider.noUiSlider.set(t) }; inputs.forEach(function (e, r) { e.addEventListener('input', function (e) { setRangeSlider(r, e.currentTarget.value) }) });

$('.select-style').on('click keypress blur', function (event) {
	if (event.type === 'click' || (event.type === 'keypress' && event.which === 13)) {
		$(this).toggleClass('active');
	} else if (event.type === 'blur') {
		$(this).removeClass('active');
	}
});

$(document).ready(function () {
	var mySwiper = null;

	function initSwiper() {
		if ($(window).width() <= 768) {
			$(".discounts__wrapper").addClass("swiper");
			$(".discounts__item").addClass("swiper-slide");
			if (!mySwiper) {
				mySwiper = new Swiper('.discounts__wrapper', {
					pagination: {
						el: '.discounts__pagination',
						clickable: true,
					},
					loop: true,
					slidesPerView: 1,
					spaceBetween: 20,
				});
			}
		} else {
			$(".discounts__wrapper").removeClass("swiper");
			$(".discounts__item").removeClass("swiper-slide");

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



	$(document).ready(function () {
		$('.filter-btn,.filter-close').click(function (event) {
			$('.filter-btn,.filter-close,.catalog__filters').toggleClass('open-filter');
			$('body').toggleClass('lock');
			event.stopPropagation();
		});

		$(document).click(function (event) {
			var container = $(".catalog__filters");
			if (!container.is(event.target) && container.has(event.target).length === 0) {
				container.removeClass('open-filter');
				$('body').removeClass('lock');
			}
			var screenWidth = $(window).width();
			var rightOffset = screenWidth - (screenWidth * 0.21);
			if (event.pageX > rightOffset) {
				container.removeClass('open-filter');
				$('body').removeClass('lock');
			}
		});
	});

});
